import React from "react";
import cn from "classnames";
import styles from "./ScrollButton.module.sass";
import Icon from "../Icon";

const ScrollButton = ({ className, onScroll }) => {
  return (
    <button className={cn(styles.scroll, className)} onClick={onScroll}>
      <div className={styles.line}>
        <Icon name="arrow-bottom" size="24" />
        <Icon name="arrow-bottom" size="24" />
      </div>
    </button>
  );
};

export default ScrollButton;
