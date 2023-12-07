import React from 'react';
import styles from './Navbar.module.css';

// Components
import { NavLink, Link } from 'react-router-dom';
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs';
 

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link to='/'>ReactGram</Link>
        <form className={styles.searchform}>
            <BsSearch/>
            <input type='text' placeholder='Pesquisar'/>
        </form>
        <ul className={styles.navlinks}>
            <li>
                <NavLink to='/'>
                    <BsHouseDoorFill />
                </NavLink>
            </li>
            <li>
                <NavLink to='/login'>
                    Entrar
                </NavLink>
            </li>
            <li>
                <NavLink to='/register'>
                    Cadastrar
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar