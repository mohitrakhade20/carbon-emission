import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";

const items = [
  {
    title: "Download",
    image2x: "/images/content/step-1@2x.png",
    image: "/images/content/step-1.png",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Connect wallet",
    image2x: "/images/content/step-2@2x.png",
    image: "/images/content/step-2.png",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Start trading",
    image2x: "/images/content/step-3@2x.png",
    image: "/images/content/step-3.png",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
  {
    title: "Earn money",
    image2x: "/images/content/step-4@2x.png",
    image: "/images/content/step-4.png",
    content:
      "Stacks is a production-ready library of stackable content blocks built in React Native.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it works</h2>
          <div className={styles.info}>
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.preview}>
                <img
                  srcSet={`${x.image2x} 2x`}
                  src={x.image}
                  alt={`Step ${index + 1}`}
                />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
