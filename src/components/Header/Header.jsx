import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { Search, Bell, User, ChevronDown, X, Menu } from 'lucide-react';
import styles from './Header.module.css';

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    // 1. Change header background and close menu on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setIsMobileMenuOpen(false); // Close menu when scrolling
    };

    // 2. Close menu when clicking outside of the header component
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className={`${styles.Header} ${isScrolled ? styles.Scrolled : ''}`}>
      <div className={styles.container}>
        {/* Toggle Button */}
        <button
          className={styles.mobileNavToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Netflix Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/tv-shows">TV Shows</Link>
          <Link className={styles.navLink} to="/movies">Movies</Link>
          <Link className={styles.navLink} to="/latest">New & Popular</Link>
          <Link className={styles.navLink} to="/my-list">My List</Link>
          <Link className={styles.navLink} to="/languages">Browse by Languages</Link>
        </nav>

        {/* Right Controls */}
        <div className={styles.rightSection}>
          <div className={styles.SearchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.SearchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Movie Title"
                className={styles.searchInput}
                autoFocus
              />
            )}
          </div>

          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBage}>4</span>
          </button>

          <div
            className={styles.profileContainer}
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              <div className={styles.profileUser}>
                <User size={20} />
              </div>
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${isProfileOpen ? styles.chevronRotate : ''}`}
              />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link to="/account" className={styles.profileMenuItem}>Account</Link>
                <Link to="/help" className={styles.profileMenuItem}>Help Centre</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop overlay to catch outside clicks */}
      {isMobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <Link className={styles.navLink} to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link className={styles.navLink} to="/tv-shows" onClick={() => setIsMobileMenuOpen(false)}>TV Shows</Link>
        <Link className={styles.navLink} to="/movies" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
        <Link className={styles.navLink} to="/latest" onClick={() => setIsMobileMenuOpen(false)}>New & Popular</Link>
        <Link className={styles.navLink} to="/my-list" onClick={() => setIsMobileMenuOpen(false)}>My List</Link>
        <Link className={styles.navLink} to="/languages" onClick={() => setIsMobileMenuOpen(false)}>Browse by Languages</Link>
      </div>
    </header>
  );
}

export default Header;