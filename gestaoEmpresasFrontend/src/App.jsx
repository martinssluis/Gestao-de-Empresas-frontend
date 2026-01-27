import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/SideBar/SideBar';

function App() {
  return (
    <>
    <Sidebar/>
    <Outlet/>  
    </>
  );
}

export default App;
