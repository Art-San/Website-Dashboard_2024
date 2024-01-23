import HeaderH1 from '@/components/pageContent/HeaderH1'
import styles from './pages.module.css'
import { fetchHeaderSlug } from '@/lib/data/dataHeaders'
// http://localhost:3000/?ifso=home-1
// http://localhost:3000/?ifso=home-2
// http://localhost:3000/?ifso=blue-dragon

export default async function Home({ searchParams }) {
  const { ifso } = searchParams
  // const { ifso } = searchParams || { ifso: 'def' }
  const headerText = await fetchHeaderSlug(ifso)

  console.log('Home headerText:', headerText)
  return (
    <>
      <div className=" flex flex-col gap-4 m-5 items-center">
        <h1>Home Page</h1>

        {headerText ? (
          <HeaderH1 headerText={headerText} />
        ) : (
          'Аварийный заголовок'
        )}

        <ul>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>
      </div>
    </>
  )
}
