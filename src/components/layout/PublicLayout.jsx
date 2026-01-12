import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CookieBanner from "../common/CookieBanner";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <CookieBanner/>
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;

