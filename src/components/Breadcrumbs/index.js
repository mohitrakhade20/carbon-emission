import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

const Breadcrumbs = ({ className, items }) => {
  return (
    <div className={cn(className, styles.breadcrumbs)}>
      {items.map((x, index) => (
        <div className={styles.item} key={index}>
          {x.url ? (
            <Link className={styles.link} to={x.url}>
              {x.title}
            </Link>
          ) : (
            x.title
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
