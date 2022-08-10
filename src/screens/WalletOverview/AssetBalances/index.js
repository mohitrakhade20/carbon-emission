import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AssetBalances.module.sass";

const items = [
  {
    id: 0,
    currency: "USDT",
    content: "Tether USD",
    icon: "/images/content/currency/bitcoin.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 1,
    currency: "ETH",
    content: "Ethereum",
    icon: "/images/content/currency/ethereum.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 2,
    currency: "USDT",
    content: "Tether USD",
    icon: "/images/content/currency/tether.svg",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 3,
    currency: "BNB",
    content: "BNB",
    icon: "/images/content/currency/bnb.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 4,
    currency: "XRP",
    content: "Ripple",
    icon: "/images/content/currency/ripple.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 5,
    currency: "TRX",
    content: "TRON",
    icon: "/images/content/currency/tron.svg",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 6,
    currency: "LINK",
    content: "LINK",
    icon: "/images/content/currency/chainlink.svg",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 7,
    currency: "EOS",
    content: "EOS.IO",
    icon: "/images/content/currency/eos.svg",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 8,
    currency: "ADA",
    content: "Cardano",
    icon: "/images/content/currency/cardano.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 9,
    currency: "ONT",
    content: "Ontology",
    icon: "/images/content/currency/ontology.svg",
    earn: "7.46% APR",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
  {
    id: 10,
    currency: "USDC",
    content: "USD Coin",
    icon: "/images/content/currency/usd-coin.svg",
    currencyOrder: "0.2785689852 BTC",
    priceOrder: "$10,098.36",
    currencyAvailable: "0.2785689852 BTC",
    priceAvailable: "$10,098.36",
    currencyTotal: "0.2785689852 BTC",
    priceTotal: "$10,098.36",
  },
];

const AssetBalances = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Asset</div>
          <div className={styles.col}>Earn</div>
          <div className={styles.col}>On orders</div>
          <div className={styles.col}>Available balance</div>
          <div className={styles.col}>Total balance</div>
        </div>
        {items.map((x, index) => (
          <Link
            className={styles.row}
            to={`/wallet-overview/${x.id}`}
            key={index}
          >
            <div className={styles.col}>
              <div className={styles.currency}>
                <div className={styles.icon}>
                  <img src={x.icon} alt="Currency" />
                </div>
                <div className={styles.details}>
                  <div className={styles.info}>{x.currency}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              {x.earn && (
                <div className={cn("category-green", styles.category)}>
                  {x.earn}
                </div>
              )}
            </div>
            <div className={styles.col}>
              <div className={styles.info}>{x.currencyOrder}</div>
              <div className={styles.text}>{x.priceOrder}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.info}>{x.currencyAvailable}</div>
              <div className={styles.text}>{x.priceAvailable}</div>
            </div>
            <div className={styles.col}>
              <div className={styles.info}>{x.currencyTotal}</div>
              <div className={styles.text}>{x.priceTotal}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AssetBalances;
