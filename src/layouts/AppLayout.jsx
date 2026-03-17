import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

function MainContent() {}

export default function AppLayout() {
  return (
    <>
      <Header />
      <MainContent />
      <Outlet />
    </>
  );
}
