import React from "react";
import cn from "classnames";
import styles from "./Trade.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const items = [
  {
    title: "Bitcoin",
    currency: "BTC",
    price: "$36,201.34",
    positiveDay: "+6.04%",
    negativeWeek: "-1.71%",
    image: "/images/content/currency/bitcoin.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Ethereum",
    currency: "ETH",
    price: "$2,605.95",
    positiveDay: "+6.04%",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/ethereum.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "EOS",
    currency: "EOS.IO",
    price: "$426.32",
    positiveDay: "+6.04%",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/eos.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Tether",
    currency: "USDT",
    price: "$1.00",
    positiveDay: "+6.04%",
    negativeWeek: "-1.71%",
    image: "/images/content/currency/tether.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Cardano",
    currency: "ADA",
    price: "$1.86",
    positiveDay: "+6.04%",
    negativeWeek: "-1.71%",
    image: "/images/content/currency/cardano.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Dogecoin",
    currency: "DOGE",
    price: "$0.4139",
    negativeDay: "-0.56",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/dogecoin.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "XRP",
    currency: "XRP",
    price: "$1.05",
    positiveDay: "+6.04%",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/ripple.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Polkadot",
    currency: "DOT",
    price: "$27.72",
    negativeDay: "-0.56",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/polkadot.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "USD Coin",
    currency: "USDC",
    price: "$1.00",
    positiveDay: "+6.04%",
    positiveWeek: "+0.05%",
    image: "/images/content/currency/usd-coin.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
    url: "/exchange",
  },
  {
    title: "Uniswap",
    currency: "UNI",
    price: "$28.67",
    positiveDay: "+6.04%",
    negativeWeek: "-1.71%",
    image: "/images/content/currency/uniswap.svg",
    marketcap: "$328,564,656,654",
    volume: "$328,564,656,654",
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

const Trade = () => {
  return (
    <div className={styles.trade}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className="sorting">#</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Name</div>
          </div>
          <div className={styles.col}>
            <div className="sorting">Price</div>
          </div>
          <div className={styles.col}>24h %</div>
          <div className={styles.col}>7d %</div>
          <div className={styles.col}>
            Marketcap <Icon name="coin" size="20" />
          </div>
          <div className={styles.col}>
            Volume (24h) <Icon name="chart" size="20" />
          </div>
          <div className={styles.col}>Chart</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>
              <div className={styles.line}>
                <button className={cn("favorite", styles.favorite)}>
                  <Icon name="star-outline" size="16" />
                </button>
                {index + 1}
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src={x.image} alt="Coin" />
                </div>
                <div className={styles.details}>
                  <span className={styles.subtitle}>{x.title}</span>
                  <span className={styles.currency}>{x.currency}</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Price</div>
              {x.price}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>24h</div>
              {x.positiveDay && (
                <div className={styles.positive}>{x.positiveDay}</div>
              )}
              {x.negativeDay && (
                <div className={styles.negative}>{x.negativeDay}</div>
              )}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>7d</div>
              {x.positiveWeek && (
                <div className={styles.positive}>{x.positiveWeek}</div>
              )}
              {x.negativeWeek && (
                <div className={styles.negative}>{x.negativeWeek}</div>
              )}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Marketcap</div>
              {x.marketcap}
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Volume (24h)</div>
              {x.volume}
            </div>
            <div className={styles.col}>
              <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 3,
                      right: 0,
                      left: 0,
                      bottom: 3,
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
              <Link className={cn("button-small", styles.button)} to={x.url}>
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
