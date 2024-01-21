'use client'

import styles from './singleHeaderForm.module.css'
// import { useFormState } from 'react-dom'

const SingleHeaderForm = (header) => {
  // const [state, formAction] = useFormState(login, undefined)

  return (
    <form className={styles.form}>
      {/* <form action={updateHeader} className={styles.form}> */}
      <input type="hidden" name="id" value={header.id} />

      <label>Page</label>
      <select name="page" id="page" required>
        <option disabled selected hidden value="">
          {header.page}
        </option>
        <option value="Home">Home Page</option>
        <option value="Post">Post</option>
        <option value="About">About</option>
      </select>

      <label>Slug</label>
      <input type="text" name="slug" placeholder={header.slug} required />

      <label>Текст заголовка</label>
      <textarea
        name="text"
        id="text"
        rows={5}
        placeholder={header.text}
        required
      ></textarea>
      <button>Update</button>
    </form>
  )
}

export default SingleHeaderForm
