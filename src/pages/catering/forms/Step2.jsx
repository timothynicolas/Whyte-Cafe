import styles from "../catering.module.css";

import UtensilIcon from "../../../assets/catering/utensil.svg?react";
import Bowlicon from "../../../assets/catering/bowl.svg?react";
import BanIcon from "../../../assets/catering/ban.svg?react";

export function Step2({ formData, onChange }) {
  return (
    <>
      {/* Setup Type */}
      <div className={styles.fieldContainer}>
        <label>
          Type of Setup <span style={{ color: "red" }}>*</span>
        </label>

        <div className={styles.fieldWrapper}>
          <select
            value={formData.setupType}
            onChange={(e) => onChange("setupType", e.target.value)}
            className={styles.field}
          >
            <option value="" disabled>
              Select a setup type
            </option>
            <option>Buffet</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>

          <UtensilIcon
            className={`${styles.fieldIcon} ${formData.setupType ? styles.iconFilled : ""}`}
          />
        </div>
      </div>

      {/* PREFERRED FOOD */}
      <div className={styles.fieldContainer}>
        <label>Preferred Dishes or Drinks</label>

        <div className={styles.fieldWrapper}>
          <textarea
            value={formData.preferredFood}
            onChange={(e) => onChange("preferredFood", e.target.value)}
            placeholder="e.g., coffee, pasta, sandwiches"
            className={styles.field}
          />

          <Bowlicon
            className={`${styles.fieldIcon} ${formData.preferredFood ? styles.iconFilled : ""}`}
          />
        </div>
      </div>
      {/* DIETARY RESTRICTIONS */}
      <div className={styles.fieldContainer}>
        <label>Dietary Restrictions</label>

        <div className={styles.fieldWrapper}>
          <textarea
            value={formData.dietaryRestrictions}
            onChange={(e) => onChange("dietaryRestrictions", e.target.value)}
            placeholder="e.g., vegetarian options, no pork, no dairy"
            className={styles.field}
          />

          <BanIcon
            className={`${styles.fieldIcon} ${formData.dietaryRestrictions ? styles.iconFilled : ""}`}
          />
        </div>
      </div>
    </>
  );
}
