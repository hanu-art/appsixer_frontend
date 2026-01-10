import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
   


{/* HERO SECTION */}
<section className="relative w-full overflow-hidden pt-32">
  {/* BACKGROUND IMAGE */}
  <img
    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    alt="Technology background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 text-center">
    
    {/* TOP TAGLINE */}
    <p className="text-blue-200 text-sm md:text-base font-semibold tracking-wide uppercase mb-3">
      Perfect place for your startup idea
    </p>

    {/* MAIN HEADING */}
    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
      Let&apos;s Build Something Amazing
    </h1>

    {/* SUB HEADING */}
    <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg">
      Our team knows the secret recipe of success to make your idea unique
    </p>

    {/* CTA */}
    <button
      onClick={scrollToForm}
      className="mt-8 inline-flex items-center justify-center
                 bg-[#007bff] hover:bg-[#0069d9]
                 text-white font-semibold
                 px-9 py-3 rounded-lg
                 shadow-lg hover:shadow-xl
                 transition-all duration-300"
    >
      Start Your Project
    </button>
  </div>
</section>



      {/* FORM SECTION - ABOVE OFFICES */}
      <section id="contact-form" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out this form and we'll contact you within a few hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2.5 text-gray-800 font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border-2 border-gray-200 px-5 py-3.5 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block mb-2.5 text-gray-800 font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border-2 border-gray-200 px-5 py-3.5 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2.5 text-gray-800 font-semibold">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border-2 border-gray-200 px-5 py-3.5 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                required
              />
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1 w-5 h-5 text-[#007bff] rounded focus:ring-[#007bff] border-gray-300"
                  required
                />
                <label htmlFor="consent" className="ml-3 text-gray-700">
                  I agree to receive project updates and communications from Appsixer. View our{" "}
                  <Link to="/privacy-policy" className="text-[#007bff] hover:underline font-semibold">Privacy Policy</Link> and{" "}
                  <Link to="/terms-conditions" className="text-[#007bff] hover:underline font-semibold">Terms & Conditions</Link>.
                </label>
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-[#007bff] hover:bg-[#0069d9] text-white font-bold px-14 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* OFFICES SECTION - BELOW FORM - CARDS SMALLER */}
      
      <section className="max-w-6xl mx-auto px-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* USA OFFICE - LEFT SIDE */}
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-[#007bff] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-5xl">🇺🇸</span>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-gray-900">Head Office</h3>
          <p className="text-gray-500">USA - Headquarters</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-start gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Address</p>
              <p className="text-gray-800 font-semibold">
                522 W RIVERSIDE AVE STE N<br />
                SPOKANE WA 99201-0581
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Email</p>
              <a href="mailto:info@appsixer.com" className="text-[#007bff] hover:text-[#0069d9] font-semibold text-lg">
                info@appsixer.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Phone</p>
              <a href="tel:+14254006878" className="text-gray-800 hover:text-[#007bff] font-semibold text-lg">
                +1 425 400 6878
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* INDIA OFFICE - RIGHT SIDE */}
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-[#007bff] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-5xl">🇮🇳</span>
        </div>
        <div>
          <h3 className="font-bold text-2xl text-gray-900">India Office</h3>
          <p className="text-gray-500">Development Center</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-start gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Address</p>
              <p className="text-gray-800 font-semibold">
                Flat No 201, 19, KrishanKunj Apartment,<br />
                Paliskar Colony,<br />
                Madhya Pradesh 452004
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Email</p>
              <a href="mailto:contact@appsixer.com" className="text-[#007bff] hover:text-[#0069d9] font-semibold text-lg">
                contact@appsixer.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Phone</p>
              <a href="tel:+919893596975" className="text-gray-800 hover:text-[#007bff] font-semibold text-lg">
                +91 9893596975
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-[#007bff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.955 0 0010 1.944a11.954 11.955 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="text-gray-500 mb-1 font-medium">Skype</p>
              <p className="text-gray-800 font-semibold">contact appsixer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FINAL CTA */}
      <section className="bg-[#007bff] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 100+ satisfied clients who trusted us with their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToForm}
              className="bg-white text-[#007bff] hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get A Free Quote
            </button>
            <a 
              href="mailto:info@appsixer.com"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#007bff] font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;