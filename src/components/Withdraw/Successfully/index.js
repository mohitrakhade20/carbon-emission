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
  {
    title: "Address",
    content: "0xf8aaa2b1842e796191e736434sda....479",
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
          You successfully a withdrawal <span>100.00 USDT</span> from Bitcloud
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
        <Link className={cn("button", styles.button)} to="/wallet-overview">
          Wallet
        </Link>
      </div>
    </>
  );
};

export default Successfully;
