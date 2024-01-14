import Link from 'next/link'

import styles from './header.module.css'
// import { auth } from '@/lib/auth'
// import UserAvatar from './userAvatar/UserAvatar'
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
  // const session = await auth()
  // console.log('Header session', session)

  return (
    <div className={styles.container}>
      <div className={styles.divLogo}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
      </div>
      <div className={styles.buttons}>
        {links.map((item) => (
          <Link href={item.path} key={item.title}>
            <button className="bg-[#008080] py-[5px] px-2.5 text-text border-none cursor-pointer">
              {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
