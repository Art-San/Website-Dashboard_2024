'use client'

import { updateHeader } from '@/lib/actions/actionsHeaders'
import styles from './singleHeaderForm.module.css'
import { useFormState } from 'react-dom'

const SingleHeaderForm = ({ id, page, slug, text }) => {
  console.log('SingleHeaderForm id, page, slug, text', id, page, slug, text)
  const [state, formAction] = useFormState(updateHeader, undefined)

  return (
    <form action={formAction} className={styles.form}>
      <input type="hidden" name="id" value={id} />
      <label>Page</label>
      <select name="page" id="page" defaultValue={page}>
        <option value="Home">Home Page</option>
        <option value="Post">Post</option>
        <option value="About">About</option>
      </select>
      <label>Slug</label>
      <input type="text" name="slug" placeholder={slug} />
      <label>Текст заголовка</label>
      <textarea name="text" id="text" rows={5} placeholder={text}></textarea>
      <button>Update</button>
      {state?.error}
    </form>
  )
}

export default SingleHeaderForm
