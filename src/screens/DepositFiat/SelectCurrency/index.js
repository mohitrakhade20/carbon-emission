import React, { useState } from "react";
import cn from "classnames";
import styles from "./SelectCurrency.module.sass";
import Dropdown from "../../../components/Dropdown";

const currencyOptions = ["USD", "EUR", "RUB"];
const paymentOptions = ["Bank (SWIFT)", "Bank (EUR)", "Bank (USD)"];
const priceVariants = ["50.00$", "100.00$", "200.00$", "500.00$"];

const SelectCurrency = ({ goNext }) => {
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [payment, setPayment] = useState(paymentOptions[0]);
  const [price, setPrice] = useState("50.00");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <form className={styles.item} action="" onSubmit={() => handleSubmit()}>
      <div className={styles.title}>Select currency and payment method</div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.label}>Select currency</div>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={currency}
            setValue={setCurrency}
            options={currencyOptions}
          />
        </div>
        <div className={styles.col}>
          <div className={styles.label}>Select payment</div>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={payment}
            setValue={setPayment}
            options={paymentOptions}
          />
        </div>
      </div>
      <div className={styles.label}>Amount</div>
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
        {parseInt(price)} <span>USDT</span>
      </div>
      <div className={styles.variants}>
        {priceVariants.map((x, index) => (
          <button
            className={cn("button-stroke button-small", styles.button)}
            type="button"
            onClick={() => setPrice(x.replace("$", ""))}
            key={index}
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

export default SelectCurrency;
