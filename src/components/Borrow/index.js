import React, { useState } from "react";
import cn from "classnames";
import styles from "./Borrow.module.sass";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Dropdown from "../Dropdown";

const coinOptions = ["ETH Ethereum", "BTC Bitcoin", "TRX Tron"];

const items = [
  {
    title: "Hourly Interest Rate:",
    price: "0.00208333%",
    note: "0.00208333%",
  },
  {
    title: "Borrowed:",
    price: "0.00000000 ETH",
  },
  {
    title: "Maximum Borrow Amount:",
    price: "0.00000000 ETH",
  },
];

const percent = ["25%", "50%", "75%", "100%"];

const Borrow = () => {
  const [coin, setCoin] = useState(coinOptions[0]);

  return (
    <div className={styles.borrow}>
      <div className={cn("h4", styles.title)}>
        <Icon name="arrow-left" size="32" />
        Borrow
      </div>
      <div className={styles.field}>
        <Dropdown
          className={styles.dropdown}
          label="coin"
          value={coin}
          setValue={setCoin}
          options={coinOptions}
        />
      </div>
      <div className={styles.list}>
        {items.map((x, index) => (
          <div className={styles.line} key={index}>
            <div className={styles.category}>{x.title}</div>
            <div className={styles.details}>
              <div className={styles.price}>{x.price}</div>
              {x.note && <div className={styles.note}>{x.note}</div>}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.box}>
        <TextInput
          className={styles.field}
          label="Amount to transfer"
          name="amount"
          type="text"
          note="2.14646231064565653 ETH available"
          required
        />
        <button className={cn("button-stroke button-small", styles.button)}>
          100%
        </button>
      </div>
      <div className={styles.percent}>
        {percent.map((x, index) => (
          <button className={cn("button-stroke button-small", styles.button)}>
            {x}
          </button>
        ))}
      </div>
      <button className={cn("button", styles.button)}>Confirm borrow</button>
    </div>
  );
};

export default Borrow;
