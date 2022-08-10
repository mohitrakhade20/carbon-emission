import React, { useState } from "react";
import cn from "classnames";
import styles from "./Notifications.module.sass";
import Icon from "../../components/Icon";
import Item from "./Item";
import Filters from "./Filters";
import Actions from "../../components/Actions";

const items = [
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "lightning",
  },
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "wallet",
  },
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "coin",
  },
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "lightning",
  },
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "wallet",
  },
  {
    title: "Login attempted from new IP",
    content:
      "Hello, you've reset the Google Authentication on your account successfully. Your old security items have expired and new security items have now been enabled.",
    date: "2021-03-10 20:19:15",
    icon: "coin",
  },
];

const filters = [
  "Security",
  "Wallet",
  "Trade",
  "Deposit",
  "Transder",
  "Withdrawals",
  "News",
];

const Notifications = () => {
  const [visible, setVisible] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div className={styles.notifications}>
      <div className={cn("container", styles.container)}>
        <div className={styles.body}>
          <div className={styles.top}>
            <h4 className={cn("h4", styles.title)}>Notifications</h4>
            <button className={cn("button-stroke button-small", styles.button)}>
              Mark all as read
            </button>
            <button className={cn("button-stroke button-small", styles.button)}>
              Clear all
            </button>
          </div>
          <div className={styles.row}>
            <button
              className={cn("button-small", styles.toggle, {
                [styles.active]: visible,
              })}
              onClick={() => setVisible(!visible)}
            >
              Advanced filter
            </button>
            <Filters
              className={cn(styles.filters, { [styles.active]: visible })}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <div className={styles.wrapper}>
              <div className={styles.list}>
                {items.map((x, index) => (
                  <Item
                    className={styles.item}
                    item={x}
                    key={index}
                    index={index}
                  />
                ))}
              </div>
              <div className={styles.btns}>
                <button
                  className={cn("button-stroke button-small", styles.button)}
                >
                  <span>Load more</span>
                  <Icon name="calendar" size="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Actions className={styles.actions} />
      </div>
    </div>
  );
};

export default Notifications;
