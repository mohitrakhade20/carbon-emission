import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./PageList.module.sass";

const PageList = () => {
  return (
    <div className={styles.page}>
      <div className={cn("container", styles.container)}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/market">Market</Link>
        </p>
        <p>
          <Link to="/learn-crypto">Learn crypto</Link>
        </p>
        <p>
          <Link to="/learn-crypto-details">Learn crypto details</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/notifications">Notifications</Link>
        </p>
        <p>
          <Link to="/activity">Activity</Link>
        </p>
        <p>
          <Link to="/exchange">Exchange</Link>
        </p>
        <p style={{ marginTop: "40px" }}>
          <Link to="/wallet-overview">Wallet overview</Link>
        </p>
        <p>
          <Link to="/wallet-overview/01">Wallet overview details</Link>
        </p>
        <p>
          <Link to="/wallet-margin">Wallet margin</Link>
        </p>
        <p>
          <Link to="/fiat-and-spot">Fiat and spot</Link>
        </p>
        <p style={{ marginTop: "40px" }}>
          <Link to="/deposit-fiat">Deposit Fiat</Link>
        </p>
        <p>
          <Link to="/buy-crypto">Buy Crypto</Link>
        </p>
        <p>
          <Link to="/sell-crypto">Sell Crypto</Link>
        </p>
        <p style={{ marginTop: "40px" }}>
          <Link to="/profile-info">Profile info</Link>
        </p>
        <p>
          <Link to="/referrals">Referrals</Link>
        </p>
        <p>
          <Link to="/api-keys">Api keys</Link>
        </p>
        <p>
          <Link to="/sessions-and-login-history">Sessions & login history</Link>
        </p>
        <p>
          <Link to="/2fa">2fa</Link>
        </p>
        <p>
          <Link to="/change-password">Change password</Link>
        </p>
        <p style={{ marginTop: "40px" }}>
          <Link to="/sign-in">Sign in</Link>
        </p>
        <p>
          <Link to="/sign-up">Sign up</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot password</Link>
        </p>
      </div>
    </div>
  );
};

export default PageList;
