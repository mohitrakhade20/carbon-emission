import React, { useState } from "react";
import cn from "classnames";
import styles from "./Releases.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const navigationList = ["Bitcoin", "Blockchain", "Tutorials"];

const items = [
  {
    title: "A Beginner's Guide to TradingView",
    currency: "Ethereum",
    content:
      "A fully-featured landing page kit, including design files, and beautiful 3D illustrations editable.",
    category: "red",
    categoryText: "new",
    image: "/images/content/releases-pic-1.jpg",
    image2x: "/images/content/releases-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "What Is Crypto Market Sentiment?",
    currency: "Ethereum",
    content:
      "A fully-featured landing page kit, including design files, and beautiful 3D illustrations editable.",
    category: "green",
    categoryText: "beginner",
    image: "/images/content/releases-pic-2.jpg",
    image2x: "/images/content/releases-pic-2@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "What Is the Ethereum Hard Fork?",
    currency: "Ethereum",
    content:
      "A fully-featured landing page kit, including design files, and beautiful 3D illustrations editable.",
    category: "red",
    categoryText: "new",
    image: "/images/content/releases-pic-3.jpg",
    image2x: "/images/content/releases-pic-3@2x.jpg",
    url: "/learn-crypto-details",
  },
];

const Releases = ({ scrollToRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navigation, setNavigation] = useState(navigationList[0]);

  return (
    <div
      className={cn("section-bg section-mb0", styles.releases)}
      ref={scrollToRef}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Our Blog</div>
          <div className={styles.wrap}>
            <h2 className={cn("h2", styles.title)}>Latest Releases</h2>
            <div className={styles.info}>
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </div>
            <div className={styles.nav}>
              {navigationList.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.field}>
              <Dropdown
                className={styles.dropdown}
                classDropdownHead={styles.dropdownHead}
                value={navigation}
                setValue={setNavigation}
                options={navigationList}
              />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <Item className={styles.item} item={x} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;
