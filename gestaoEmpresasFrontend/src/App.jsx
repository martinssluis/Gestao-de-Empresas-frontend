import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { useState } from 'react';
import { darkTheme,lightTheme } from './components/ContrastIcon/Theme';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import ChangeTheme from './components/ContrastIcon/Theme';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Header/>
        <CssBaseline/>
        <ChangeTheme toogleTheme={() => setDark(prev => !prev)}/>
          <MainContent/>
       <Outlet/>
      </ThemeProvider>
    
   </>
  );
}

export default App;
