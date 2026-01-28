import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CookieBanner from "../common/CookieBanner";
import ChatTrigger from "../../pages/userChat/ChatTrigger";
const PublicLayout = () => {
  return (
    <>
      <Header />
      <CookieBanner/>
      <Outlet />
      <ChatTrigger/>
      <Footer />
    </>
  );
};

export default PublicLayout;

