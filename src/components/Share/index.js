import React, { useState } from "react";
import cn from "classnames";
import styles from "./Share.module.sass";
import Icon from "../Icon";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import OutsideClickHandler from "react-outside-click-handler";

const shareUrlFacebook = "https://ui8.net";
const shareUrlTwitter = "https://ui8.net";

const Share = ({ className, openUp, darkButton }) => {
  const [visible, setVisible] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(
          className,
          styles.share,
          { [styles.openUp]: openUp },
          { [styles.darkButton]: darkButton }
        )}
      >
        <button
          className={cn(
            "button-circle-stroke button-small",
            { [styles.active]: visible },
            styles.button
          )}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="share" size="24" />
        </button>
        <div className={cn(styles.body, { [styles.show]: visible })}>
          <div className={styles.title}>Share link to this page</div>
          <div className={styles.list}>
            <TwitterShareButton className={styles.link} url={shareUrlTwitter}>
              <span>
                <Icon name="twitter" size="20" />
              </span>
            </TwitterShareButton>
            <FacebookShareButton className={styles.link} url={shareUrlFacebook}>
              <span>
                <Icon name="facebook" size="20" />
              </span>
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Share;
