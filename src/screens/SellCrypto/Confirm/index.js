import React, { useState } from "react";
import cn from "classnames";
import styles from "./Confirm.module.sass";
import Icon from "../../../components/Icon";
import Modal from "../../../components/Modal";
import Successfully from "./Successfully";

const options = [
  {
    title: "Sell",
    content: "1.356 BTC",
    color: "#9757D7",
    icon: "wallet",
  },
  {
    title: "Get",
    content: "56,000.460 USD",
    color: "#58BD7D",
    icon: "wallet",
  },
  {
    title: "For",
    content: "Bitcloud",
    color: "#141416",
    icon: "cloud",
  },
];

const parameters = [
  {
    title: "1.356",
    content: "BTC",
  },
  {
    title: "Service fee",
    content: "0.000 BTC",
  },
  {
    title: "You will get",
    content: "56,000.460 USD",
  },
];

const Confirm = ({ goFinish, goBack }) => {
  const [visibleSuccessfully, setVisibleSuccessfully] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.control}>
          <button className={styles.back} onClick={goBack}>
            <Icon name="arrow-prev" size="14" />
            Confirm
          </button>
          <div className={styles.money}>
            Buying Bitcoin
            <img src="/images/content/currency/bitcoin.svg" alt="Coin" />
          </div>
        </div>
        <div className={styles.options}>
          {options.map((x, index) => (
            <div className={styles.option} key={index}>
              <div className={styles.icon} style={{ backgroundColor: x.color }}>
                <Icon name={x.icon} size="20" />
              </div>
              <div className={styles.details}>
                <div className={styles.category}>{x.title}</div>
                <div className={styles.content}>{x.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.info}>
          You are about to sell 1.356 BTC for Bitcloud bank.
        </div>
        <div className={styles.table}>
          {parameters.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.cell}>{x.title}</div>
              <div className={styles.cell}>{x.content}</div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={goFinish}
          >
            Cancel
          </button>
          <button
            className={cn("button", styles.button)}
            onClick={() => setVisibleSuccessfully(true)}
          >
            I understand, continue
          </button>
        </div>
      </div>
      <Modal
        visible={visibleSuccessfully}
        onClose={() => setVisibleSuccessfully(false)}
      >
        <Successfully />
      </Modal>
    </>
  );
};

export default Confirm;
