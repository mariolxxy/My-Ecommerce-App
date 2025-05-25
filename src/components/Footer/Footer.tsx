import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.logo}>Bandage</h2>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      <div className={styles.footerGrid}>
        <div>
          <h3>Company Info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h3>Features</h3>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className={styles.subscribeSection}>
          <h3>Get In Touch</h3>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <small>Lorem imp sum dolor Amit</small>
        </div>
      </div>

      <div className={styles.bottomText}>
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
