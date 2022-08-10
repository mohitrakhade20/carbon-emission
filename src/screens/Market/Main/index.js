import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";

const Main = () => {
  return (
    <div className={cn("section-mb0", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
            Today’s Cryptocurrency prices
          </h1>
          <div className={styles.text}>
            The global crypto market cap is <strong>$1.86T</strong>
          </div>
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/market-pic@2x.png 2x"
            src="/images/content/market-pic.png"
            alt="Cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
