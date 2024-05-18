import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Rooms from "./components/rooms";
import Contact from "./components/contact";
import Heritage from "./components/heritage";
import FicoAperitivo from "./components/ficoaperitivo";
import Booking from "./components/booking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/ficoaperitivo" element={<FicoAperitivo />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
