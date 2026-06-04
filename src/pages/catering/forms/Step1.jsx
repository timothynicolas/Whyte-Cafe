import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import styles from "../catering.module.css";

import calendar from "../../../assets/catering/calendar.svg";
import people from "../../../assets/catering/people.svg";
import clock from "../../../assets/catering/clock.svg";
import glass from "../../../assets/catering/glass.svg";

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

          <img src={calendar} alt="Calendar" className={styles.fieldIcon} />
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

            <img src={clock} alt="Clock" className={styles.fieldIcon} />
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

            <img src={clock} alt="Clock" className={styles.fieldIcon} />
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

          <img
            src={people}
            alt="group of people"
            className={styles.fieldIcon}
          />
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

          <img src={glass} alt="Champagne Glass" className={styles.fieldIcon} />
        </div>
      </div>
    </>
  );
}
