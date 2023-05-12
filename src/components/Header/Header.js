import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header_container}>
    <h1>
      <img src="assets/batidor.png" alt="Logo" />
    </h1>
    <h2>
      Recetas de Noe
    </h2>
    <nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>;
};


export default Header;
