import React from "react";
import cn from "classnames";
import styles from "./ApiKeysEnabled.module.sass";
import TextInput from "../../../components/TextInput";
import Icon from "../../../components/Icon";

const ApiKeysEnabled = ({ goNext }) => {
  return (
    <div>
      <div className={styles.stage}>
        Enable API access on your account to generate keys.
      </div>
      <div className={cn("h3", styles.title)}>
        API Access is <span>Enabled</span>
      </div>
      <div className={styles.email}>
        <Icon name="email" size="24" />
        schinner@ui8.net
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.subtitle}>Your API keys</div>
          <div className={styles.group}>
            <div className={styles.box}>
              <TextInput
                className={styles.field}
                classLabel={styles.label}
                classInput={styles.input}
                label="API key 1"
                name="key-1"
                type="text"
              />
              <button className={styles.remove}>
                <Icon name="close" size="24" />
              </button>
              <div className={cn("category", styles.category)}>copied</div>
            </div>
            <div className={styles.box}>
              <TextInput
                className={styles.field}
                classLabel={styles.label}
                classInput={styles.input}
                label="API key 2"
                name="key-2"
                type="text"
              />
              <button className={styles.remove}>
                <Icon name="close" size="24" />
              </button>
              <div className={cn("category", styles.category)}>copied</div>
            </div>
          </div>
          <button className={cn("button-stroke button-small", styles.button)}>
            <Icon name="plus" size="16" />
            <span>Generate new API key</span>
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>Disable API keys</div>
          <div className={styles.info}>
            Enter your password and 2FA code to Disable the API keys
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
            Disable API keys
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeysEnabled;
