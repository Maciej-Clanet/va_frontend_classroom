import './App.css';
import AllRoutes from './AllRoutes';
import { useTheme } from './Contexts/ThemeContext';

import MobileHeader from './Components/MobileHeader/MobileHeader';
import DesktopHeader from './Components/DesktopHeader/DesktopHeader';

function App() {

  const {theme} = useTheme()

  return (
    <div id="App" className={theme}>
      <DesktopHeader/>
      <MobileHeader/>
      <AllRoutes/>
    </div>
  );
}

export default App;
