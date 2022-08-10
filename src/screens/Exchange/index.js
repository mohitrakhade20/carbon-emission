import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Exchange.module.sass";
import Main from "./Main";
import Balance from "./Balance";
import Currency from "./Currency";
import Trades from "./Trades";
import Table from "./Table";
import Actions from "./Actions";
import Charts from "./Charts";
import { useMediaQuery } from "react-responsive";

const navigation = ["Chart", "Order books", "Trades"];

const Exchange = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className={styles.exchange}>
      <Main />
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
      {isTablet ? (
        <>
          <Actions />
          {activeIndex === 0 && (
            <div className={styles.box}>
              <Charts />
              <Table />
            </div>
          )}
          {activeIndex === 1 && (
            <div className={styles.box}>
              <Balance />
            </div>
          )}
          {activeIndex === 2 && (
            <div className={styles.box}>
              <Currency />
              <Trades />
            </div>
          )}
        </>
      ) : (
        <div className={styles.row}>
          <div className={styles.col}>
            <Balance />
          </div>
          <div className={styles.col}>
            <Charts />
            <Actions />
            <Table />
          </div>
          <div className={styles.col}>
            <Currency />
            <Trades />
          </div>
        </div>
      )}
    </div>
  );
};

export default Exchange;
