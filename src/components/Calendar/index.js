import React, { useState } from "react";
import cn from "classnames";
import styles from "./Calendar.module.sass";
import Icon from "../Icon";
import OutsideClickHandler from "react-outside-click-handler";
import DatePicker from "react-datepicker";

const dates = ["One day", "One week", "One month", "One year", "All time"];

const Calendar = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(className, styles.calendar)}>
        <button
          className={cn(
            "button-stroke button-small",
            { [styles.active]: visible },
            styles.button
          )}
          onClick={() => setVisible(!visible)}
        >
          <span>All time</span>
          <Icon name="calendar" size="16" />
        </button>
        <div className={cn(styles.body, { [styles.show]: visible })}>
          <div className={styles.datepicker}>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={2}
              dateFormatCalendar={"MMM yyyy"}
              selectsRange
              inline
            />
          </div>
          <div className={styles.variants}>
            {dates.map((x, index) => (
              <button
                className={cn("button-stroke button-small", styles.button)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Calendar;
