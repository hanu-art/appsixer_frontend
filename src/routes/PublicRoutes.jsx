import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PublicLayout from "../components/layout/PublicLayout";
import PageLoader from "../components/layout/loader/PageLoader";

// EAGER (landing page)
import Home from "../pages/Home/Home";

// LAZY (secondary pages)
const Company = lazy(() => import("../pages/company/Company"));
const Staffing = lazy(() => import("../pages/staffing/Staffing"));
const Contact = lazy(() => import("../pages/ContactUs/Contact"));
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);
const TermsConditions = lazy(() =>
  import("../pages/TermsConditions/TermsConditions")
);

const PublicRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PublicRoutes;
