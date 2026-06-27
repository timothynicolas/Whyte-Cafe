import { useState } from "react";

import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Step1 } from "./forms/Step1";
import { Step2 } from "./forms/Step2";
import { Step3 } from "./forms/Step3";
import { Step4 } from "./forms/Step4";
import { CateringModal } from "../../components/cateringModal/CateringModal";

import styles from "./catering.module.css";

import arrow from "../../assets/catering/arrow.svg";
import backArrow from "../../assets/catering/back-arrow.svg";
import paperAirplane from "../../assets/catering/paper-airplane.svg";

// validation functions
import { isValidEmail } from "../../utils/validation";

export function Catering() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // STEP 1
    eventDate: null,
    startTime: null,
    endTime: null,
    guestCount: "",
    eventType: "",

    // STEP 2
    setupType: "",
    preferredFood: "",
    dietaryRestrictions: "",

    //STEP 3
    fullName: "",
    email: "",
    phone: "",

    // STEP 4
    message: "",
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
    3:
      formData.fullName &&
      isValidEmail(formData.email) &&
      formData.phone.length === 11,
    4: true,
  };

  const isComplete = stepCompletion[step];

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container main-container">
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
            {step === 1 && (
              <Step1 formData={formData} onChange={handleChange} />
            )}
            {step === 2 && (
              <Step2 formData={formData} onChange={handleChange} />
            )}
            {step === 3 && (
              <Step3
                formData={formData}
                onChange={handleChange}
                isValidEmail={isValidEmail}
              />
            )}
            {step === 4 && (
              <Step4 formData={formData} onChange={handleChange} />
            )}
          </div>

          {showModal && <CateringModal setShowModal={setShowModal} />}

          {/* BACK BUTTON */}
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

            {/* NEXT/SUBMIT BUTTON */}
            <button
              className={`${styles.nextBtn} ${!isComplete ? styles.disabled : ""}`}
              onClick={() => {
                if (step === 4) {
                  setShowModal(true);
                } else {
                  setStep((prevStep) => prevStep + 1);
                }
              }}
              disabled={!isComplete}
            >
              {step === 4 ? "Submit" : "Next"}
              <img src={step === 4 ? paperAirplane : arrow} />
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
