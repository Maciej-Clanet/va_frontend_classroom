import './App.css';
import AllRoutes from './AllRoutes';
import { useTheme } from './Contexts/ThemeContext';

function App() {

  const {theme} = useTheme()

  return (
    <div id="App" className={theme}>
      <AllRoutes/>
    </div>
  );
}

export default App;
