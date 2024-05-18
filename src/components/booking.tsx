import Header from "./header";
import Footer from "./footer";
import RoomBooking from "./roombooking";

const Booking = () => {
  return (
    <>
      <Header />
      <div className="booking-container">
        <RoomBooking url="https://calendly.com/stjepanovickatharina/room-booking" />
      </div>

      <Footer />
    </>
  );
};

export default Booking;
