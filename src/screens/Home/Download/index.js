import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Download.module.sass";

const items = [
  {
    title: "Appstore",
    content: "Download from",
    image: "/images/content/apple.svg",
    url: "/",
  },
  {
    title: "Google Play",
    content: "Download from",
    image: "/images/content/google-play.svg",
    url: "/",
  },
  {
    title: "Mac OS",
    content: "Download for",
    image: "/images/content/apple.svg",
    url: "/",
  },
];

const Download = () => {
  return (
    <div className={cn("section-mb0", styles.download)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/download-pic@2x.png 2x"
            src="/images/content/download-pic.png"
            alt="Download"
          />
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Trade anywhere</h2>
          <div className={styles.info}>
            Anytime, anywhere. Trade crypto on your terms.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <Link className={styles.item} key={index} to={x.url}>
                <div className={styles.icon}>
                  <img src={x.image} alt="Logo" />
                </div>
                <div className={styles.details}>
                  <div className={styles.content}>{x.content}</div>
                  <div className={styles.subtitle}>{x.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
