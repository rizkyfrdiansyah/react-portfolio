import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ferdiansyah</h1>
        <p className={styles.description}>
          Let me introduce myself, my full name is Muhammad Rizky Ferdiansyah. I am a Front End Developer with less than 1 year of experience using JavaScript libraries namely React JS. Contact us if you want to learn more!
        </p>
        <a href="mailto:muhammadrizkyferdiansyah@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
