import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Main.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "24h change",
    content: "520.80 +1.25%",
    icon: "clock",
    color: "#00C076",
  },
  {
    title: "24h high",
    content: "520.80 +1.25%",
    icon: "arrow-top",
  },
  {
    title: "24h low",
    content: "520.80 +1.25%",
    icon: "arrow-bottom",
  },
  {
    title: "24h volume",
    content: "75.655.26",
    icon: "chart",
  },
];

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.details}>
        <div className={styles.box}>
          <div className={styles.line}>
            <div className={styles.info}>BTC/USDT</div>
            <div className={cn("category-green", styles.category)}>10x</div>
          </div>
          <div className={styles.content}>Bitcoin</div>
        </div>
        <div className={styles.box}>
          <div className={styles.price}>36,641.20</div>
          <div className={styles.content}>
            <Icon name="coin" size="16" /> 36,641.20
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {items.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.subtitle}>
              <Icon name={x.icon} size="16" />
              {x.title}
            </div>
            <div className={styles.content} style={{ color: x.color }}>
              {x.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
