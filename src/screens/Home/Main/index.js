import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";

const Main = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
          Global Spot Trading Platform for Voluntary Carbon Credits          </h1>
          <div className={styles.text}>
          Carbon Credit Platfrom is the world’s first digital carbon offsetting exchange for spot price, voluntary carbon credit trading.


          </div>
          <Link className={cn("button", styles.button)} to="/exchange">
            Neutralize now
          </Link>
          <ScrollButton
            onScroll={() =>
              scrollToRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className={styles.scroll}
          />
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/cards@2x.png 2x"
            src="/images/content/cards.png"
            alt="Cards"
          />
        </div>
        <Cards className={styles.cards} />
      </div>
    </div>
  );
};

export default Main;
