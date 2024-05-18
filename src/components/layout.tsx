import { useEffect, useState } from "react";
import Cuisine from "./cuisine";
import Footer from "./footer";
import Form from "./form";
import Header from "./header";
import Info from "./info";
import RoomGallery from "./roomsgallery";
import Banner from "./banner";

const Layout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHideHeader(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        window.scrollBy({ top: 100, behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className={`container ${hideHeader ? "hide-header" : ""}`}>
        <Header />
        <Banner />
        <Info />
        <RoomGallery />
        <Cuisine />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
