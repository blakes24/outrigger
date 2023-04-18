import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import logo from "../assets/boo-logo.webp";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 576px)" });

  useEffect(() => {
    setMobileNav(isMobile);
  }, [isMobile]);

  const toggleMenu = () => {
    mobileNav && setOpen(!open);
  };

  const links = (
    <ul>
      <li onClick={toggleMenu}>
        <Link href="#">Home</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link href="#projects">About</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link href="#about">Membership</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link href="#contact">Calender</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link href="#contact">Media</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link href="#contact">Friends of the Club</Link>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.main} ${mobileNav && styles.mobileNav}`}>
      {mobileNav ? (
        <>
          {!open && (
            <Image
              className={styles.logo}
              src={logo}
              alt="Next.js Logo"
              height={80}
              priority
            />
          )}
          <span className={styles.mobile}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.menu}
              onClick={toggleMenu}
            />
            {open && links}
          </span>
        </>
      ) : (
        <>
          <Image
            className={styles.logo}
            src={logo}
            alt="Next.js Logo"
            height={80}
            priority
          />
          <span className={styles.nav}>{links}</span>
        </>
      )}
    </nav>
  );
};

export default Navbar;
