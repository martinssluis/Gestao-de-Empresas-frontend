import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Outlet />
    </>
  );
}

export default App;
