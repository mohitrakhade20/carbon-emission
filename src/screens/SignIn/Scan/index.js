import React from "react";
import cn from "classnames";
import styles from "./Scan.module.sass";

const Scan = () => {
  return (
    <div className={styles.box}>
      <div className={styles.details}>
        <div className={styles.code}>
          <img src="/images/content/qr-code.jpg" alt="Qr code" />
        </div>
        <button className={cn("button-stroke", styles.button)}>
          Download app
        </button>
      </div>
    </div>
  );
};

export default Scan;
