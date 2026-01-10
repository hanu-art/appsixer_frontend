const PrivacyPolicy = () => {
  return (
    <>
      {/* HEADER - SAME STYLE */}
      <section className="w-full bg-[#007bff]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-blue-100 mt-2">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH IMPROVED DESIGN */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        
        {/* INTRODUCTION CARD */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6 border-l-4 border-[#007bff]">
          <p className="text-gray-700 text-lg leading-relaxed">
            Appsixer LLC ("we," "us," or "our") is committed to protecting and
            respecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website <strong className="text-[#007bff]">www.appsixer.com</strong>, use our services, or interact
            with us in other ways. By using our website and services, you agree to
            the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
          </div>
          <p className="text-gray-700 mb-3">
            We collect the following types of information when you interact with
            our website or use our services:
          </p>
          <div className="space-y-2 pl-6">
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[#007bff] rounded-full mt-2 mr-3"></div>
              <span className="text-gray-700">
                <strong>Personal Information:</strong> Name, email address, phone number, etc.
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[#007bff] rounded-full mt-2 mr-3"></div>
              <span className="text-gray-700">
                <strong>Usage Data:</strong> Information about how you use our website, such as
                pages viewed, time spent on the site, etc.
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[#007bff] rounded-full mt-2 mr-3"></div>
              <span className="text-gray-700">
                <strong>Cookies:</strong> Small data files that are stored on your device to track
                activity and preferences.
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h2 className="text-2xl font-bold text-gray-900">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-gray-700 mb-3">We may use the information we collect for the following purposes:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">To provide and improve our services.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">To communicate with you, including sending marketing communications (with your consent).</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">To personalize your experience on our website.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">To comply with legal obligations.</p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="mb-10 bg-red-50 rounded-lg p-6 border border-red-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h2 className="text-2xl font-bold text-gray-900">
              How We Share Your Information
            </h2>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-200 mb-4">
            <p className="text-gray-700">
              We do not sell, trade, or otherwise transfer your personal information
              to outside parties without your consent, except in the following
              cases:
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>Service Providers:</strong> We may share your information
                with third-party service providers who assist us in operating our
                website or providing services.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to a legal request
                (e.g., court order).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="mb-10 bg-green-50 rounded-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Data Security
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please note that no method of transmission over
            the internet is 100% secure.
          </p>
        </div>

        {/* SECTION 5 */}
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">5</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Rights
            </h2>
          </div>
          <p className="text-gray-700 mb-3">Depending on your location, you may have the right to:</p>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">Access and update your personal information.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">Request the deletion of your personal information.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">Opt-out of receiving marketing communications.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">Withdraw your consent at any time, where applicable.</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <p className="text-gray-700">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:info@appsixer.com" className="text-[#007bff] font-medium hover:underline">
                info@appsixer.com
              </a>.
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">6</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies to enhance your experience and gather data
            on site usage. You can control cookies through your browser settings.
            For more information, refer to our Cookie Policy [if applicable].
          </p>
        </div>

        {/* SECTION 7 */}
        <div className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">7</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Changes to This Privacy Policy
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated "Last Updated" date. We
            encourage you to review this Privacy Policy periodically.
          </p>
        </div>

        {/* SECTION 8 */}
        <div className="mb-10 bg-green-50 rounded-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">8</div>
            <h2 className="text-2xl font-bold text-gray-900">
              SMS Privacy Policy
            </h2>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-gray-700 font-medium">
              Appsixer will not sell or share your mobile opted-in consent data with
              any third parties.
            </p>
          </div>
        </div>

        {/* SECTION 9 - CONTACT */}
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#007bff]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold text-lg">9</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <h3 className="font-bold text-gray-900">Email</h3>
              </div>
              <a 
                href="mailto:info@appsixer.com" 
                className="text-[#007bff] hover:underline font-medium"
              >
                info@appsixer.com
              </a>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <h3 className="font-bold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-700">522 W RIVERSIDE AVE STE N SPOKANE WA 99201-0581</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default PrivacyPolicy;