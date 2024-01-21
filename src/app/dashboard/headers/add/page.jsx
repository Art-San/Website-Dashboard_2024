'use client'

import { addHeader } from '@/lib/actions/actionsHeaders'
import styles from './addHeaders.module.css'
import { useFormState } from 'react-dom'

const AddHeaderPage = () => {
  const [state, formAction] = useFormState(addHeader, undefined)
  return (
    <>
      <div className={styles.container}>
        <form action={formAction} className={styles.form}>
          <input type="hidden" name="userId" value={''} />
          <select name="page" id="page" required>
            <option disabled selected hidden value="">
              Выберете страницу
            </option>
            <option value="Home">Home Page</option>
            <option value="Post">Post</option>
            <option value="About">About</option>
          </select>
          <input type="text" placeholder="Slug" name="slug" required />

          <textarea
            required
            name="text"
            id="text"
            rows={10}
            placeholder="Введите текст заголовка"
          ></textarea>
          <button type="submit">Submit</button>
          {state?.error}
        </form>
      </div>
      {/*1:25:00*/}
      {/* <div className=" bg-bgSoft p-5 rounded-[10px] mt-5">
        <form className=" flex flex-wrap justify-between">
          <input
            type="text"
            placeholder="title"
            name="title"
            required
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          />
          <select
            name="cat"
            id="cat"
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input
            type="number"
            placeholder="price"
            name="price"
            required
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          />
          <input
            type="number"
            placeholder="stock"
            name="stock"
            required
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          />
          <input
            type="text"
            placeholder="color"
            name="color"
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          />
          <input
            type="text"
            placeholder="size"
            name="size"
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-[45%]"
          />
          <textarea
            required
            name="desc"
            id="desc"
            rows={16}
            placeholder="Description"
            className="p-[30px] bg-bg border-solid border-2 border-[#2e374a] rounded=[5px] mb-[30px] w-full"
          ></textarea>
          <button
            type="submit"
            className="w-full p-[30px] bg-[#4de5e5] text-text border-none rounded-[5px] cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div> */}
    </>
  )
}

export default AddHeaderPage
