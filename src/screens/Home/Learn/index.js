import React, { useState } from "react";
import cn from "classnames";
import styles from "./Learn.module.sass";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import Play from "../../../components/Play";

const navigation = ["All", "Bitcoin", "Blockchain", "Tutorial"];

const items = [
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    image: "/images/content/learn-pic-1.jpg",
    image2x: "/images/content/learn-pic-1@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    image: "/images/content/learn-pic-2.jpg",
    image2x: "/images/content/learn-pic-2@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    play: true,
    image: "/images/content/learn-pic-4.jpg",
    image2x: "/images/content/learn-pic-4@2x.jpg",
    url: "/learn-crypto-details",
  },
  {
    title: "Leveraged tokens now available",
    content: "Good things come in 3s. Get 3x Leveraged tokens now.",
    date: "Jun 1, 2021",
    image: "/images/content/learn-pic-3.jpg",
    image2x: "/images/content/learn-pic-3@2x.jpg",
    url: "/learn-crypto-details",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Learn = ({ scrollToRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 100000,
        settings: "unslick",
      },
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={styles.wrap}>
            <h2 className={cn("h2", styles.title)}>Learn crypto</h2>
            <div className={styles.nav}>
              {navigation.map((x, index) => (
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
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/learn-crypto"
          >
            View more
          </Link>
        </div>
        <div className={styles.wrapper}>
          <Slider className={cn("learn-slider", styles.slider)} {...settings}>
            {items.map((x, index) =>
              index < 1 ? (
                <Link className={styles.item} to={x.url} key={index}>
                  <div className={styles.preview}>
                    <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Card" />
                    {x.play && <Play small />}
                  </div>
                  <div className={styles.line}>
                    <div className={styles.wrap}>
                      <div className={styles.subtitle}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                    <button className={cn("button-stroke", styles.button)}>
                      <span>Learn more</span>
                      <Icon name="arrow-right" size="16" />
                    </button>
                  </div>
                </Link>
              ) : (
                <Link className={styles.item} to={x.url} key={index}>
                  <div className={styles.preview}>
                    <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Card" />
                    {x.play && <Play small />}
                  </div>
                  <div className={styles.details}>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                    {x.date && <div className={styles.date}>{x.date}</div>}
                  </div>
                </Link>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Learn;
