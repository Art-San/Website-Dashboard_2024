import Image from 'next/image'

import styles from './singleHeader.module.css'
import { fetchHeader } from '@/lib/data/dataHeaders'
import SingleHeaderForm from '@/components/dashboard/headers/singleHeader/SingleHeaderForm'

const SingleHeaderPage = async ({ params }) => {
  const { idHeader } = params
  const { id, page, slug, text } = await fetchHeader(idHeader)

  const image = {
    Home: '/astronaut.png',
    Post: '/draconRoz.png',
    About: '/draconSin.png'
  }
  // Получаем путь к изображению в зависимости от значения page
  const imagePath = image[page] || '/noAvatar.png'

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={imagePath} alt="" fill />
        </div>
        {page}
      </div>
      <div className={styles.formContainer}>
        <SingleHeaderForm id={id} page={page} slug={slug} text={text} />
      </div>
    </div>
  )
}

export default SingleHeaderPage
// import Image from 'next/image'

// import styles from './singleHeader.module.css'
// import { fetchHeader } from '@/lib/data/dataHeaders'
// import SingleHeaderForm from '@/components/dashboard/headers/singleHeader/SingleHeaderForm'
// // import { updateHeader } from '@/app/lib/actions'

// const SingleHeaderPage = async ({ params }) => {
//   const { idHeader } = params
//   const { id, page, slug, text } = await fetchHeader(idHeader)
//   // console.log('header', id, page, slug, text)
//   // Передача plainObject в компонент

//   return (
//     <div className={styles.container}>
//       <div className={styles.infoContainer}>
//         <div className={styles.imgContainer}>
//           <Image src={'/noProduct.jpg'} alt="" fill />
//         </div>
//         {/* {header?.title} */}
//       </div>
//       <div className={styles.formContainer}>
//         <SingleHeaderForm id={id} page={page} slug={slug} text={text} />
//         <form className={styles.form}>
//           {/* <form action={updateHeader} className={styles.form}> */}
//           {/* <input type="hidden" name="id" value={header.id} /> */}

//           <label>Page</label>
//           <select name="page" id="page" defaultValue={page} required>
//             <option value="Home">Home Page</option>
//             <option value="Post">Post</option>
//             <option value="About">About</option>
//           </select>

//           <label>Slug</label>
//           <input type="text" name="slug" placeholder={slug} required />

//           <label>Текст заголовка</label>
//           <textarea
//             name="text"
//             id="text"
//             rows={5}
//             placeholder={text}
//             required
//           ></textarea>
//           <button>Update</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SingleHeaderPage
