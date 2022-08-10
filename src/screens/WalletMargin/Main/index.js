import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";

const Main = () => {
  return (
    <div className={styles.main}>
      <h4 className={cn("h4", styles.title)}>Margin</h4>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.info}>Total balance</div>
          <div className={styles.currency}>
            <div className={styles.number}>0.27894652</div>
            <div className={cn("category-green", styles.category)}>BTC</div>
          </div>
          <div className={styles.price}>$10,098.36</div>
        </div>
        <div className={cn(styles.item, styles.flex)}>
          <div className={styles.chart}>
            <img src="/images/content/chart.svg" alt="Chart" />
          </div>
          <div className={styles.details}>
            <div className={styles.info}>Margin level</div>
            <div className={styles.currency}>
              <div className={styles.number}>999.00</div>
              <div className={cn("category-green", styles.category)}>
                low risk
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.stage}>Account Equity</div>
          <div className={styles.currency}>
            <div className={styles.number}>0.00000000</div>
            <div className={cn("category-gray", styles.category)}>BTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
