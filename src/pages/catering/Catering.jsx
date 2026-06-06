import { useState } from "react";

import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Step1 } from "./forms/Step1";
import { Step2 } from "./forms/Step2";
import { Step3 } from "./forms/Step3";
import { Step4 } from "./forms/Step4";

import styles from "./catering.module.css";

import arrow from "../../assets/catering/arrow.svg";
import backArrow from "../../assets/catering/back-arrow.svg";
import paperAirplane from "../../assets/catering/paper-airplane.svg";

export function Catering() {
  const [step, setStep] = useState(4);

  const [formData, setFormData] = useState({
    eventDate: null,
    startTime: null,
    endTime: null,
    guestCount: "",
    eventType: "",

    // STEP 2
    setupType: "",
    preferredFood: "",
    dietaryRestrictions: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const stepCompletion = {
    1:
      formData.eventDate &&
      formData.startTime &&
      formData.endTime &&
      formData.guestCount &&
      formData.eventType,
    2: formData.setupType,
    3: formData.fullName && formData.email && formData.phone,
    4: true,
  };

  const isComplete = stepCompletion[step];
  return (
    <div className="container main-container">
      <Navbar />

      <div className={styles.contentContainer}>
        {/* HEADER */}
        <div className={styles.headerContainer}>
          <p className={styles.header}>Got an event brewing?</p>

          <p className={styles.subheader}>
            Tell us a bit about your event for a quote.
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className={styles.progressBar}>
          {[1, 2, 3, 4].map((b) => (
            <div
              key={b}
              className={`${styles.bar} ${step >= b ? styles.active : ""}`}
            ></div>
          ))}
        </div>

        {/* FORM */}
        <div className={styles.formContainer}>
          {step === 1 && <Step1 formData={formData} onChange={handleChange} />}
          {step === 2 && <Step2 formData={formData} onChange={handleChange} />}
          {step === 3 && <Step3 formData={formData} onChange={handleChange} />}
          {step === 4 && <Step4 formData={formData} onChange={handleChange} />}
        </div>

        {/* Testing */}
        {/* {eventDate && <p>Selected Date: {eventDate.toLocaleDateString()}</p>} */}
        <div className={styles.stepBtnContainer}>
          {step >= 2 && (
            <button
              className={`${styles.backBtn}`}
              onClick={() => setStep((prevStep) => prevStep - 1)}
              // disabled={!isComplete}
            >
              <img src={backArrow} />
              Back
            </button>
          )}

          <button
            className={`${styles.nextBtn} ${!isComplete ? styles.disabled : ""}`}
            onClick={() => setStep((prevStep) => prevStep + 1)}
            disabled={!isComplete}
          >
            {step === 4? "Submit": "Next"}
            <img src={step === 4? paperAirplane: arrow} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
