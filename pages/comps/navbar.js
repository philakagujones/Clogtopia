import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenuItems = () => {
    return (
      <>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/order">Order</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__brand}>
        <Link href="/">Your Brand</Link>
      </div>
      <div className={styles.navbar__menu}>
        <ul className={`${menuOpen ? styles.navbar__menu_items.open : styles.navbar__menu_items}`}>
          {renderMenuItems()}
        </ul>
        <button className={styles.navbar__menu_toggle} onClick={handleMenuClick}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
