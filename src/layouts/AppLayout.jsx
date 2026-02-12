import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Header />
      <MainContent />
      <Outlet />
    </>
  );
}
