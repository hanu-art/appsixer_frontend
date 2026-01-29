import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        
        {/* TOP INFO BAR (DESKTOP ONLY) */}
        <div
          className={`hidden md:block transition-all duration-300 ${
            scrolled ? "bg-black/80" : "bg-black/60"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-8 text-sm text-white">
            <span>USA</span>
            <span>+1 425 400 6878</span>
            <span>info@appsixer.com</span>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div
          className={`transition-all duration-300 ${
            scrolled || !isHome
              ? "bg-[#007bff] shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* LOGO */}
           {/* LOGO */}

         <img
  src="/logo/logo.png"
  alt="Appsixer Logo"
  className="h-9 w-auto object-contain brightness-0 invert"
/>





            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-white text-sm font-medium">
              <Link to="/" className="hover:opacity-90">HOME</Link>
              <Link to="/company" className="hover:opacity-90">COMPANY</Link>
              <Link to="/staffing" className="hover:opacity-90">STAFFING</Link>
              <Link to="/career" className="hover:opacity-90">CAREER</Link>

              {/* LEGAL DROPDOWN */}
              <div className="relative group cursor-pointer">
                <span className="flex items-center gap-1 hover:opacity-90">
                  LEGAL
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-xl
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200">
                  <Link
                    to="/privacy-policy"
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </nav>

            {/* DESKTOP CTA */}
            <Link
              to="/contact"
              className={`hidden lg:inline-block ml-6 px-6 py-2 rounded-md text-sm font-semibold transition
                ${
                  isContactPage
                    ? "text-white border border-white/40 hover:bg-white/10"
                    : scrolled || !isHome
                    ? "bg-white text-[#007bff] hover:bg-gray-100"
                    : "bg-[#007bff] text-white hover:bg-[#0069d9]"
                }
              `}
            >
              CONTACT US
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-[75%] max-w-xs bg-[#007bff] z-50 shadow-xl">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
               <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
    
    <img
  src="/logo/logo.png"
  alt="Appsixer Logo"
  className="h-9 w-auto object-contain brightness-0 invert"
/>

</Link>


              <button onClick={() => setMenuOpen(false)} className="text-xl text-white">
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-5 py-6 gap-5 text-white text-base font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
              <Link to="/staffing" onClick={() => setMenuOpen(false)}>Staffing</Link>
              <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>

              {/* Legal group */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm uppercase tracking-widest text-blue-100 mb-3">
                  Legal
                </p>
                <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>
                  Terms & Conditions
                </Link>
              </div>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 font-semibold underline"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
