import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>My Blog</Link>
        </div>
    </header>
  );
}