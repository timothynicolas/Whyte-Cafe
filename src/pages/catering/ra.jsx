import { useState } from "react";
import emailjs from "@emailjs/browser";

const INITIAL = {
  eventDate: "", startTime: "", endTime: "",
  guests: "", eventType: "", location: "",
  setupType: "", dishes: "", dietary: "",
};

export default function EventForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Grayed-out style logic
  const inputClass = (val) =>
    `w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-black transition-colors ${
      val ? "text-black border-gray-300" : "text-gray-300 border-gray-200"
    }`;

  const validateStep1 = () => {
    const { eventDate, startTime, endTime, guests, eventType } = form;
    return eventDate && startTime && endTime && guests && eventType;
  };

  const handleSubmit = async () => {
    if (!form.setupType) return alert("Please select a setup type.");
    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",     // from EmailJS dashboard
        "YOUR_TEMPLATE_ID",    // from EmailJS dashboard
        form,
        "YOUR_PUBLIC_KEY"      // from EmailJS dashboard
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <div className="text-center p-8">✅ Quote sent!</div>;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-3xl shadow">
      <h1 className="text-2xl font-bold">Got an event brewing?</h1>
      <p className="text-sm text-gray-400 mb-4">Fill in the details so we can give you a quote!</p>

      {/* Progress dots */}
      <div className="flex gap-2 mb-6">
        {[1, 2].map((s) => (
          <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? "bg-black" : "bg-gray-200"}`} />
        ))}
      </div>

      {step === 1 && (
        <>
          <div className="mb-3">
            <label className="text-xs font-medium">Event Date *</label>
            <input type="date" name="eventDate" value={form.eventDate}
              onChange={update} className={inputClass(form.eventDate)} />
          </div>
          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <label className="text-xs font-medium">Start Time *</label>
              <input type="time" name="startTime" value={form.startTime}
                onChange={update} className={inputClass(form.startTime)} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium">End Time *</label>
              <input type="time" name="endTime" value={form.endTime}
                onChange={update} className={inputClass(form.endTime)} />
            </div>
          </div>
          <div className="mb-3">
            <label className="text-xs font-medium">Number of Guests *</label>
            <input type="number" name="guests" value={form.guests}
              onChange={update} placeholder="How many are attending?"
              className={inputClass(form.guests)} />
          </div>
          <div className="mb-3">
            <label className="text-xs font-medium">Event Type *</label>
            <select name="eventType" value={form.eventType} onChange={update}
              className={inputClass(form.eventType)}>
              <option value="" disabled>What's the occasion?</option>
              {["Birthday","Wedding","Party","Corporate","Other"].map(o => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="text-xs font-medium">Event Location</label>
            <input type="text" name="location" value={form.location}
              onChange={update} placeholder="Where's the occasion?"
              className={inputClass(form.location)} />
          </div>
          <button onClick={() => validateStep1() ? setStep(2) : alert("Fill required fields")}
            className="w-full bg-black text-white py-3 rounded-full font-semibold text-sm">
            Next →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="mb-3">
            <label className="text-xs font-medium">Type of Setup *</label>
            <select name="setupType" value={form.setupType} onChange={update}
              className={inputClass(form.setupType)}>
              <option value="" disabled>Select setup type</option>
              {["Buffet","Plated","Cocktail","Food Stall"].map(o => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="text-xs font-medium">Preferred Dishes or Drinks</label>
            <textarea name="dishes" value={form.dishes} onChange={update}
              placeholder="e.g. coffee, pasta, sandwiches" rows={3}
              className={inputClass(form.dishes)} />
          </div>
          <div className="mb-6">
            <label className="text-xs font-medium">Dietary Restrictions</label>
            <textarea name="dietary" value={form.dietary} onChange={update}
              placeholder="e.g. vegetarian options, no pork, no dairy" rows={3}
              className={inputClass(form.dietary)} />
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 bg-gray-100 py-3 rounded-full font-semibold text-sm">
              ← Back
            </button>
            <button onClick={handleSubmit} disabled={loading}
              className="flex-1 bg-black text-white py-3 rounded-full font-semibold text-sm disabled:opacity-40">
              {loading ? "Sending..." : "Next →"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}