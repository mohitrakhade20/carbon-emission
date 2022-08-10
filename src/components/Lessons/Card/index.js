import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import Play from "../../../components/Play";
import { Link } from "react-router-dom";

const Card = ({ className, item }) => {
  return (
    <Link className={cn(className, styles.card)} to={item.url}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        {item.play && <Play className="play" small />}
      </div>
      {item.categoryText && (
        <div
          className={cn(
            {
              "category-purple": item.category === "purple",
            },
            {
              "category-green": item.category === "green",
            },
            {
              "category-blue": item.category === "blue",
            },
            styles.category
          )}
        >
          {item.categoryText}
        </div>
      )}
      <div className={styles.title}>{item.title}</div>
      <div className={styles.line}>
        <div className={styles.author}>
          <div className={styles.avatar}></div>
          <div className={styles.man}>{item.author}</div>
        </div>
        <div className={styles.date}>{item.date}</div>
      </div>
    </Link>
  );
};

export default Card;
