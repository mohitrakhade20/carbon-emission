import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
  {
    title: "Exchange",
    url: "/exchange",
  },
  {
    title: "Buy crypto",
    url: "/buy-crypto",
  },
  {
    title: "Market",
    url: "/market",
  },
  {
    title: "Learn crypto",
    url: "/learn-crypto",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "dribbble",
    size: "16",
    url: "https://dribbble.com/ui8",
  },
  {
    title: "behance",
    size: "20",
    url: "https://www.behance.net/ui8",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <img
                className={styles.picDesktop}
                src="images/logo.svg"
                alt="BitCloud"
              />
              <Image
                className={styles.picMobile}
                src="/images/logo-light.svg"
                srcDark="/images/logo-dark.svg"
                alt="BitCloud"
              />
            </Link>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-down" size="24" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={styles.link}
                    activeClassName={styles.active}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>43252 Borer Mountains</p>
              <p>Zackerychester</p>
              <p>Bahamas</p>
              <p>732-528-4945</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
              Subscribe our newsletter to get more free design course and
              resource.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Enter your email"
              type="email"
              name="email"
              icon="arrow-next"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2021 UI8 LLC. All rights reserved
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
