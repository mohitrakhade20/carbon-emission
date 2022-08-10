import React, { useState } from "react";
import cn from "classnames";
import styles from "./Settings.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "../../Icon";

const language = [
  {
    title: "English",
    flag: "🇺🇸",
  },
  {
    title: "Vietnamese",
    flag: "🇻🇳",
  },
  {
    title: "Russia",
    flag: "🇷🇺",
  },
];

const currency = ["USD", "RUB", "EUR", "JPY", "BTC"];

const Settings = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.settings, {
          [styles.active]: visible,
        })}
      >
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          EN/USD
          <Icon name="arrow-down" size="16" />
        </button>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.category}>Language</div>
              <div className={styles.menu}>
                {language.map((x, index) => (
                  <div
                    className={cn(styles.language, {
                      [styles.active]: index === 0,
                    })}
                    key={index}
                  >
                    <span className={styles.flag}>{x.flag}</span>
                    {x.title}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.category}>Currency</div>
              <div className={styles.menu}>
                {currency.map((x, index) => (
                  <div
                    className={cn(styles.currency, {
                      [styles.active]: index === 0,
                    })}
                    key={index}
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Settings;
