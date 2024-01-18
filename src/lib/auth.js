import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { connectToDB } from './utils'
import { User } from './models/user'
import bcrypt from 'bcrypt'
// import Credentials from 'next-auth/providers/credentials'

const login = async (credentials) => {
  console.log('credentials.username', credentials.username)
  console.log('credentials.password', credentials.password)
  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    // if (!user) throw new Error('Wrong credentials!')
    if (!user || !user.isAdmin) throw new Error('не user или не admin!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('Wrong credentials!')

    return user
  } catch (err) {
    throw new Error('неверный пароль или логин!')
  }
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          console.log('auth authorize user', user)
          return user
        } catch (err) {
          console.log('auth CredentialsProvider err', err)
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log('user', user) // undefined
      // console.log('account', account) // данные с гит
      // console.log('profile', profile) // данные с гит профиля
      if (account.provider === 'github') {
        connectToDB()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
              cameFrom: account.provider
            })

            await newUser.save()
          }
        } catch (err) {
          console.log(err)
          return false
        }
      }
      return true
    },
    ...authConfig.callbacks
  }
})
