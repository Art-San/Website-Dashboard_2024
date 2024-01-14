import Header from '@/components/header/Header'
import styles from './pages.module.css'
import Footer from '@/components/dashboard/footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.containerL}>
        <Header />
        {children}
        <Footer />
      </div>
      {/*TODO: не могу найти flex: 4; --- заменил на basis-[22.5%]*/}
      {/* <div className="flex">
        <div className="basis-[22.5%] p-5 bg-bgSoft min-h-screen">
          <Sidebar />
        </div>
        <div className="basis-[77.5%] p-5">
          <div className="basis-4/5 p-5">
          <Navbar />
          {children}
        </div>
      </div> */}
    </>
  )
}

export default Layout
