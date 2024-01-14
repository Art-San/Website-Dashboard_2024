import styles from '@/components/dashboard/dashboard.module.css'
import RightBar from '@/components/dashboard/rightBar/RightBar'
import Transactions from '@/components/dashboard/transactions/Transactions'
import Card from '@/components/dashboard/card/Card'
import Chart from '@/components/dashboard/chart/Chart'

const DashboardPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <RightBar />
        </div>
      </div>
      {/*38:36*/}
      {/* <div className="flex gap-5 mt-5">
        <div className="flex flex-col basis-[75%] gap-5 ">
          <div className="flex gap-5 justify-between">
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="basis-[25%]">
          <RightBar />
        </div>
      </div> */}
    </>
  )
}

export default DashboardPage

// import { cards } from "@/lib/data";
// import Card from "@/components/dashboard/card/card";
// import Chart from "@/components/dashboard/chart/chart";
// import styles from "@/components/dashboard/dashboard.module.css";
// import Rightbar from "@/components/dashboard/rightbar/rightbar";
// import Transactions from "@/components/dashboard/transactions/transactions";

// const Dashboard = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.main}>
//         <div className={styles.cards}>
//           {cards.map((item) => (
//             <Card item={item} key={item.id} />
//           ))}
//         </div>
//         <Transactions />
//         <Chart />
//       </div>
//       <div className={styles.side}>
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
