import React, { useState } from "react";
import cn from "classnames";
import styles from "./Export.module.sass";
import Icon from "../Icon";
import OutsideClickHandler from "react-outside-click-handler";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const Export = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(className, styles.export)}>
        <button
          className={cn(
            "button-small",
            { [styles.active]: visible },
            styles.button
          )}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="arrow-bottom" size="16" />
          <span>Export</span>
        </button>
        <div className={cn(styles.body, { [styles.show]: visible })}>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            dateFormatCalendar={"MMM yyyy"}
            endDate={endDate}
            selectsRange
            inline
          />
          {startDate && endDate && (
            <div className={styles.interval}>
              {format(startDate, "dd MMM yyyy")} -{" "}
              {format(endDate, "dd MMM yyyy")}
            </div>
          )}
          <button
            className={cn("button", styles.button)}
            disabled={!startDate && !endDate}
          >
            Download .CSV
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Export;
