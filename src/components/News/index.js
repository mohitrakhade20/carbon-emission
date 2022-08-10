import React from "react";
import cn from "classnames";
import styles from "./News.module.sass";
import Image from "../Image";
import Slider from "react-slick";
import Icon from "../Icon";
import Card from "./Card";

const items = [
  {
    title: "Be Part of our Global Community",
    content:
      "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
    stage: "crypto news",
    image: "/images/content/news-pic-1.png",
    image2x: "/images/content/news-pic-1@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Be Part of our Global Community",
    content:
      "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
    stage: "Join now",
    image: "/images/content/news-pic-1.png",
    image2x: "/images/content/news-pic-1@2x.png",
    url: "/learn-crypto-details",
  },
  {
    title: "Be Part of our Global Community",
    content:
      "Let’s stay in touch. Join our communities to keep up with the BitCloud team and our traders from across the world.",
    stage: "crypto news",
    image: "/images/content/news-pic-1.png",
    image2x: "/images/content/news-pic-1@2x.png",
    url: "/learn-crypto-details",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const News = ({ classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="18" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="18" />
      </SlickArrow>
    ),
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <Image
              className={styles.pic}
              src="/images/logo-light.svg"
              srcDark="/images/logo-dark.svg"
              alt="BitCloud"
            />
          </div>
          <h2 className={cn("h2", styles.title)}>
            Stay in the know on crypto with BitCloud
          </h2>
          <div className={styles.info}>
            A creative agency that lead and inspire
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="news-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
