import Link from 'next/link'

import styles from './headers.module.css'

// import { deleteProduct } from '@/app/lib/actions'
import Pagination from '@/components/dashboard/pagination/Pagination'
import Search from '@/components/dashboard/search/Search'
import { fetchHeaders } from '@/lib/data/dataHeaders'
import { deleteHeader } from '@/lib/actions/actionsHeaders'

const HeadersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, headers } = await fetchHeaders(q, page)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a header..." />
        <Link href="/dashboard/headers/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Page</td>
            <td>Slug</td>
            <td>Header</td>
          </tr>
        </thead>
        <tbody>
          {headers.map((header) => (
            <tr key={header.id}>
              <td>
                <div className={styles.header}>{header.page}</div>
              </td>
              <td>{header.slug}</td>
              <td>{header.text}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/headers/${header.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteHeader}>
                    <input type="hidden" name="id" value={header.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.top}>
  //       <Search placeholder="Search for a header..." />
  //       <Link href="/dashboard/headers/add">
  //         <button className={styles.addButton}>Add New</button>
  //       </Link>
  //     </div>
  //     <table className={styles.table}>
  //       <thead>
  //         <tr>
  //           <td>Title</td>
  //           <td>Description</td>
  //           <td>Price</td>
  //           <td>Created At</td>
  //           <td>Stock</td>
  //           <td>Action</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>
  //             <div className={styles.header}>
  //               <Image
  //                 src={'/noProduct.jpg'}
  //                 alt=""
  //                 width={40}
  //                 height={40}
  //                 className={styles.headerImage}
  //               />
  //               Iphone
  //             </div>
  //           </td>
  //           <td>{'Desc'}</td>
  //           <td>{'$999'}</td>
  //           <td>{'12/12/23'}</td>
  //           <td>{'72'}</td>
  //           <td>
  //             <div className={styles.buttons}>
  //               <Link href={`/dashboard/headers/test`}>
  //                 <button className={`${styles.button} ${styles.view}`}>
  //                   View
  //                 </button>
  //               </Link>
  //               <form>
  //                 <input type="hidden" name="id" />
  //                 <button className={`${styles.button} ${styles.delete}`}>
  //                   Delete
  //                 </button>
  //               </form>
  //             </div>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <Pagination />
  //   </div>

  // )
}

export default HeadersPage
