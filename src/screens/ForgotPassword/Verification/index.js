import React from "react";
import cn from "classnames";
import styles from "./Verification.module.sass";

const Verification = ({ goNext }) => {
  return (
    <form className={styles.form}>
      <h3 className={cn("h3", styles.title)}>Security verification</h3>
      <div className={styles.info}>
        To secure your account, please complete the following verification.
      </div>
      <div className={styles.text}>
        Enter the 6 digit code received by <span>t*m@u*8.net</span>
      </div>
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
      <div className={styles.btns}>
        <button className={cn("button-stroke button-small", styles.button)}>
          Resend code
        </button>
        <button className={cn("button-small", styles.button)} onClick={goNext}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default Verification;
