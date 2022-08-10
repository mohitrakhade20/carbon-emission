import React, { useState } from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import Dropdown from "../../../../components/Dropdown";

const navigation = [
  "Cryptocurrencies",
  "DeFi",
  "Innovation",
  "POS",
  "NFT",
  "POW",
];

const currency = [
  {
    title: "BTC/USDT",
    price: "36,641.20",
    currency: "36,641.20",
    positive: "+0.79%",
    image: "/images/content/currency/bitcoin.svg",
    url: "/exchange",
  },
  {
    title: "ETH/USDT",
    price: "36,641.20",
    currency: "36,641.20",
    positive: "+2.96%",
    image: "/images/content/currency/ethereum.svg",
    url: "/exchange",
  },
  {
    title: "ATC/USDT",
    price: "41.20",
    currency: "41.20",
    positive: "+0.79%",
    image: "/images/content/currency/maid.svg",
    url: "/exchange",
  },
];

const data = [
  {
    name: "1",
    price: 1000,
  },
  {
    name: "2",
    price: 2300,
  },
  {
    name: "3",
    price: 2000,
  },
  {
    name: "4",
    price: 2780,
  },
  {
    name: "5",
    price: 1890,
  },
  {
    name: "6",
    price: 2390,
  },
  {
    name: "7",
    price: 2490,
  },
  {
    name: "8",
    price: 3000,
  },
  {
    name: "9",
    price: 2500,
  },
  {
    name: "10",
    price: 2000,
  },
  {
    name: "11",
    price: 2780,
  },
  {
    name: "12",
    price: 1890,
  },
  {
    name: "13",
    price: 2390,
  },
  {
    name: "14",
    price: 1490,
  },
];

const Panel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(navigation[0]);

  return (
    <div className={styles.panel}>
      <div className={styles.body}>
        <div className={styles.list}>
          {currency.map((x, index) => (
            <Link className={styles.item} key={index} to={x.url}>
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
                <div className={styles.currency}>{x.currency}</div>
              </div>
              <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="colorPrice"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#45B36B"
                          stopOpacity={0.6}
                        />
                        <stop
                          offset="95%"
                          stopColor="#45B36B"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#58BD7D"
                      fillOpacity={1}
                      fill="url(#colorPrice)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/exchange"
        >
          Trade
        </Link>
        <Dropdown
          className={styles.dropdown}
          value={sorting}
          setValue={setSorting}
          options={navigation}
        />
      </div>
    </div>
  );
};

export default Panel;
