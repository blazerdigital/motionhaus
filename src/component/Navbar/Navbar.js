import React from "react";

import SocialContainer from "./SocialContainer/SocialContainer";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src="/images/logo.png" alt="#" className={styles.logo} />

      <SocialContainer />
    </div>
  );
};

export default Navbar;
