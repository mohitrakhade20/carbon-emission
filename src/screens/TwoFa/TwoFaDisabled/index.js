import React from "react";
import cn from "classnames";
import styles from "./TwoFaDisabled.module.sass";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";

const TwoFaDisabled = ({ goEnabled }) => {
  return (
    <div>
      <div className={cn("h3", styles.title)}>
        2FA <span>Disabled</span>
      </div>
      <div className={styles.text}>
        If you want to turn off 2FA, input your account password and the
        six-digit code provided by the Google Authenticator app below, then
        click "<span>Disable 2FA</span>".
      </div>
      <div className={styles.subtitle}>Enable 2FA</div>
      <div className={styles.info}>
        Enter your password and scan SQ code by the Google Authenticator app to
        Enable the 2FA verification
      </div>
      <div className={styles.email}>
        <Icon name="email" size="24" />
        schinner@ui8.net
      </div>
      <TextInput
        className={styles.field}
        label="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        view
      />
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
      <div className={styles.btns}>
        <button
          className={cn("button-green", styles.button)}
          onClick={goEnabled}
        >
          Enable 2FA
        </button>
      </div>
    </div>
  );
};

export default TwoFaDisabled;
