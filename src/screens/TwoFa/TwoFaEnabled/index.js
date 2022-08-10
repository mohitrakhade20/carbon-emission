import React from "react";
import cn from "classnames";
import styles from "./TwoFaEnabled.module.sass";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";

const TwoFaEnabled = ({ goDisabled }) => {
  return (
    <div>
      <div className={cn("h3", styles.title)}>
        2FA <span>Enabled</span>
      </div>
      <div className={styles.text}>
        If you want to turn off 2FA, input your account password and the
        six-digit code provided by the Google Authenticator app below, then
        click "<span>Disable 2FA</span>".
      </div>
      <div className={styles.subtitle}>Disable 2FA</div>
      <div className={styles.info}>
        Enter your password and the six-digit code provided by the Google
        Authenticator app to Disable the 2FA verification
      </div>
      <div className={styles.email}>
        <Icon name="email" size="24" />
        schinner@ui8.net
      </div>
      <div className={styles.row}>
        <TextInput
          className={styles.field}
          label="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          view
        />
        <TextInput
          className={styles.field}
          label="2FA code"
          name="code"
          type="text"
          required
        />
      </div>
      <button className={cn("button-red", styles.button)} onClick={goDisabled}>
        Disable 2FA
      </button>
    </div>
  );
};

export default TwoFaEnabled;
