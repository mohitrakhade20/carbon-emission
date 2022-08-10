import React, { useState } from "react";
import cn from "classnames";
import styles from "./ConfirmOrder.module.sass";
import Icon from "../../../components/Icon";
import Modal from "../../../components/Modal";
import Successfully from "./Successfully";

const options = [
  {
    title: "Spend",
    content: "$20.00",
    color: "#9757D7",
    icon: "wallet",
  },
  {
    title: "Get",
    content: "0.001499 BTC",
    color: "#58BD7D",
    icon: "wallet",
  },
  {
    title: "Method",
    content: "Credit card",
    color: "#4BC9F0",
    icon: "wallet",
  },
];

const parameters = [
  {
    title: "0.001499",
    content: "BTC",
  },
  {
    title: "Service fee",
    content: "0.000 BTC",
  },
  {
    title: "You will pay",
    content: "$20.00 USD",
  },
];

const ConfirmOrder = ({ goBack, goStart }) => {
  const [visibleSuccessfully, setVisibleSuccessfully] = useState(false);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.control}>
          <button className={styles.back} onClick={goBack}>
            <Icon name="arrow-prev" size="14" />
            Confirm order
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
          You are about to buy 0.001499 BTC from Bitcloud
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
            onClick={goStart}
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

export default ConfirmOrder;
