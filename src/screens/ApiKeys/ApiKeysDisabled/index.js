import React from "react";
import cn from "classnames";
import styles from "./ApiKeysDisabled.module.sass";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";

const ApiKeysDisabled = ({ goNext }) => {
  return (
    <div>
      <div className={styles.stage}>
        Enable API access on your account to generate keys.
      </div>
      <div className={cn("h3", styles.title)}>
        API Access is <span>Disabled</span>
      </div>
      <div className={styles.email}>
        <Icon name="email" size="24" />
        schinner@ui8.net
      </div>
      <div className={styles.subtitle}>Enable API keys</div>
      <div className={styles.info}>
        Enter your password and 2FA code to Enable the API keys
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
      <button className={cn("button", styles.button)} onClick={goNext}>
        Enable API keys
      </button>
    </div>
  );
};

export default ApiKeysDisabled;
