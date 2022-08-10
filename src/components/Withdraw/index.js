import React, { useState } from "react";
import cn from "classnames";
import styles from "./Withdraw.module.sass";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Successfully from "./Successfully";

const Withdraw = () => {
  const [save, setSave] = useState(true);
  const [visibleWithdraw, setVisibleWithdraw] = useState(true);
  const [visibleSuccessfully, setVisibleSuccessfully] = useState(false);

  const handleClick = () => {
    setVisibleWithdraw(false);
    setVisibleSuccessfully(true);
  };

  return (
    <>
      {visibleWithdraw && (
        <div className={styles.withdraw}>
          <div className={cn("h4", styles.title)}>
            <Icon name="arrow-left" size="32" />
            Withdraw USDT
          </div>
          <TextInput
            className={styles.field}
            label="address"
            name="address"
            type="text"
            note="Do not send Tether USD unless you are certain the destination supports
        TRC-20 transactions. If it does not, you could permanently lose access
        to your coins."
            required
          />
          <Checkbox
            className={styles.checkbox}
            value={save}
            onChange={() => setSave(!save)}
            content="Save address for next time"
          />
          <div className={styles.wrap}>
            <div className={styles.category}>
              Available <br></br>balance
            </div>
            <div className={styles.details}>
              <div className={styles.currency}>10075.56213968 USDT</div>
              <div className={styles.price}>$10,095.35</div>
            </div>
          </div>
          <div className={styles.box}>
            <TextInput
              className={styles.field}
              label="Amount to withdraw"
              name="amount"
              type="text"
              note="$1,000,000.00 daily withdrawal limit remaining."
              required
            />
            <button className={cn("button-stroke button-small", styles.button)}>
              Max amount
            </button>
          </div>
          <TextInput
            className={styles.field}
            label="transaction fee"
            name="transaction"
            type="text"
            placeholder="0.00000000 USDT"
            required
          />
          <TextInput
            className={styles.field}
            label="total"
            name="total"
            type="text"
            placeholder="0.00000000 USDT"
            required
          />
          <button
            className={cn("button", styles.button)}
            onClick={() => handleClick()}
          >
            Withdraw
          </button>
        </div>
      )}
      {visibleSuccessfully && <Successfully />}
    </>
  );
};

export default Withdraw;
