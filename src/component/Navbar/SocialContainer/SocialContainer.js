import React from "react";
import { FaLinkedin, FaImdb } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import styles from "./style.module.css";
const SocialContainer = () => {
  const socialItem = [
    {
      icon: <FaLinkedin className={styles.icon} />,
      to: "https://www.linkedin.com/",
    },
    {
      icon: <FaImdb className={styles.icon} />,
      to: "https://www.imdb.com/",
    },
  ];
  return (
    <div className={styles.socialContainer}>
      {socialItem.map((el, i) => (
        <a href={el.to} target="_blank" rel="noreferrer" key={i}>
          {" "}
          {el.icon}
        </a>
      ))}
      <a
        href="mailto:collaborate@motionhaus.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <MdMailOutline className={styles.mail} />
      </a>
    </div>
  );
};

export default SocialContainer;
