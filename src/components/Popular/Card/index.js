import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";

const Card = ({ className, item }) => {
  return (
    <div className={cn(className, styles.card)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.content}>{item.content}</div>
      <Link
        className={cn("button-stroke button-small", styles.button)}
        to={item.url}
      >
        {item.button}
      </Link>
    </div>
  );
};

export default Card;
