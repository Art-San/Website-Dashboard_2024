'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const headers = [
  { id: 1, slug: 'gru', text: 'Грузчики сегодня навеселе' },
  { id: 2, slug: 'car', text: 'Машина газель' },
  { id: 3, slug: 'cargru', text: 'Машина газель с грузчиками' }
]
// 2:10:22
const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  // const pathname = usePathname()
  const searchParams = useSearchParams()

  // http://localhost:3000/navigationtest?ifso=darc
  // /dashboard/users?page=1
  const ifSo = searchParams.get('ifso')

  const foundHeader = headers.find((header) => header.slug === ifSo)

  const header = foundHeader ? foundHeader : 'Дефолтный заголовок'

  console.log('ifSo', ifSo)
  // console.log('pathname', pathname)
  const handleClick = () => {
    console.log('clicked')
    // router.refresh() // обновляет страницу
    // router.replace('/') // replace без записи в историю браузера, не получится вернуться

    // router.push('/')
    // router.back() // назад
    router.forward() // вперед
  }

  return (
    <div>
      <h1>{header}</h1>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Написать и перенаправить</button>
    </div>
  )
}

export default NavigationTestPage
