import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Referrals.module.sass";
import Profile from "../../components/Profile";
import TextInput from "../../components/TextInput";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Referrals",
  },
];

const Referrals = () => {
  return (
    <Profile title="Referrals" breadcrumbs={breadcrumbs}>
      <div className={styles.stage}>Total rewards</div>
      <div className={cn("h3", styles.price)}>
        1,056.00 <span className={styles.currency}>USDT</span>
      </div>
      <div className={styles.info}>
        You're earning 20% of the trading fees your referrals pay. Learn more
      </div>
      <div className={styles.wrap}>
        <div className={styles.title}>Invite friends to earn 20%</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <TextInput
              className={styles.field}
              classLabel={styles.label}
              classInput={styles.input}
              label="Referral link"
              name="referral-link"
              type="text"
              required
            />
          </div>
          <div className={styles.col}>
            <TextInput
              className={styles.field}
              classLabel={styles.label}
              classInput={styles.input}
              label="Referral code"
              name="referral-code"
              type="text"
              required
            />
            <div className={cn("category", styles.category)}>copied</div>
          </div>
        </div>
      </div>
      <Link className={cn("button-stroke", styles.button)} to="/wallet">
        My wallet
      </Link>
    </Profile>
  );
};

export default Referrals;
