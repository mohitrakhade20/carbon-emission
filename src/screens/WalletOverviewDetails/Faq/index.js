import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Faq.module.sass";

const items = [
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-1.jpg",
    image2x: "/images/content/faq-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-2.jpg",
    image2x: "/images/content/faq-pic-2@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-3.jpg",
    image2x: "/images/content/faq-pic-3@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-4.jpg",
    image2x: "/images/content/faq-pic-4@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-5.jpg",
    image2x: "/images/content/faq-pic-5@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    category: "Blockchain",
    title: "How to deposit/withdraw cryptocurrency on",
    image: "/images/content/faq-pic-1.jpg",
    image2x: "/images/content/faq-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
];

const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.list}>
        {items.map((x, index) => (
          <Link className={styles.item} key={index} to={x.url}>
            <div className={styles.preview}>
              <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Action" />
            </div>
            <div className={styles.details}>
              <div className={styles.category}>{x.category}</div>
              <div className={styles.title}>{x.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        className={cn("button-stroke button-small", styles.button)}
        to="/learn-crypto"
      >
        View all
      </Link>
    </div>
  );
};

export default Faq;
