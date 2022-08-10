import React, { useState } from "react";
import cn from "classnames";
import styles from "./WalletOverviewDetails.module.sass";
import { Link } from "react-router-dom";
import Wallet from "../../components/Wallet";
import Icon from "../../components/Icon";
import AccountBalances from "./AccountBalances";
import Faq from "./Faq";
import Modal from "../../components/Modal";
import Deposit from "../../components/Deposit";
import Withdraw from "../../components/Withdraw";
import Transfer from "../../components/Transfer";

const WalletOverview = () => {
  const [visibleDeposit, setVisibleDeposit] = useState(false);
  const [visibleTransfer, setVisibleTransfer] = useState(false);
  const [visibleWithdraw, setVisibleWithdraw] = useState(false);

  return (
    <>
      <Wallet>
        <div className={styles.top}>
          <div className={styles.line}>
            <h4 className={cn("h4", styles.title)}>
              <Link className={styles.back} to="/wallet-overview">
                <Icon name="arrow-left" size="32" />
              </Link>
              USDT
              <span>Tether USD</span>
            </h4>
            <div className={styles.btns}>
              <button
                className={cn("button-small", styles.button)}
                onClick={() => setVisibleDeposit(true)}
              >
                Deposit
              </button>
              <button
                className={cn("button-stroke button-small", styles.button)}
                onClick={() => setVisibleWithdraw(true)}
              >
                Withdraw
              </button>
              <button
                className={cn("button-stroke button-small", styles.button)}
                onClick={() => setVisibleTransfer(true)}
              >
                Transfer
              </button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.info}>Total balance</div>
            <div className={styles.currency}>
              <div className={styles.number}>10075.56213968</div>
              <div className={cn("category-green", styles.category)}>USDT</div>
            </div>
            <div className={styles.price}>$10,095.35</div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.head}>Account Balances</div>
            <div className={styles.body}>
              <AccountBalances />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.head}>FAQ</div>
            <div className={styles.body}>
              <Faq />
            </div>
          </div>
        </div>
      </Wallet>
      <Modal visible={visibleDeposit} onClose={() => setVisibleDeposit(false)}>
        <Deposit />
      </Modal>
      <Modal
        visible={visibleWithdraw}
        onClose={() => setVisibleWithdraw(false)}
      >
        <Withdraw />
      </Modal>
      <Modal
        visible={visibleTransfer}
        onClose={() => setVisibleTransfer(false)}
      >
        <Transfer />
      </Modal>
    </>
  );
};

export default WalletOverview;
