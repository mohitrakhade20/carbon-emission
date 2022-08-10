import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Icon from "../Icon";

const Theme = ({ className, icon, small }) => {
  const darkMode = useDarkMode(false);

  return (
    <label className={cn(className, styles.theme, { [styles.small]: small })}>
      <input
        className={styles.input}
        checked={darkMode.value}
        onChange={darkMode.toggle}
        type="checkbox"
      />
      {icon ? (
        <div className={styles.icon}>
          <Icon name="theme-light" size="24" />
          <Icon name="theme-dark" size="24" />
        </div>
      ) : (
        <span className={styles.inner}>
          <span className={styles.box}></span>
        </span>
      )}
    </label>
  );
};

export default Theme;
