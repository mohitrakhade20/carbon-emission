import React, { useState } from "react";
import cn from "classnames";
import styles from "./Favorite.module.sass";
import Icon from "../Icon";

const Favorite = ({ className }) => {
  const [visible, setVisible] = useState(false);
  return (
    <button
      className={cn(
        "button-circle-stroke button-small",
        styles.button,
        {
          [styles.active]: visible,
        },
        className
      )}
      onClick={() => setVisible(!visible)}
    >
      <Icon name="heart" size="24" />
      <Icon name="heart-fill" size="24" />
    </button>
  );
};

export default Favorite;
