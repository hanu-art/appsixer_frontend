import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* TOP INFO BAR (DESKTOP) */}
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
            scrolled ? "bg-[#007bff] shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* ===== LOGO (HOME LINK) ===== */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* LOGO ICON */}
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-[#007bff] shadow-md group-hover:shadow-lg transition">
                <span className="text-lg font-extrabold tracking-tight">
                  {"</>"}
                </span>
              </div>

              {/* WORDMARK */}
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-extrabold text-white tracking-wide">
                  App<span className="text-blue-200">sixer</span>
                </span>
                <span className="text-[10px] text-blue-100 tracking-widest uppercase">
                  Software Solutions
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-white text-sm font-medium">
              <Link to="/" className="hover:opacity-90">HOME</Link>
              <Link to="/company" className="hover:opacity-90">COMPANY</Link>
              <Link to="/staffing" className="hover:opacity-90">STAFFING</Link>
              <Link to="/privacy-policy" className="hover:opacity-90">PRIVACY</Link>
              <Link to="/career" className="hover:opacity-90">CAREER</Link>
            </nav>

            {/* DESKTOP CTA */}
            <Link
              to="/contact"
              className={`hidden lg:inline-block ml-6 px-6 py-2 rounded-md text-sm font-semibold transition
                ${
                  isContactPage
                    ? "text-white border border-white/40 hover:bg-white/10"
                    : scrolled
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

      {/* ================= MOBILE SIDE DRAWER ================= */}
      {menuOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* DRAWER */}
          <div className="fixed top-0 left-0 h-full w-[60%] max-w-xs bg-[#007bff] z-50 shadow-xl">
            {/* LOGO AREA */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/20">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-[#007bff] shadow">
                  <span className="font-extrabold">{`</>`}</span>
                </div>
                <div className="flex flex-col leading-none text-white">
                  <span className="font-bold tracking-wide">Appsixer</span>
                  <span className="text-[10px] tracking-widest uppercase text-blue-100">
                    Software Solutions
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl text-white"
              >
                ✕
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col px-5 py-6 gap-5 text-white text-base font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
              <Link to="/staffing" onClick={() => setMenuOpen(false)}>Staffing</Link>
              <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
              <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
              <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>

              {/* SUBTLE CTA */}
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
