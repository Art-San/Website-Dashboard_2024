import Image from 'next/image'

import styles from './singleHeader.module.css'
import { fetchHeader } from '@/lib/data/dataHeaders'
import SingleHeaderForm from '@/components/dashboard/headers/singleHeader/SingleHeaderForm'
// import { updateHeader } from '@/app/lib/actions'

const SingleHeaderPage = async ({ params }) => {
  const { idHeader } = params
  const { id, page, slug, text } = await fetchHeader(idHeader)
  console.log('header', id, page, slug, text)
  // Передача plainObject в компонент

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={'/noProduct.jpg'} alt="" fill />
        </div>
        {/* {header?.title} */}
      </div>
      <div className={styles.formContainer}>
        {/* <SingleHeaderForm /> */}
        <form className={styles.form}>
          {/* <form action={updateHeader} className={styles.form}> */}
          {/* <input type="hidden" name="id" value={header.id} /> */}

          <label>Page</label>
          <select name="page" id="page" defaultValue={page} required>
            <option value="Home">Home Page</option>
            <option value="Post">Post</option>
            <option value="About">About</option>
          </select>

          <label>Slug</label>
          <input type="text" name="slug" placeholder={slug} required />

          <label>Текст заголовка</label>
          <textarea
            name="text"
            id="text"
            rows={5}
            placeholder={text}
            required
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleHeaderPage

// import { updateHeader } from '@/app/lib/actions'
// import { fetchHeader } from '@/app/lib/data'
// import styles from '@/app/ui/dashboard/headers/singleHeader/singleHeader.module.css'
// import Image from 'next/image'

// const SingleHeaderPage = async ({ params }) => {
//   const { id } = params
//   const header = await fetchHeader(id)

//   return (
//     <div className={styles.container}>
//       <div className={styles.infoContainer}>
//         <div className={styles.imgContainer}>
//           <Image src="/noavatar.png" alt="" fill />
//         </div>
//         {header.title}
//       </div>
//       <div className={styles.formContainer}>
//         <form action={updateHeader} className={styles.form}>
//           <input type="hidden" name="id" value={header.id} />
//           <label>Title</label>
//           <input type="text" name="title" placeholder={header.title} />
//           <label>Price</label>
//           <input type="number" name="price" placeholder={header.price} />
//           <label>Stock</label>
//           <input type="number" name="stock" placeholder={header.stock} />
//           <label>Color</label>
//           <input
//             type="text"
//             name="color"
//             placeholder={header.color || 'color'}
//           />
//           <label>Size</label>
//           <textarea
//             type="text"
//             name="size"
//             placeholder={header.size || 'size'}
//           />
//           <label>Cat</label>
//           <select name="cat" id="cat">
//             <option value="kitchen">Kitchen</option>
//             <option value="computers">Computers</option>
//           </select>
//           <label>Description</label>
//           <textarea
//             name="text"
//             id="text"
//             rows="10"
//             placeholder={header.text}
//           ></textarea>
//           <button>Update</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SingleHeaderPage
