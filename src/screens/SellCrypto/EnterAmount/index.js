import React, { useState } from "react";
import cn from "classnames";
import styles from "./EnterAmount.module.sass";
import Icon from "../../../components/Icon";

const EnterAmount = ({ goNext, goBack }) => {
  const [price, setPrice] = useState("1.356");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <form className={styles.item} action="" onSubmit={() => handleSubmit()}>
      <div className={styles.control}>
        <button className={styles.back} onClick={goBack}>
          <Icon name="arrow-prev" size="14" />
          Enter amount
        </button>
        <div className={styles.money}>
          Buying Bitcoin
          <img src="/images/content/currency/bitcoin.svg" alt="Coin" />
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.field}>
          <div className={styles.value}>{price}</div>
          <input
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={cn("h4", styles.sign)}>BTC</div>
      </div>
      <div className={styles.price}>
        You will get <span>56,000.460.548</span> USD
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={goNext}>
          Sell
        </button>
      </div>
    </form>
  );
};

export default EnterAmount;
