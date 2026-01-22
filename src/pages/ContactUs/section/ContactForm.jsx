import { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { submitContact } from "../../../api/contact.api";

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  /* ===============================
     🔔 AUTO HIDE POPUP (FIXED)
  ================================ */
  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [showPopup]);

  /* ===============================
     INPUT HANDLER
  ================================ */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ===============================
     SUBMIT HANDLER
  ================================ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        consent: formData.consent,
      };

      await submitContact(payload);

      // show popup
      setShowPopup(true);

      setSuccessMessage(
        "Thank you! Our team will contact you within 24 business hours."
      );

      // reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again later.";

      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-6 py-16 relative">
      {/* 🔔 SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-lg shadow-lg text-sm flex items-center gap-2 animate-fade-in">
          ✅ Your request has been submitted successfully
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Tell us about your project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It takes less than a minute. Share your requirements and our team
            will reach out to discuss the next steps.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                           focus:outline-none focus:border-[#007bff]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                           focus:outline-none focus:border-[#007bff]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              placeholder="Briefly describe your project, goals, timeline, or any specific requirements..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:border-[#007bff] resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              This helps us understand your requirements better.
            </p>
          </div>

          {/* Consent */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-[#007bff] rounded border-gray-300"
              />

              <p className="text-gray-700 text-xs leading-relaxed">
                <strong>I consent to receive messages from Appsixer</strong>,
                including project updates, support communications, and
                marketing-related information. Message frequency may vary. You
                may opt out at any time.
                <br />
                By submitting this form, you agree to our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#007bff] font-medium hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/terms-conditions"
                  className="text-[#007bff] font-medium hover:underline"
                >
                  Terms & Conditions
                </Link>.
                <br />
                For any queries, contact{" "}
                <a
                  href="mailto:info@appsixer.com"
                  className="text-[#007bff] font-medium hover:underline"
                >
                  info@appsixer.com
                </a>.
              </p>
            </div>
          </div>

          {/* Inline Messages */}
          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-4 text-center">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 text-center">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 py-3 rounded-md text-sm font-semibold text-white transition
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#007bff] hover:bg-[#0069d9]"
                }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            <p className="text-xs text-gray-500">
              🔒 Your information is safe with us. We never share your data.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
});

export default ContactForm;
