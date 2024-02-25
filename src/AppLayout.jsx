import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React, { useContext } from "react";
import { languageContext } from "./context/language";
import Footer from "./components/footer";

const AppLayout = () => {
  const { lang, setLang } = useContext(languageContext);

  return (
    <div dir={`${lang == "ar" ? "rtl" : "ltr"}`}>
      <Header />
      <div  >
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default AppLayout;
