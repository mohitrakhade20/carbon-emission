import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";

const Item = ({ className, item, index }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(className, styles.item)}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}
        onClick={() => setVisible(!visible)}
      >
        <div className={styles.number}>
          {index < 9 && "0"}
          {index + 1}
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.arrow}>
          <Icon name="arrow-down" size="24" />
        </div>
      </div>
      <div className={cn(styles.body, { [styles.visible]: visible })}>
        {item.content}
      </div>
    </div>
  );
};

export default Item;
