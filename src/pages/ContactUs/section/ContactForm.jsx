import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔗 API CALL YAHAN AAYEGI (future-ready)
    setTimeout(() => {
      console.log("Submitted Data:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      });
      alert("Thank you! Our team will contact you within 24 business hours.");
    }, 1200);
  };

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-6 py-16">
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
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 text-sm
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
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 text-sm
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
              className="w-full rounded-lg border border-gray-300
                         px-4 py-3 text-sm
                         focus:outline-none focus:border-[#007bff]
                         resize-none"
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
                marketing-related information. Message frequency may vary.
                You may opt out at any time.
                <br />
                By submitting this form, you agree to our{" "}
                <Link to="/privacy-policy" className="text-[#007bff] font-medium hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms-conditions" className="text-[#007bff] font-medium hover:underline">
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

          {/* Submit */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-10 py-3 rounded-md text-sm font-semibold text-white
                transition-colors duration-200
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
