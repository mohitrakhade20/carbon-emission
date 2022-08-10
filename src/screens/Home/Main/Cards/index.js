import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Cards.module.sass";

const items = [
  {
    title: "Verra Standard ",
    price: "3,141.20",
    money: "36,641.20",
    negative: "-0.79%",
    image: "/images/content/currency/verra.png",
    url: "/market",
  },
  {
    title: "Gold Standard ",
    price: "76,641.20",

    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/gold.png",
    url: "/market",
  },
  {
    title: "USDT",
    price: "3,641",
    money: "3,641",
    positive: "+0.79%",
    image: "/images/content/currency/tether.svg",
    url: "/market",
  },
  {
    title: "BTC",
    price: "36,641.20",
    money: "36,641.20",
    positive: "+0.79%",
    image: "images/content/currency/bitcoin.svg",
    url: "/market",
  },
];

const Cards = ({ className }) => {
  return (
    <div className={cn(className, styles.cards)} style={{ marginBottom:"50px"}} >
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
