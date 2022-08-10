import React, { useState } from "react";
import cn from "classnames";
import styles from "./Currency.module.sass";
import Icon from "../../../components/Icon";

const navigation = ["All", "Cross", "Isolated"];

const items = [
  {
    title: "ETC",
    currency: "BTC",
    positive: "0.01052",
    volume: "4,189",
  },
  {
    title: "NULS",
    currency: "BTC",
    negative: "0.00001",
    volume: "16",
  },
  {
    title: "NEO",
    currency: "BTC",
    positive: "0.01057",
    volume: "199",
  },
  {
    title: "LINK",
    currency: "BTC",
    negative: "0.0007",
    volume: "1,371",
  },
  {
    title: "IOTA",
    currency: "BTC",
    positive: "0.0003",
    volume: "186",
  },
  {
    title: "ETC",
    currency: "BTC",
    negative: "0.00017",
    volume: "833",
  },
  {
    title: "KNC",
    currency: "BTC",
    negative: "0.00022",
    volume: "160",
  },
  {
    title: "WTC",
    currency: "BTC",
    negative: "0.0002",
    volume: "32",
  },
  {
    title: "EOS",
    currency: "BTC",
    positive: "0.0022",
    volume: "1,578",
  },
  {
    title: "BTC",
    currency: "BTC",
    positive: "36,779",
    volume: "3,477,216",
  },
  {
    title: "GAS",
    currency: "BTC",
    positive: "0.0002",
    volume: "4,189",
  },
];

const Currency = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={styles.currency}>
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
      <form className={styles.form} action="" onSubmit={() => handleSubmit()}>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          placeholder="Search"
          required
        />
        <button className={styles.result}>
          <Icon name="search" size="20" />
        </button>
      </form>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className="sorting">Pair</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Price</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Volume</div>
          </div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              <div className={styles.line}>
                <button className={cn("favorite", styles.favorite)}>
                  <Icon name="star-outline" size="16" />
                </button>
                <div className={styles.info}>
                  {x.title}
                  <span>/{x.currency}</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              {x.positive && (
                <div className={styles.positive}>{x.positive}</div>
              )}
              {x.negative && (
                <div className={styles.negative}>{x.negative}</div>
              )}
            </div>
            <div className={styles.col}>{x.volume}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
