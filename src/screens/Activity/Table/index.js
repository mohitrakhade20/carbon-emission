import React from "react";
import cn from "classnames";
import styles from "./Table.module.sass";
import { Link } from "react-router-dom";

const Table = ({ className, items }) => {
  return (
    <div className={cn(className, styles.table)}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className="sorting">Type</div>
        </div>
        <div className={styles.col}>
          <div className="sorting">Coin</div>
        </div>
        <div className={styles.col}>
          <div className="sorting">Amount</div>
        </div>
        <div className={styles.col}>
          <div className="sorting">Address</div>
        </div>
        <div className={styles.col}>
          <div className="sorting">Transaction ID</div>
        </div>
        <div className={styles.col}>Date</div>
      </div>
      {items.map((x, index) => (
        <Link className={styles.row} key={index} to={x.url}>
          <div className={styles.col}>
            {x.withdrew && (
              <div className={cn("category-blue", styles.category)}>
                Withdrew
              </div>
            )}
            {x.deposited && (
              <div className={cn("category-green", styles.category)}>
                Deposited
              </div>
            )}
          </div>
          <div className={styles.col}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={x.image} alt="Coin" />
              </div>
              <div className={styles.currency}>{x.currency}</div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.label}>Amount</div>
            {x.amount}
          </div>
          <div className={styles.col}>
            <div className={styles.label}>Address</div>
            {x.address}
          </div>
          <div className={styles.col}>
            <div className={styles.label}>Transaction ID</div>
            {x.transaction}
          </div>
          <div className={styles.col}>
            <div className={styles.label}>Date</div>
            {x.date}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Table;
