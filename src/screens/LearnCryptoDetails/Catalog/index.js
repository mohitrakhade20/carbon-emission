import React from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import Card from "../../../components/Card";

// data
import { articles } from "../../../mocks/articles";

const Catalog = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {articles.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <span>Learn more</span>
            <Icon name="arrow-down" size="16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
