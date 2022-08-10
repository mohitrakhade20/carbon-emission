import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ item, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={cn(styles.item, { [styles.active]: visible })}>
        <div className={styles.row} onClick={() => setVisible(!visible)}>
          <div className={styles.col}>
            <div className={styles.currency}>
              <div className={styles.icon}>
                <img src={item.icon} alt="Currency" />
              </div>
              <div className={styles.details}>
                <div className={styles.info}>{item.currency}</div>
                <div className={styles.text}>{item.content}</div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>{item.currencyTotal}</div>
            <div className={styles.text}>{item.priceTotal}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>{item.currencyAvailable}</div>
            <div className={styles.text}>{item.priceAvailable}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>{item.currencyInterest}</div>
            <div className={styles.text}>{item.priceInterest}</div>
          </div>
        </div>
        <div className={styles.btns}>{children}</div>
      </div>
    </>
  );
};

export default Item;
