import './App.css';
import AllRoutes from './AllRoutes';
import { useTheme } from './Contexts/ThemeContext';
import { useState } from 'react';

function App() {

  const {theme} = useTheme()

  return (
    <div id="App" className={theme}>
      <AllRoutes/>
    </div>
  );
}

export default App;
