import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Finish.module.sass";

const Finish = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={cn("h3", styles.title)}>New password</div>
        <div className={styles.info}>Your new password has been set</div>
        <Link className={cn("button-stroke", styles.button)} to="/">
          Get home
        </Link>
      </div>
    </div>
  );
};

export default Finish;
