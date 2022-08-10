import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Balance.module.sass";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";

const sorting = [
  {
    color1: "#FF6838",
    color2: "#B1B5C3",
    color3: "#58BD7D",
  },
  {
    color1: "#B1B5C3",
    color2: "#B1B5C3",
    color3: "#58BD7D",
  },
  {
    color1: "#FF6838",
    color2: "#B1B5C3",
    color3: "#B1B5C3",
  },
];

const items = [
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "42",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "50",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "100",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "32",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "20",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "50",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "32",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "15",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "32",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: "50",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    negative: true,
    percent: ".5",
  },
  {
    balance: [
      {
        status: true,
        currency: "36,641.20",
        price: "36,641.20",
      },
    ],
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "87",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "60",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "50",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "60",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "50",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "23",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "60",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "60",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "87",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: "60",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
  {
    price: "36920.12",
    amount: "0.758965",
    total: "28,020.98",
    positive: true,
    percent: ".5",
  },
];

const counterOptions = ["10", "20", "30"];

const Balance = () => {
  const [counter, setCounter] = useState(counterOptions[0]);

  return (
    <div className={styles.balance}>
      <div className={styles.head}>
        <div className={styles.sorting}>
          {sorting.map((x, index) => (
            <button
              className={cn(styles.direction, { [styles.active]: index < 1 })}
              key={index}
            >
              <span style={{ backgroundColor: x.color1 }}></span>
              <span style={{ backgroundColor: x.color2 }}></span>
              <span style={{ backgroundColor: x.color3 }}></span>
            </button>
          ))}
        </div>
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          classDropdownArrow={styles.dropdownArrow}
          classDropdownBody={styles.dropdownBody}
          classDropdownOption={styles.dropdownOption}
          value={counter}
          setValue={setCounter}
          options={counterOptions}
        />
      </div>
      <div className={styles.top}>
        <div className={styles.price}>Price (USDT)</div>
        <div className={styles.amount}>Amounts (BTC)</div>
        <div className={styles.total}>Total</div>
      </div>
      <div className={styles.list}>
        {items.map((x, index) =>
          x.balance ? (
            x.balance[0].status ? (
              <div
                className={cn(styles.statistics, styles.positive)}
                key={index}
              >
                <div className={styles.currency}>{x.balance[0].currency}</div>
                <Icon name="arrow-top" size="16" />
                <div className={styles.money}>{x.balance[0].price}</div>
              </div>
            ) : (
              <div
                className={cn(styles.statistics, styles.negative)}
                key={index}
              >
                <div className={styles.currency}>{x.balance[0].currency}</div>
                <Icon name="arrow-bottom" size="16" />
                <div className={styles.money}>{x.balance[0].price}</div>
              </div>
            )
          ) : (
            <div
              className={cn(
                styles.item,
                { [styles.positive]: x.positive },
                { [styles.negative]: x.negative }
              )}
              key={index}
            >
              <div className={styles.price}>{x.price}</div>
              <div className={styles.amount}>{x.amount}</div>
              <div className={styles.total}>{x.total}</div>
              <div
                className={styles.line}
                style={{ width: `${x.percent}%` }}
              ></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Balance;
