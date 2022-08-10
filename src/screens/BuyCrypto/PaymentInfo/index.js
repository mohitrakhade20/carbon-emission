import React, { useState } from "react";
import cn from "classnames";
import styles from "./PaymentInfo.module.sass";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";
import Checkbox from "../../../components/Checkbox";

const options = [
  {
    title: "Spend",
    content: "$20.00",
    color: "#9757D7",
    icon: "wallet",
  },
  {
    title: "Get",
    content: "0.001499 BTC",
    color: "#58BD7D",
    icon: "wallet",
  },
];

const cards = [
  {
    image: "./images/content/visa.svg",
    alt: "Visa",
  },
  {
    image: "./images/content/master-card.svg",
    alt: "Master Card",
  },
];

const PaymentInfo = ({ goNext, goBack }) => {
  const [save, setSave] = useState(true);

  return (
    <form className={styles.item}>
      <div className={styles.control}>
        <button className={styles.back} onClick={goBack}>
          <Icon name="arrow-prev" size="14" />
          Payment info
        </button>
        <div className={styles.money}>
          Buying Bitcoin
          <img src="/images/content/currency/bitcoin.svg" alt="Coin" />
        </div>
      </div>
      <div className={styles.options}>
        {options.map((x, index) => (
          <div className={styles.option} key={index}>
            <div className={styles.icon} style={{ backgroundColor: x.color }}>
              <Icon name={x.icon} size="20" />
            </div>
            <div className={styles.details}>
              <div className={styles.category}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.line}>
        <div className={styles.subtitle}>Credit Card</div>
        <div className={styles.cards}>
          {cards.map((x, index) => (
            <div className={styles.card} key={index}>
              <img src={x.image} alt={x.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="card number"
          name="card"
          type="tel"
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
        <TextInput
          className={styles.field}
          label="card holder"
          name="holder"
          type="text"
          placeholder="TRAN MAU TRI TAM"
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label="EXPIRATION DATE"
            name="date"
            type="tel"
            placeholder="MM / YY"
            required
          />
          <TextInput
            className={styles.field}
            label="CVC"
            name="cvc"
            type="tel"
            placeholder="CVC"
            required
          />
        </div>
      </div>
      <Checkbox
        className={styles.checkbox}
        value={save}
        onChange={() => setSave(!save)}
        content="Save Card"
      />
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={goNext}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default PaymentInfo;
