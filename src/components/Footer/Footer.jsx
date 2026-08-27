import React  from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
          <a href="#youtube" aria-label="Youtube"><FaYoutube /></a>
        </div>

        {/* Links Grid matching the exact image structure */}
        <div className={styles.footerLinks}>
          <ul>
            <li><a href="#audio">Audio Description</a></li>
            <li><a href="#investor">Investor Relations</a></li>
            <li><a href="#legal">Legal Notices</a></li>
          </ul>
          <ul>
            <li><a href="#help">Help Centre</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#cookie">Cookie Preferences</a></li>
          </ul>
          <ul>
            <li><a href="#gift">Gift Cards</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#corporate">Corporate Information</a></li>
          </ul>
          <ul>
            <li><a href="#media">Media Centre</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;