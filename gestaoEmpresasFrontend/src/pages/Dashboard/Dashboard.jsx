import styles from './Dashboard.module.css';
import Header from './Header/Header';
import SwipeableTemporaryDrawer from './SideBar/SwipeableDrawer';

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
