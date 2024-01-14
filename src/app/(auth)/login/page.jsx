import styles from './login.module.css'
import LoginForm from '@/components/loginForm/LoginForm'
// import { handleGithubLogin } from '@/lib/action'
// import { auth } from '@/lib/auth'
// import { useRouter } from 'next/navigation'

const LoginPage = () => {
  // const router = useRouter()
  // const session = await auth()

  // console.log('LoginPage auth?.user.isAdmin', session?.user?.isAdmin)
  // session?.user && router.push('/')
  // auth?.user.isAdmin && router.push('/')

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          {/* <form action={handleGithubLogin}> */}
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
