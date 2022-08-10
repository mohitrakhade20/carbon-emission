import React from "react";
import cn from "classnames";
import styles from "./SessionsAndLoginHistory.module.sass";
import Profile from "../../components/Profile";
import { Link } from "react-router-dom";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Sessions & login history",
  },
];

const sessions = [
  {
    date: "2021-06-16",
    time: "10:46:09",
    device: "Macbook Pro",
    system: "Mac OS Bigsur",
    location: "🇺🇸 USA",
  },
  {
    date: "2021-06-16",
    time: "10:46:09",
    device: "iMac Pro",
    system: "Mac OS Bigsur",
    location: "🇺🇸 USA",
  },
];

const history = [
  {
    date: "2021-06-16",
    time: "10:46:09",
    address: "1.53.208.186",
    status: true,
  },
  {
    date: "2021-06-16",
    time: "10:46:09",
    address: "1.53.208.186",
    status: false,
  },
  {
    date: "2021-06-16",
    time: "10:46:09",
    address: "1.53.208.186",
    status: true,
  },
];

const SessionsAndLoginHistory = () => {
  return (
    <Profile title="Sessions & login history" breadcrumbs={breadcrumbs}>
      <div className={styles.section}>
        <div className={styles.title}>Active sessions</div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>Date / time</div>
            <div className={styles.col}>Device</div>
            <div className={styles.col}>Location</div>
          </div>
          {sessions.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>
                <div className={styles.content}>{x.date}</div>
                <div className={styles.note}>{x.time}</div>
              </div>
              <div className={styles.col}>
                <div className={styles.content}>{x.device}</div>
                <div className={styles.note}>{x.system}</div>
              </div>
              <div className={styles.col}>
                <div className={cn("category", styles.location)}>
                  {x.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>
            Log out all other devices
          </button>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Login history</div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>Date / time</div>
            <div className={styles.col}>IP address</div>
            <div className={styles.col}>Used 2FA</div>
          </div>
          {history.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>
                <div className={styles.content}>{x.date}</div>
                <div className={styles.note}>{x.time}</div>
              </div>
              <div className={styles.col}>
                <div className={styles.content}>{x.address}</div>
              </div>
              <div className={styles.col}>
                {x.status ? (
                  <div className={cn("category-green", styles.status)}>yes</div>
                ) : (
                  <div className={cn("category-red", styles.status)}>no</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <Link className={cn("button-stroke", styles.button)} to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </Profile>
  );
};

export default SessionsAndLoginHistory;
