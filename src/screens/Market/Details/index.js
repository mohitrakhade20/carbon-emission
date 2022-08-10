import React from "react";
import cn from "classnames";
import styles from "./Details.module.sass";
import Panel from "./Panel";
import Trade from "./Trade";

const Details = () => {
  return (
    <div className={cn("section", styles.details)}>
      <div className={cn("container", styles.container)}>
        <Panel />
        <Trade />
      </div>
    </div>
  );
};

export default Details;
