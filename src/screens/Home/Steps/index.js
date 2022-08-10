import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";

const items = [
  {
    title: "Calculate",
    image2x: "/images/content/calculate.png",
    image: "/images/content/calculate.png",
    content:
      "Our platform provides you with various calculators to help you understand the impact of your actions.",
  },
 
  {
    title: "Reduce",
    image2x: "/images/content/reduce.png",
    image: "/images/content/reduce.png",
    content:
      "Reducing emissions is the key solution to tackling climate change. Helping You To Reduce Your Carbon Footprint",
  },
  {
    title: "Offset",
    image2x: "/images/content/tulip.png",
    image: "/images/content/tulip.png",
    content:
      "Tackle Climate Change And Care For Biodiversity By Becoming Carbon Neutral. We fund solutions to reducing carbon emissions.",
  },
  
  {
    title: "Comply",
    image2x: "/images/content/comply.png",
    image: "/images/content/comply.png",
    content:
      "Helping Businesses Meet Their Carbon, Energy, Legal And Supply Chain Obligations, Whilst Helping To Drive Down Costs",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it works</h2>
          <div className={styles.info}>
            Your Solution For Cutting Carbon And Caring For The Climate
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
