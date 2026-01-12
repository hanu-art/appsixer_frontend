import { Link, useNavigate } from "react-router-dom";
import { footerData } from "./footer.data";

const Footer = () => {
  const { links, office, meta } = footerData;
  const navigate = useNavigate();

  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">
        
        {/* LEFT */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            Legal
          </h4>

          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-sm text-gray-600 hover:text-[#007bff] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/appsixer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-[#1877F2] transition-colors"
              >
                <FacebookIcon />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/appsixer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <TwitterIcon />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/appsixer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-[#0077B5] transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            {office.country} Office
          </h4>

          <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
            {office.address}
          </p>

          <p className="mt-4 text-sm">
            <a
              href={`mailto:${office.email}`}
              className="text-[#007bff] hover:underline"
            >
              {office.email}
            </a>
          </p>

          <p className="mt-1 text-sm text-gray-600">
            {office.phone}
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            Need Help?
          </h4>

          <p className="text-sm text-gray-600 mb-5 max-w-xs">
            Feel free to talk to our experts. We're here to help you.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="text-sm font-medium text-[#007bff] hover:underline"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            {meta.copyright}
          </p>

          <div className="flex gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Created by{" "}
            <span className="font-medium text-gray-700">
              {meta.createdBy}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



const iconClass = "w-5 h-5";

const FacebookIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
