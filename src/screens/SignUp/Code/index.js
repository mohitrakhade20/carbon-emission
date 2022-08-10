import React from "react";
import cn from "classnames";
import styles from "./Code.module.sass";

const Code = () => {
  return (
    <form className={styles.form}>
      <h3 className={cn("h3", styles.title)}>Enter your security code</h3>
      <div className={styles.info}>We texted your code to +1 234 567 890</div>
      <div className={styles.code}>
        <div className={styles.number}>
          <input type="tel" />
        </div>
        <div className={styles.number}>
          <input type="tel" />
        </div>
        <div className={styles.number}>
          <input type="tel" />
        </div>
        <div className={styles.number}>
          <input type="tel" />
        </div>
      </div>
    </form>
  );
};

export default Code;
