import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../Icon";

const socials = [
  {
    title: "facebook",
    size: "22",
    url: "https://www.facebook.com/aaoblocktech/",
  },
  {
    title: "twitter",
    size: "22",
    url: "https://twitter.com/aaoblocktech",
  },
  {
    title: "instagram",
    size: "22",
    url: "https://www.instagram.com/aaoblocktech/",
  },
  {
    title: "dribbble",
    size: "22",
    url: "https://dribbble.com/aaoblocktech",
  },
  {
    title: "behance",
    size: "22",
    url: "https://www.behance.net/aaoblocktech",
  },
];

const Card = ({ className, item }) => {
  return (
    <div className={cn(className, styles.card)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
      </div>
      <div className={styles.wrap}>
        <div className={cn("stage-small", styles.stage)}>{item.stage}</div>

        <div className={styles.title}>{item.title}</div>
        <div className={styles.content}>{item.content}</div>
        <div className={styles.socials}>
          {socials.map((x, index) => (
            <a
              className={styles.social}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.title} size={x.size} />
            </a>
          ))}
        </div>

        <Link
          className={cn("button-stroke button-small", styles.button)}
          to={item.url}
        >
          Contact US
        </Link>
      </div>
    </div>
  );
};

export default Card;
