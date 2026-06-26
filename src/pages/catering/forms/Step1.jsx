import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import styles from "../catering.module.css";

// import calendar from "../../../assets/catering/calendar.svg";
import CalendarIcon from "../../../assets/catering/calendar.svg?react";
import PeopleIcon from "../../../assets/catering/people.svg?react";
import ClockIcon from "../../../assets/catering/clock.svg?react";
import GlassIcon from "../../../assets/catering/glass.svg?react";

const MIN_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
export function Step1({ formData, onChange }) {
  return (
    <>
      {/* EVENT DATE */}
      <div className={styles.fieldContainer}>
        <label>
          <CalendarIcon />
          Event Date <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <DatePicker
            selected={formData.eventDate}
            onChange={(date) => {
              onChange("eventDate", date);
            }}
            minDate={MIN_DATE}
            placeholderText="MM/DD/YYYY"
            className={styles.field}
            dateFormat="MM/dd/yyyy"
          />

          {/* <CalendarIcon className={`${styles.fieldIcon} ${formData.eventDate ? styles.iconFilled : ""}`} /> */}
        </div>
      </div>

      {/* START & END TIME */}
      <div className={styles.timeContainer}>
        <div className={styles.fieldContainer}>
          <label>
            <ClockIcon />
            Start Time <span style={{ color: "red" }}>*</span>
          </label>

          <div className={styles.fieldWrapper}>
            <DatePicker
              selected={formData.startTime}
              onChange={(time) => {
                onChange("startTime", time);
              }}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              placeholderText="00:00 AM"
              className={styles.field}
            />
          </div>
        </div>

        <div className={styles.fieldContainer}>
          <label>
            <ClockIcon />
            End Time <span style={{ color: "red" }}>*</span>
          </label>

          <div className={styles.fieldWrapper}>
            <DatePicker
              selected={formData.endTime}
              onChange={(time) => onChange("endTime", time)}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              placeholderText="00:00 PM"
              className={styles.field}
            />
          </div>
        </div>
      </div>

      {/* NUMBER OF GUESTS */}
      <div className={styles.fieldContainer}>
        <label>
          <PeopleIcon />
          Number of Guests <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="number"
            value={formData.guestCount}
            onChange={(e) => onChange("guestCount", e.target.value)}
            placeholder="How many are attending?"
            className={styles.field}
          />
        </div>
      </div>
      {/* EVENT TYPE */}
      <div className={styles.fieldContainer}>
        <label>
          <GlassIcon />
          Event Type <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <input
            type="text"
            value={formData.eventType}
            onChange={(e) => onChange("eventType", e.target.value)}
            placeholder="What's the occasion?"
            className={styles.field}
          />
        </div>
      </div>
    </>
  );
}
