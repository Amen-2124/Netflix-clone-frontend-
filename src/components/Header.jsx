import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // for blur
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scroll > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.Container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />
        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>
        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.SearchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>
          {/* notification */}
          <button className={styles.Bell}>
            <Bell size={20} />
            <span className={styles.notification}>4</span>
          </button>
          {/* profile */}
          <div className={styles.profile}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
