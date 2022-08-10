import React, { useState } from "react";
import cn from "classnames";
import styles from "./Table.module.sass";
import Dropdown from "../../../components/Dropdown";

const navigation = ["Market trades", "My trades", "Open orders", "Favorites"];

const items = [
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.245455484546",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.188888888888",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.245455484546",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.188888888888",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.245455484546",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.188888888888",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.245455484546",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.188888888888",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.245455484546",
    total: "36,641.2a09735578",
  },
  {
    time: "18:05:40",
    positive: "36,641.209735578",
    amount: "0.188888888888",
    total: "36,641.2a09735578",
  },
];

const Table = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(navigation[0]);

  return (
    <div className={styles.inner}>
      <Dropdown
        className={styles.dropdown}
        value={sorting}
        setValue={setSorting}
        options={navigation}
      />
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
          <div className={styles.col}>
            <div className="sorting">Time</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Price (USDT)</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Amount (BTC)</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Total (USDT)</div>
          </div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.time}</div>
            <div className={styles.col}>
              {x.positive && (
                <div className={styles.positive}>{x.positive}</div>
              )}
              {x.negative && (
                <div className={styles.negative}>{x.negative}</div>
              )}
            </div>
            <div className={styles.col}>{x.amount}</div>
            <div className={styles.col}>{x.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
