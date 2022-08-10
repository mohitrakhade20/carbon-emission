import React, { useState } from "react";
import cn from "classnames";
import styles from "./Deposit.module.sass";
import Icon from "../Icon";

const items = [
  {
    title: "Deposit On Tron",
    content: [
      {
        title: "on Ethereum",
        note: "Please be sure that the contract address is related to the tokens that you are depositing.",
        color: "#9757D7",
        qrCode: "/images/content/qr-code-1.jpg",
      },
    ],
  },
  {
    title: "Deposit On Ethereum",
    content: [
      {
        title: "on TRON",
        note: "USDTTRON deposits are available after 0 network confirmations.",
        color: "#3772FF",
        qrCode: "/images/content/qr-code-2.jpg",
      },
    ],
  },
];

const Deposit = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleBody, setVisibleBody] = useState(false);
  const [visibleHead, setVisibleHead] = useState(true);

  const handleClick = (value) => {
    setActiveIndex(value);
    setVisibleBody(true);
    setVisibleHead(false);
  };

  const handleClickBack = () => {
    setVisibleBody(false);
    setVisibleHead(true);
  };

  return (
    <div className={styles.deposit}>
      {visibleHead && (
        <div className={styles.head}>
          <div className={styles.icon}>
            <Icon name="wallet" size="24" />
          </div>
          <div className={styles.info}>
            Select a protocol to see the corresponding address.
          </div>
          <div className={styles.btns}>
            {items.map((x, index) => (
              <button
                className={cn("button", styles.button)}
                key={index}
                onClick={() => handleClick(index)}
              >
                {x.title}
              </button>
            ))}
          </div>
        </div>
      )}
      {visibleBody && (
        <div className={styles.body}>
          {items[activeIndex].content.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={cn("h4", styles.title)}>
                <button
                  className={styles.back}
                  onClick={() => handleClickBack()}
                >
                  <Icon name="arrow-left" size="32" />
                </button>
                Deposit USDT
              </div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.icon} style={{ backgroundColor: x.color }}>
                <Icon name="wallet" size="24" />
              </div>
              <div className={styles.wrap}>
                <div className={styles.category}>Total balance</div>
                <div className={styles.details}>
                  <div className={styles.currency}>10075.56213968 USDT</div>
                  <div className={styles.price}>$10,095.35</div>
                </div>
              </div>
              <div className={styles.stage}>Address</div>
              <div className={styles.content}>
                Only send USDT to this address. Sending any other asset to this
                address may result in the loss of your deposit!
              </div>
              <div className={styles.code}>
                <div className={styles.number}>
                  0xf8aaa2b1842e796191e736434479
                </div>
                <button className={styles.copy}>
                  <Icon name="copy" size="24" />
                </button>
              </div>
              <div className={styles.preview}>
                <img src={x.qrCode} alt="Qr code" />
              </div>
              <div className={styles.note}>{x.note}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deposit;
