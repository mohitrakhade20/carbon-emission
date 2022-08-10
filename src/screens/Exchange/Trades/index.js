import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trades.module.sass";
import Icon from "../../../components/Icon";

const navigation = ["Market trades", "My trades"];

const items = [
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    negative: "36,780.64",
    amount: "0.003670",
    time: "18:12:16",
  },
  {
    positive: "36,780.64",
    amount: "0.135420",
    time: "18:12:16",
  },
];

const Trades = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.trades}>
      <div className={styles.nav}>
        {navigation.map((x, index) => (
          <button
            className={cn(styles.link, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            {x}
          </button>
        ))}
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Price (USDT)</div>
          <div className={styles.col}>Amount (BTC)</div>
          <div className={styles.col}>Time</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              {x.positive && (
                <div className={styles.positive}>{x.positive}</div>
              )}
              {x.negative && (
                <div className={styles.negative}>{x.negative}</div>
              )}
            </div>
            <div className={styles.col}>{x.amount}</div>
            <div className={styles.col}>{x.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trades;
