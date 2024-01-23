const HeaderH1 = ({ headerText }) => {
  console.log('HeaderH1 headerText:', headerText)

  return <h1>{headerText}</h1>
}

export default HeaderH1

// 'use client'

// import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'
// import { useRouter } from 'next/router'

// const headers = [
//   { id: 1, slug: 'gru', text: 'Грузчики сегодня навеселе' },
//   { id: 2, slug: 'car', text: 'Машина газель' },
//   { id: 3, slug: 'cargru', text: 'Машина газель с грузчиками' }
// ]

// const HeaderH1 = () => {
//   // CLIENT SIDE NAVIGATION
//   const router = useRouter()
//   // const pathname = usePathname()
//   const searchParams = useSearchParams()

//   // http://localhost:3000/?ifso=home-1
//   // /dashboard/users?page=1
//   const ifSo = searchParams.get('ifso')

//   const foundHeader = headers.find((header) => header.slug === ifSo)

//   const header = foundHeader ? foundHeader : 'Дефолтный заголовок'

//   console.log('ifSo', ifSo)
//   // console.log('pathname', pathname)

//   return (
//     <div>
//       <h1>{header}</h1>
//     </div>
//   )
// }

// export default HeaderH1
