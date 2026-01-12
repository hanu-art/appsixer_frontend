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

const PrivacyPolicy = () => {
  return (
    <>
      {/* ===== BLACK HEADER STRIP ===== */}
      <section className="w-full bg-[#0b0f19] h-30 md:h-38" />

      {/* ===== PAGE TITLE (NORMAL WHITE AREA) ===== */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#007bff]">
  Privacy Policy
</h1>
         

{/* subtle brand line */}
<div className="mt-3 h-1 w-14 bg-[#007bff] rounded-full" />

<p className="text-sm text-gray-500 mt-3">
  Last Updated: January 2024
</p>
        </div>
      </section>

      {/* subtle divider */}
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
            Appsixer LLC ("we," "us," or "our") is committed to protecting and
            respecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website <strong className="text-[#007bff]">www.appsixer.com</strong>,
            use our services, or interact with us in other ways. By using our
            website and services, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </motion.div>

        {/* 1 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            We collect the following types of information when you interact with
            our website or use our services:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc.</li>
            <li><strong>Usage Data:</strong> Pages viewed, time spent on the site.</li>
            <li><strong>Cookies:</strong> Files stored on your device to track activity.</li>
          </ul>
        </Card>

        {/* 2 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and improve our services.</li>
            <li>Communicate with you (with consent).</li>
            <li>Personalize your experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Card>

        {/* 3 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            3. How We Share Your Information
          </h2>
          <p className="mb-3">
            We do not sell or trade your personal information except:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Service Providers:</strong> Trusted vendors assisting operations.</li>
            <li><strong>Legal Requirements:</strong> When required by law.</li>
          </ul>
        </Card>

        {/* 4 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            4. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            completely secure.
          </p>
        </Card>

        {/* 5 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            5. Your Rights
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access and update your personal information.</li>
            <li>Request deletion of personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p className="mt-4">
            Contact us at{" "}
            <a
              href="mailto:info@appsixer.com"
              className="text-[#007bff] hover:underline"
            >
              info@appsixer.com
            </a>.
          </p>
        </Card>

        {/* 6 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            6. Cookies
          </h2>
          <p>
            Our website uses cookies to enhance your experience. You can control
            cookies through your browser settings.
          </p>
        </Card>

        {/* 7 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            Updates will be posted on this page with a revised “Last Updated” date.
          </p>
        </Card>

        {/* 8 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            8. SMS Privacy Policy
          </h2>
          <p className="font-medium">
            Appsixer will not sell or share mobile opted-in consent data with any
            third parties.
          </p>
        </Card>

        {/* 9 */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            9. Contact Us
          </h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p className="mb-2">
            📧{" "}
            <a
              href="mailto:info@appsixer.com"
              className="text-[#007bff] hover:underline"
            >
              info@appsixer.com
            </a>
          </p>
          <p>📍 522 W Riverside Ave Ste N, Spokane, WA 99201-0581</p>
        </Card>

      </section>
    </>
  );
};

export default PrivacyPolicy;
