import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Play from "../../../components/Play";

const Main = ({ scrollToRef, scrollToRefCatalog }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>Blockchain & Crypto</h1>
          <div className={styles.info}>A Beginner’s Guide to TradingView</div>
          <div className={styles.btns}>
            <button
              className={cn("button", styles.button)}
              onClick={() =>
                scrollToRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn now
            </button>
            <button
              className={cn("button-stroke", styles.button)}
              onClick={() =>
                scrollToRefCatalog.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Video tutorial
            </button>
          </div>
        </div>
        <div className={styles.video}>
          <img src="/images/content/video-bg.jpg" alt="Preview" />
          <Play />
        </div>
      </div>
    </div>
  );
};

export default Main;
