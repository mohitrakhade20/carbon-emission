import React from "react";
import cn from "classnames";
import styles from "./Lessons.module.sass";
import Card from "./Card";
import Loader from "../Loader";

const items = [
  {
    title: "Learn about UI8 coin and earn an All-Access Pass",
    author: "Floyd Buckridge",
    date: "Feb 03, 2021",
    category: "purple",
    categoryText: "learn & earn",
    image: "/images/content/lessons-pic-1.jpg",
    image2x: "/images/content/lessons-pic-1@2x.jpg",
    play: true,
    url: "/learn-crypto",
  },
  {
    title: "Submit your watchlist and win USDT",
    author: "Floyd Buckridge",
    date: "Feb 03, 2021",
    category: "green",
    categoryText: "weekly watchlist airdrop",
    image: "/images/content/lessons-pic-2.jpg",
    image2x: "/images/content/lessons-pic-2@2x.jpg",
    play: false,
    url: "/learn-crypto",
  },
  {
    title: "Submit your watchlist and win USDT",
    author: "Floyd Buckridge",
    date: "Feb 03, 2021",
    category: "blue",
    categoryText: "featured",
    image: "/images/content/lessons-pic-3.jpg",
    image2x: "/images/content/lessons-pic-3@2x.jpg",
    play: true,
    url: "/learn-crypto",
  },
  {
    title: "Learn about UI8 coin and earn an All-Access Pass",
    author: "Floyd Buckridge",
    date: "Feb 03, 2021",
    category: "purple",
    categoryText: "learn & earn",
    image: "/images/content/lessons-pic-1.jpg",
    image2x: "/images/content/lessons-pic-1@2x.jpg",
    play: true,
    url: "/learn-crypto",
  },
];

const Lessons = ({ classSection }) => {
  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Learn and earn</h2>
          <div className={styles.info}>
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <Card className={styles.card} item={x} key={index} />
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <Loader className={styles.loader} />
            <span>Load more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
