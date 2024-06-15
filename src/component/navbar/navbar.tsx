"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import { Sparkles, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarStyles = menuOpen ? styles.navbarMobile : styles.navbar;
  const getAppButtonStyles = menuOpen
    ? styles.getAppButtonMenu
    : styles.getAppButton;
  return (
    <>
      <nav className={styles.wrapper}>
        <div className={navbarStyles}>
          <a onClick={closeMenu}>
            <Sparkles size={25} />
            <span>Mino</span>
          </a>
          <div className={styles.links}>
            <a onClick={closeMenu}>Features</a>
            <a onClick={closeMenu}>How it Works</a>
            <a onClick={closeMenu}>Testimonials</a>
          </div>
          <div>
            {menuOpen === false && (
              <button className={styles.getAppButton}>Get the App</button>
            )}
            <button
              className={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.menu}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "10px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  duration: 0.5,
                },
              },
            }}
          >
            <a onClick={closeMenu}>Features</a>

            <a onClick={closeMenu}>How it Works</a>
            <a onClick={closeMenu}>Testimonials</a>
          </motion.div>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "10px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  duration: 0,
                },
              },
            }}
            className={getAppButtonStyles}
          >
            Get the App
          </motion.button>
        </div>
      )}
    </>
  );
}
