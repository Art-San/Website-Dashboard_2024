import Link from 'next/link'
import styles from './pages.module.css'

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

export default function Home() {
  return (
    <>
      {/* <div className={styles.container}> */}
      <div className=" flex flex-col gap-4 m-5 items-center">
        <h1>Home Page</h1>
        <ul>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>
        {/* <div className={styles.buttons}>
          {links.map((item) => (
            <Link href={item.path} key={item.title}>
              <button className="bg-[#008080] py-[5px] px-2.5 text-text border-none cursor-pointer">
                {item.title}
              </button>
            </Link>
          ))}
        </div> */}
      </div>
    </>
  )
}