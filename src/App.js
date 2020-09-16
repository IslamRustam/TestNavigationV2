import React, {useState} from 'react';
import StartScreen from "./screens/Start";
import Navigator from "./components/Navigator";
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='wrapper'>
      {isMenuOpen && <Navigator name={'Viktor'} toggleMenu={toggleMenuHandler} />}
      <div className='wrapper__screen'>
        <StartScreen isMenuOpen={isMenuOpen} toggleMenu={toggleMenuHandler} />
      </div>
    </div>
  );
}

export default App;
