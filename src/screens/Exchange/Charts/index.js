import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Charts.module.sass";
import Dropdown from "../../../components/Dropdown";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import useDarkMode from "use-dark-mode";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const dates = ["Time", "1H", "4H", "1D", "1W", "1M"];
const navigation = ["Trading view", "Depth"];

const data = [
  {
    name: "1",
    price: 4000,
  },
  {
    name: "2",
    price: 3000,
  },
  {
    name: "3",
    price: -1000,
  },
  {
    name: "4",
    price: 500,
  },
  {
    name: "5",
    price: -2000,
  },
  {
    name: "6",
    price: -250,
  },
  {
    name: "7",
    price: 3900,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.price));
  const dataMin = Math.min(...data.map((i) => i.price));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const Actions = () => {
  const [activeIndexDates, setActiveIndexDates] = useState(0);
  const [activeIndexNav, setActiveIndexNav] = useState(0);
  const [date, setDate] = useState(dates[0]);

  const darkMode = useDarkMode(false);

  return (
    <div className={styles.charts}>
      <div className={styles.head}>
        <div className={styles.group}>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={date}
            setValue={setDate}
            options={dates}
          />
          <div className={styles.nav}>
            {dates.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: index === activeIndexDates,
                })}
                onClick={() => setActiveIndexDates(index)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.nav}>
          {navigation.map((x, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: index === activeIndexNav,
              })}
              onClick={() => setActiveIndexNav(index)}
              key={index}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      {activeIndexNav === 0 && (
        <div className={styles.inner}>
          <div className={styles.iframe}>
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={darkMode.value ? Themes.DARK : Themes.LIGHT}
              locale="en"
              hide_top_toolbar={true}
              studies={["Volume@tv-basicstudies"]}
              autosize
            />
          </div>
        </div>
      )}
      {activeIndexNav === 1 && (
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="#58BD7D" stopOpacity={1} />
                  <stop offset={off} stopColor="#FF6838" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="price"
                stroke="#000"
                fill="url(#splitColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Actions;
