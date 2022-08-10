import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon";

const Item = ({ className, item }) => {
  return (
    <Link className={cn(className, styles.item)} to={item.url}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Item" />
      </div>
      <div className={styles.details}>
        {item.categoryText && (
          <div
            className={cn(
              {
                "category-red": item.category === "red",
              },
              {
                "category-green": item.category === "green",
              },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
        )}
        <h4 className={cn("h4", styles.title)}>{item.title}</h4>
        <div className={styles.currency}>{item.currency}</div>
        <div className={styles.content}>{item.content}</div>
      </div>
      <div className={styles.arrow}>
        <Icon name="arrow-next" size="14" />
      </div>
    </Link>
  );
};

export default Item;
