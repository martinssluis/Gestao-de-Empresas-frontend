import styles from './Dashboard.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header'

export default function Dashboard() {
  return (
    <>
    <Header/>
      <Sidebar/>
      <div className={styles.containerDashboard}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
