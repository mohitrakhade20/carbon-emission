import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Notifications.module.sass";
import Icon from "../../Icon";

const items = [
  {
    title: "Login attempted from new IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Request to reset security",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Login attempted from new IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Request to reset security",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Login attempted from new IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Request to reset security",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
];

const Notifications = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.notifications, {
          [styles.active]: visible,
        })}
      >
        <button
          className={cn(styles.head, styles.active)}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="bell" size="24" />
        </button>
        <div className={styles.body}>
          <div className={styles.title}>Notifications</div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <Link
                className={cn(styles.item, { [styles.new]: index < 4 })}
                to={x.url}
                onClick={() => setVisible(!visible)}
                key={index}
              >
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.date}>{x.date}</div>
              </Link>
            ))}
          </div>
          <div className={styles.btns}>
            <Link
              className={cn("button-small", styles.button)}
              to="notifications"
              onClick={() => setVisible(false)}
            >
              View all
            </Link>
            <button className={cn("button-stroke button-small", styles.button)}>
              Clear all
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Notifications;
