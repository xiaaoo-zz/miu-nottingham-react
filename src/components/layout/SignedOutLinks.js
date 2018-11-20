import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';


export default function SignedOutLinks() {
  return (
    <ul className={styles.ul}>
      <li><NavLink className={styles.a} to='/'>Signup</NavLink></li>
      <li><NavLink className={styles.a} to='/'>login</NavLink></li>
    </ul>
  )
}