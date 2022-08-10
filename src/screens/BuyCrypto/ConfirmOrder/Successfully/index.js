import React from "react";
import cn from "classnames";
import styles from "./Successfully.module.sass";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Status",
    content: "Completed",
    color: "#58BD7D",
  },
  {
    title: "Transaction ID",
    content: "0msx836930...87r398",
  },
];

const Successfully = () => {
  return (
    <>
      <div className={styles.successfully}>
        <div className={cn("h2", styles.title)}>
          Yay!{" "}
          <span role="img" aria-label="firework">
            🎉
          </span>
        </div>
        <div className={styles.info}>
          You successfully purchased <span>0.020202 BTC</span> from Bitcloud
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.category}>{x.title}</div>
              <div className={styles.content} style={{ color: x.color }}>
                {x.content}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <Link className={cn("button-stroke", styles.button)} to="/exchange">
            Trade
          </Link>
          <Link className={cn("button", styles.button)} to="/wallet-overview">
            Wallet
          </Link>
        </div>
      </div>
    </>
  );
};

export default Successfully;
