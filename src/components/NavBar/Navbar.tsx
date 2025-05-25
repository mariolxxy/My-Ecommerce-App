import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.left}>
          <FaPhoneAlt size={12} />
          <span>(225) 555-0118</span>
          <span className={styles.email}>michelle.rivera@example.com</span>
        </div>
        <div className={styles.center}>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className={styles.right}>
          <span>Follow Us:</span>
          <FaInstagram />
          <FaYoutube />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.logo}>Bandage</div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.action}>
            <FaUser /> <span>Login / Register</span>
          </div>
          <FaSearch className={styles.icon} />
          <div className={styles.cart}>
            <FaShoppingCart />
            <span>1</span>
          </div>
          <div className={styles.wishlist}>
            <FaHeart />
            <span>1</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
