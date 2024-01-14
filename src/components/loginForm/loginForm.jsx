'use client'

import { login } from '@/lib/actions/actionsUsers'
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'
import Link from 'next/link'

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined)

  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm
