import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-neutral-900 text-white
        px-6 py-4
        rounded-xl shadow-2xl
        flex flex-col sm:flex-row items-center gap-4
        z-50
        animate-fade-in
      "
      role="dialog"
      aria-live="polite"
    >
      <p className="text-sm text-neutral-300 max-w-md">
        We use essential cookies to ensure proper website functionality and improve your experience.
      </p>

      <button
        onClick={acceptCookies}
        aria-label="Accept cookies"
        className="
          bg-white text-black
          px-4 py-2
          rounded-lg text-sm font-medium
          hover:bg-neutral-200 transition
          whitespace-nowrap
        "
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
