import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../components/Icon";

const Item = ({ className, item, index }) => {
  return (
    <div className={cn(className, styles.item, { [styles.active]: index < 3 })}>
      <div className={styles.icon}>
        <Icon name={item.icon} size="24" />
      </div>
      <div className={styles.details}>
        <div className={styles.line}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.status}></div>
        </div>
        <div className={styles.content}>{item.content}</div>
      </div>
    </div>
  );
};

export default Item;
