import React from "react";
import cn from "classnames";
import styles from "./ApiKeysConfirm.module.sass";
import Icon from "../../../components/Icon";

const ApiKeysConfirm = ({ goNext }) => {
  return (
    <div>
      <div className={styles.preview}>
        <img
          srcSet="/images/content/lock@2x.png 2x"
          src="/images/content/lock.png"
          alt="Lock"
        />
      </div>
      <div className={styles.text}>
        Please check your email to confirm this action. <br></br>As a security
        measure, the confirmation link will expire in 15 minutes.
      </div>
      <div className={styles.email}>
        <Icon name="email" size="24" />
        schinner@ui8.net
      </div>
      <div className={styles.btns}>
        <button className={cn("button-stroke", styles.button)} onClick={goNext}>
          Go to inbox
        </button>
        <button className={cn("button-black", styles.button)} onClick={goNext}>
          <span>Resend email</span>
          <Icon name="email" size="16" />
        </button>
      </div>
    </div>
  );
};

export default ApiKeysConfirm;
