import React from "react";
import cn from "classnames";
import styles from "./AccountBalances.module.sass";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const items = [
  {
    title: "Exchange",
    color: "#9757D7",
    currency: "10075.56213968 USDT",
    price: "$10,095.35",
  },
  {
    title: "Fiat and Spot",
    color: "#FFD166",
    currency: "0.0000000000 USDT",
    price: "$0.00",
  },
  {
    title: "Available",
    color: "#4BC9F0",
    currency: "0.0000000000 USDT",
    price: "$0.00",
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

const AccountBalances = () => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.title}>
                <div
                  className={styles.bg}
                  style={{ backgroundColor: x.color }}
                ></div>
                {x.title}
              </div>
              <div className={styles.details}>
                <div className={styles.currency}>{x.currency}</div>
                <div className={styles.price}>{x.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.info}>
          <div className={styles.money}>USDT/USDC</div>
          <div className={cn("category-green", styles.category)}>+12.96%</div>
        </div>
        <div className={styles.price}>1.00069787 USDC</div>
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
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#45B36B" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#45B36B" stopOpacity={0} />
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
      </div>
    </div>
  );
};

export default AccountBalances;
