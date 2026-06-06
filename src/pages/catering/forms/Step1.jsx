import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import styles from "../catering.module.css";

// import calendar from "../../../assets/catering/calendar.svg";
import CalendarIcon from "../../../assets/catering/calendar.svg?react";
import PeopleIcon from "../../../assets/catering/people.svg?react";
import ClockIcon from "../../../assets/catering/clock.svg?react";
import GlassIcon from "../../../assets/catering/glass.svg?react";

export function Step1({ formData, onChange }) {
  return (
    <>
      {/* EVENT DATE */}
      <div className={styles.fieldContainer}>
        <label>
          Event Date <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <DatePicker
            selected={formData.eventDate}
            onChange={(date) => onChange("eventDate", date)}
            minDate={new Date()}
            placeholderText="MM/DD/YYYY"
            className={styles.field}
            dateFormat="MM/dd/yyyy"
          />

          <CalendarIcon className={`${styles.fieldIcon} ${formData.eventDate ? styles.iconFilled : ""}`} />
        </div>
      </div>

      {/* START & END TIME */}
      <div className={styles.huh}>
        <div className={styles.fieldContainer}>
          <label>
            Start Time <span style={{ color: "red" }}>*</span>
          </label>

          <div className={styles.fieldWrapper}>
            <DatePicker
              selected={formData.startTime}
              onChange={(time) => onChange("startTime", time)}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              placeholderText="00:00 AM"
              className={styles.field}
            />

            <ClockIcon className={`${styles.fieldIcon} ${formData.startTime ? styles.iconFilled : ""}`} />
          </div>
        </div>

        <div className={styles.fieldContainer}>
          <label>
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

            <ClockIcon className={`${styles.fieldIcon} ${formData.endTime ? styles.iconFilled : ""}`} />
          </div>
        </div>
      </div>

      {/* NUMBER OF GUESTS */}
      <div className={styles.fieldContainer}>
        <label>
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

          <PeopleIcon className={`${styles.fieldIcon} ${formData.guestCount ? styles.iconFilled : ""}`} />
        </div>
      </div>
      {/* EVENT TYPE */}
      <div className={styles.fieldContainer}>
        <label>
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

          <GlassIcon className={`${styles.fieldIcon} ${formData.eventType ? styles.iconFilled : ""}`} />
        </div>
      </div>
    </>
  );
}
