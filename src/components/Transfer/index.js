import React, { useState } from "react";
import cn from "classnames";
import styles from "./Transfer.module.sass";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Dropdown from "../Dropdown";

const fromDirectionOptions = ["Margin", "Fiat and Spot"];
const toDirectionOptions = ["Fiat and Spot", "Margin"];
const coinOptions = ["ETH Ethereum", "BTC Bitcoin", "TRX Tron"];

const Transfer = () => {
  const [fromDirection, setFromDirection] = useState(fromDirectionOptions[0]);
  const [toDirection, setToDirection] = useState(toDirectionOptions[0]);
  const [coin, setCoin] = useState(coinOptions[0]);

  return (
    <div className={styles.transfer}>
      <div className={cn("h4", styles.title)}>
        <Icon name="arrow-left" size="32" />
        Transfer
      </div>
      <div className={styles.wrap}>
        <div className={styles.category}>
          Available <br></br>balance
        </div>
        <div className={styles.details}>
          <div className={styles.currency}>2.56213968 ETH</div>
          <div className={styles.price}>$10,095.35</div>
        </div>
      </div>
      <div className={styles.field}>
        <Dropdown
          className={styles.dropdown}
          label="from"
          value={fromDirection}
          setValue={setFromDirection}
          options={fromDirectionOptions}
        />
      </div>
      <div className={styles.sign}>
        <Icon name="arrows" size="16" />
      </div>
      <div className={styles.field}>
        <Dropdown
          className={styles.dropdown}
          label="to"
          value={toDirection}
          setValue={setToDirection}
          options={toDirectionOptions}
        />
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
          Max amount
        </button>
      </div>
      <button className={cn("button", styles.button)}>Transfer</button>
    </div>
  );
};

export default Transfer;
