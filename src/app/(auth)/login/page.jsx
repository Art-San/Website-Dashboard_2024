'use client'
import {
  handleGithubLogin,
  handleGoogleLogin
} from '@/lib/actions/actionsUsers'
import styles from './login.module.css'
import LoginForm from '@/components/loginForm/LoginForm'
import { useSearchParams } from 'next/navigation'

// import { auth } from '@/lib/auth'
// import { useRouter } from 'next/navigation'

const LoginPage = () => {
  // const router = useRouter()
  // const session = await auth()

  // console.log('LoginPage auth?.user.isAdmin', session?.user?.isAdmin)
  // session?.user && router.push('/')
  // auth?.user.isAdmin && router.push('/')

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'
  console.log('login callbackUrl ', callbackUrl)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGoogleLogin}>
          <button className={styles.google}>Login with Google</button>
        </form>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
