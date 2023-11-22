import './App.css';
import AllRoutes from './AllRoutes';
import { useTheme } from './Contexts/ThemeContext';
import { useState } from 'react';

import Header from './Components/Nav/Header/Header';

function App() {

  const {theme} = useTheme()

  return (
    <div id="App" className={theme}>
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
