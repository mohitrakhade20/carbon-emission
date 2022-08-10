import React, { useState } from "react";
import cn from "classnames";
import styles from "./Funds.module.sass";
import Icon from "../Icon";
import Item from "./Item";

const items = [

  // {
  //   title: "Verra Standard",
  //   currency: "WVRA",
  //   price: "$36,201.34",
  //   positiveDay: "+6.04%",
  //   negativeWeek: "-1.71%",
  //   image: "/images/content/currency/verra.png",
  //   marketcap: "$328,564,656,654",
  //   volume: "$328,564,656,654",
  //   url: "/exchange",
  // },
  // {
  //   title: "Gold Stardard",
  //   currency: "WGLD",
  //   price: "$2,605.95",
  //   positiveDay: "+6.04%",
  //   positiveWeek: "+0.05%",
  //   image: "/images/content/currency/gold.png",
  //   marketcap: "$328,564,656,654",
  //   volume: "$328,564,656,654",
  //   url: "/exchange",
  // },

  // {
  //   title: "Tether",
  //   currency: "USDT",
  //   price: "$1.00",
  //   positiveDay: "+6.04%",
  //   negativeWeek: "-1.71%",
  //   image: "/images/content/currency/tether.svg",
  //   marketcap: "$328,564,656,654",
  //   volume: "$328,564,656,654",
  //   url: "/exchange",
  // },
  {
    currency: "WVRA",
    content: "Verra Standard",
    image: "/images/content/currency/verra.png",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyInterest: "0.2785689852 BTC",
    priceInterest: "$10,098.36",
  },
  {
    currency: "WGLD",
    content: "Gold Stardard",
    image: "/images/content/currency/gold.png",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyInterest: "0.2785689852 BTC",
    priceInterest: "$10,098.36",
  },
  {
    currency: "USDT",
    content: "Tether USD",
    icon: "/images/content/currency/tether.svg",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyInterest: "0.2785689852 BTC",
    priceInterest: "$10,098.36",
  },
  // {
  //   currency: "ETH",
  //   content: "Ethereum",
  //   icon: "/images/content/currency/ethereum.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "BNB",
  //   content: "BNB",
  //   icon: "/images/content/currency/bnb.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "XRP",
  //   content: "Ripple",
  //   icon: "/images/content/currency/ripple.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "TRX",
  //   content: "TRON",
  //   icon: "/images/content/currency/tron.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "LINK",
  //   content: "LINK",
  //   icon: "/images/content/currency/chainlink.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "EOS",
  //   content: "EOS.IO",
  //   icon: "/images/content/currency/eos.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "ADA",
  //   content: "Cardano",
  //   icon: "/images/content/currency/cardano.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "ONT",
  //   content: "Ontology",
  //   icon: "/images/content/currency/ontology.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
  // {
  //   currency: "USDC",
  //   content: "USD Coin",
  //   icon: "/images/content/currency/usd-coin.svg",
  //   currencyTotal: "0.2785689852 BTC",
  //   priceTotal: "$10,098.36",
  //   currencyAvailable: "0.2785689852 BTC",
  //   priceAvailable: "$10,098.36",
  //   currencyInterest: "0.2785689852 BTC",
  //   priceInterest: "$10,098.36",
  // },
];

const Funds = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.line}>
        <form className={styles.form} action="" onSubmit={() => handleSubmit()}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Search coin"
            required
          />
          <button className={styles.result}>
            <Icon name="search" size="20" />
          </button>
        </form>
        <button className={styles.link}>
          <span>Borrowing history</span>
          <Icon name="arrow-right" size="24" />
        </button>
      </div>
      <div className={styles.list}>
        <div className={styles.row}>
          <div className={styles.col}>Asset</div>
          <div className={styles.col}>Total balance</div>
          <div className={styles.col}>Available balance</div>
          <div className={styles.col}>Interest</div>
        </div>
        {items.map((x, index) => (
          <Item
            className={styles.item}
            item={x}
            key={index}
            children={children}
          />
        ))}
      </div>
    </div>
  );
};

export default Funds;
