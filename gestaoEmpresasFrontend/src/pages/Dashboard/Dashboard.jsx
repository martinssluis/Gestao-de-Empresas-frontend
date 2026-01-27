import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import SwipeableTemporaryDrawer from '../../components/SideBar/SwipeableDrawer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <SwipeableTemporaryDrawer />
      <div className={styles.containerDashboard}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
