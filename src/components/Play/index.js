import React from "react";
import cn from "classnames";
import styles from "./Play.module.sass";
import Icon from "../Icon";

const Play = ({ className, small }) => {
  return (
    <button
      className={cn(className, styles.play, {
        [styles.small]: small,
      })}
    >
      <Icon name="play" size="24" />
    </button>
  );
};

export default Play;
