import styles from './Dashboard.module.css';
import Header from './Header/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.containerDashboard}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
