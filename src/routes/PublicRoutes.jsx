import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import Home from "../pages/Home/Home";
import Company from "../pages/company/Company";
import Staffing from "../pages/staffing/Staffing";
import Contact from "../pages/ContactUs/Contact";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/staffing" element={<Staffing/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;

