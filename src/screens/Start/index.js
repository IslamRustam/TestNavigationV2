import React from 'react';
import MenuButton from '../../components/MenuButton';
import './styles.css';

const StartScreen = (props) => {
  return (
    <div className={props.isMenuOpen ? 'container rotation' : 'container'}>
      <div className='header'>
        <MenuButton toggleMenu={props.toggleMenu} />
        <h1 className='header__h1'>START</h1>
      </div>
    </div>
  );
};

export default StartScreen;
