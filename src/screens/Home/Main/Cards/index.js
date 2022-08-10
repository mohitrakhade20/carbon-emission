import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Cards.module.sass";

const items = [
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    negative: "-0.79%",
    image: "images/content/currency/bitcoin.svg",
    url: "/exchange",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/chainlink.svg",
    url: "/exchange",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/monero.svg",
    url: "/exchange",
  },
  {
    title: "BTC/USDT",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/maid.svg",
    url: "/exchange",
  },
];

const Cards = ({ className }) => {
  return (
    <div className={cn(className, styles.cards)}>
      {items.map((x, index) => (
        <Link className={styles.card} key={index} to={x.url}>
          <div className={styles.icon}>
            <img src={x.image} alt="Currency" />
          </div>
          <div className={styles.details}>
            <div className={styles.line}>
              <div className={styles.title}>{x.title}</div>
              {x.positive && (
                <div className={styles.positive}>{x.positive}</div>
              )}
              {x.negative && (
                <div className={styles.negative}>{x.negative}</div>
              )}
            </div>
            <div className={styles.price}>{x.price}</div>
            <div className={styles.money}>{x.money}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
