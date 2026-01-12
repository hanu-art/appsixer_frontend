import { motion } from "framer-motion";

/* animation */
const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35, ease: "easeOut" },
};

/* reusable card */
const Card = ({ children }) => (
  <motion.div
    {...fadeUp}
    className="bg-white border border-gray-200 rounded-lg p-7 mb-10"
  >
    {children}
  </motion.div>
);

const TermsConditions = () => {
  return (
    <>
      {/* ===== BLACK HEADER STRIP ===== */}
      <section className="w-full bg-[#0b0f19] h-24 md:h-28" />

      {/* ===== PAGE TITLE ===== */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#007bff]">
            Terms and Conditions
          </h1>

          {/* brand underline */}
          <div className="mt-3 h-1 w-14 bg-[#007bff] rounded-full" />

          <p className="text-sm text-gray-500 mt-3">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* divider */}
      <div className="h-px w-full bg-gray-200" />

      {/* ===== CONTENT ===== */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-16 text-gray-600">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="leading-relaxed text-base">
            Welcome to appsixer llc ("we," "us," or "our"). By using our website{" "}
            <strong className="text-[#007bff]">www.appsixer.com</strong> and
            services, you agree to the following terms and conditions. Please
            read them carefully.
          </p>
        </motion.div>

        {/* 1 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed">
            By accessing or using our website or services, you agree to comply
            with and be bound by these Terms and Conditions. If you do not agree
            to these terms, please do not use our website or services.
          </p>
        </Card>

        {/* 2 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            2. Use of the Website
          </h2>
          <p className="mb-3">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Violate any applicable laws or regulations.</li>
            <li>
              Engage in any activity that could damage, disable, or impair the
              website or interfere with another user's ability to use it.
            </li>
          </ul>
        </Card>

        {/* 3 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            3. Account Registration
          </h2>
          <p className="leading-relaxed">
            To access certain features of our services, you may need to create
            an account. You agree to provide accurate and complete information
            and keep your credentials secure.
          </p>
        </Card>

        {/* 4 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            4. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All content on the website is owned by or licensed to Appsixer LLC
            and protected by intellectual property laws. You may not copy or
            distribute content without permission.
          </p>
        </Card>

        {/* 5 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            5. Payments
          </h2>
          <p className="leading-relaxed">
            Payments for products or services must be accurate and complete.
            Prices may change from time to time.
          </p>
        </Card>

        {/* 6 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            Appsixer LLC will not be liable for any damages arising from your use
            of the website or services.
          </p>
        </Card>

        {/* 7 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            7. Privacy Policy
          </h2>
          <p className="mb-3">
            Your use of the website is governed by our Privacy Policy.
          </p>
          <a
            href="/privacy-policy"
            className="text-[#007bff] font-medium hover:underline"
          >
            View Privacy Policy →
          </a>
        </Card>

        {/* 8 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            8. Termination
          </h2>
          <p className="leading-relaxed">
            We may suspend or terminate your access if you violate these terms.
          </p>
        </Card>

        {/* 9 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            9. Changes to Terms
          </h2>
          <p className="leading-relaxed">
            We reserve the right to update these Terms at any time.
          </p>
        </Card>

        {/* 10 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            10. Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of Washington.
          </p>
        </Card>

        {/* 11 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            11. SMS Terms
          </h2>
          <p className="leading-relaxed">
            Appsixer sends text messages to users who opt in. Message frequency
            may vary. Message and data rates may apply. Text STOP to opt out.
          </p>
        </Card>

        {/* 12 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            12. Contact Us
          </h2>
          <p className="mb-2">
            📧{" "}
            <a
              href="mailto:info@appsixer.com"
              className="text-[#007bff] hover:underline"
            >
              info@appsixer.com
            </a>
          </p>
          <p> 522 W Riverside Ave Ste N, Spokane, WA 99201-0581</p>
        </Card>

      </section>
    </>
  );
};

export default TermsConditions;
