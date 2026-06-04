import { useState } from "react";


import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Step1 } from "./forms/Step1";

import styles from "./catering.module.css";

import arrow from "../../assets/catering/arrow.svg";

export function Catering() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventDate: null,
    startTime: null,
    endTime: null,
    guestCount: "",
    eventType: "",
    // ...step 2 fields later
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container main-container">
      <Navbar />

      <div className={styles.contentContainer}>
        {/* HEADER */}
        <div className={styles.headerContainer}>
          <p className={styles.header}>Got an event brewing?</p>

          <p className={styles.subheader}>
            Tell us a bit about your event for a quote. {step}
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
        </div>

        {/* Testing */}
        {/* {eventDate && <p>Selected Date: {eventDate.toLocaleDateString()}</p>} */}

        <button
          className={styles.viewMoreBtn}
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Next Step
          <img src={arrow} />
        </button>
      </div>

      <Footer />
    </div>
  );
}
