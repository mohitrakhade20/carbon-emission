import React, { useState } from "react";
import cn from "classnames";
import styles from "./Releases.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";

const navigationList = ["Bitcoin", "Blockchain", "Tutorials"];

const items = [
  {
    title: "What are Cryptocurrency Trading Bots",
    currency: "AAO Blocktech",
    content:
"Security, However one of blockchain's particular characteristics is security, this doesn't surmise that it is immune. Since the information ",    category: "red",
    categoryText: "new",
    image: "/images/content/releases-pic-1.jpg",
    image2x: "/images/content/releases-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Advantages of Blockchain in Big Data Transformation",
    currency: "AAO Blocktech",
    content:
"Blockchain can be utilized in an assortment of ventures, including medical services, land documentation, and instruction, on account of its decentralized and secure nature. ",
    category: "green",
    categoryText: "beginner",
    image: "/images/content/releases-pic-2.jpg",
    image2x: "/images/content/releases-pic-2@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Blockchain in Education Sector: Advantages and Disadvantages    ",
    currency: "AAO Blocktech",
    content:
"Is there a spot for blockchain in different ventures, like schooling? certainly, its apt. The advantage of using blockchain in instruction is the information ",    category: "red",
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
            We develop impeccable, decentralized Blockchain solutions.
We bring the power team.
You bring the challenge.
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
