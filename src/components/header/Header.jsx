// 'use client'
// import { useSession } from 'next-auth/react' // client вариант

import { auth } from '@/lib/auth' // серверный вариант
import Link from 'next/link'
import styles from './header.module.css'
import { handleLogOut } from '@/lib/actions/actionsUsers'
import AvatarUser from '../avatarUser/AvatarUser'

const links = [
  {
    title: 'Homepage',
    path: '/'
  },

  {
    title: 'Dashboard',
    path: '/dashboard'
  },

  {
    title: 'Posts',
    path: '/posts'
  },

  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Register',
    path: '/register'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

const Header = async () => {
  const session = await auth() // серверный вариант
  console.log('Header session', session)

  // const session = useSession() // про этот client вариант рассказывает на 08:40 https://www.youtube.com/watch?v=fDesagJgw3w&t=206s

  return (
    <div className={styles.container}>
      <div className={styles.divLogo}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
      </div>
      <div className={styles.buttons}>
        {session && <AvatarUser session={session} />}
        {links.map((item) => (
          <Link href={item.path} key={item.title}>
            <button className="bg-[#008080] py-[5px] px-2.5 text-text border-none cursor-pointer">
              {item.title}
            </button>
          </Link>
        ))}
        {session && (
          <form action={handleLogOut}>
            <button className={styles.logout}>Logout</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Header
