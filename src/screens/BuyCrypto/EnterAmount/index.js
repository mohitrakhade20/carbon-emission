import React, { useState } from "react";
import cn from "classnames";
import styles from "./EnterAmount.module.sass";
import Icon from "../../../components/Icon";

const priceVariants = ["50.00$", "100.00$", "200.00$", "500.00$"];

const EnterAmount = ({ goNext, goBack }) => {
  const [price, setPrice] = useState("20.00");

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
        <div className={cn("h4", styles.sign)}>$</div>
        <div className={styles.field}>
          <div className={styles.value}>{price}</div>
          <input
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.price}>
        {parseInt(price)} <span>BTC</span>
      </div>
      <div className={styles.variants}>
        {priceVariants.map((x, index) => (
          <button
            className={cn("button-stroke button-small", styles.button)}
            type="button"
            key={index}
            onClick={() => setPrice(x.replace("$", ""))}
          >
            {x}
          </button>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={goNext}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default EnterAmount;
