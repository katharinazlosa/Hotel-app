import Footer from "./footer";
import Header from "./header";
import executivesuite from "./../assets/images/EXECUTIVE-SUITE-Home-Slider.jpg";
import suite from "./../assets/images/SUITE-Home-Slider.jpg";
import superiorsuite from "./../assets/images/SUPERIOR-ROOMr.jpg";
import juniorsuite from "./../assets/images/JUNIOR-SUITE-Home-Slider.jpg";
import Button from "./button";

const Rooms = () => {
  return (
    <>
      <Header />
      <div className="rooms-container">
        <h1>Rooms & Suites</h1>
        <p>
          Our rooms offer a comfortable and inviting retreat for travelers
          seeking relaxation and convenience during their stay. Each room is
          thoughtfully designed with modern amenities and stylish decor to
          ensure a pleasant experience for our guests.
        </p>
        <div className="rooms">
          <img src={executivesuite} className="executivesuite" />
          <div>
            <h1>Executive Suite</h1>
            <p>
              Our luxurious Executive Suite offers spacious accommodation with
              elegant furnishings and modern amenities. Perfect for discerning
              travelers seeking comfort and style during their stay.
            </p>
            <ul>
              <h3>Features</h3>
              <li>King-size bed</li>
              <li>Separate living area</li>
              <li>Executive work desk</li>
              <li>Marble bathroom with spa bathtub</li>
              <li>Complimentary Wi-Fi</li>
              <li>Flat-screen TV with premium channels</li>
            </ul>
            <h4>Price: Starting from $300 per night</h4>
            <Button text="Book now" position="roomsposition" />
          </div>
        </div>
        <div className="rooms">
          <img src={suite} className="suite" />
          <div>
            <h1>Suite</h1>
            <p>
              Our Suite provides a blend of sophistication and comfort, ideal
              for travelers looking for an enhanced experience. Enjoy ample
              space and premium amenities for a relaxing stay.
            </p>
            <ul>
              <h3>Features</h3>
              <li>Queen-size bed</li>
              <li>Cozy seating area</li>
              <li>Work desk with ergonomic chair</li>
              <li>En-suite bathroom with walk-in shower</li>
              <li>High-speed internet access</li>
              <li>In-room coffee maker</li>
            </ul>
            <h4>Price: Starting from $250 per night</h4>
            <Button text="Book now" position="roomsposition" />
          </div>
        </div>
        <div className="rooms">
          <img src={juniorsuite} className="juniorsuite" />
          <div>
            <h1>Junior Suite</h1>
            <p>
              Our Junior Suite offers a stylish retreat for solo travelers or
              couples. Experience modern comfort and convenience in a
              well-appointed space designed for relaxation.
            </p>
            <ul>
              <h3>Features</h3>
              <li>Full-size bed</li>
              <li>Lounge area with sofa</li>
              <li>Compact work desk</li>
              <li>Sleek bathroom with rain shower</li>
              <li>Free Wi-Fi access</li>
              <li>Mini-refrigerator and microwave</li>
            </ul>
            <h4>Price: Starting from $200 per night</h4>
            <Button text="Book now" position="roomsposition" />
          </div>
        </div>
        <div className="rooms">
          <img src={superiorsuite} className="superiorsuite" />
          <div>
            <h1>Superior Room</h1>
            <p>
              Our Superior Room is designed for travelers seeking quality
              accommodation at an affordable price. Enjoy a comfortable stay
              with essential amenities and thoughtful touches.
            </p>
            <ul>
              <h3>Features</h3>
              <li>Twin beds or one queen-size bed</li>
              <li>Cozy seating area</li>
              <li>Writing desk</li>
              <li>Private bathroom with bathtub</li>
              <li>Complimentary internet access</li>
              <li>Flat-screen TV with cable channels</li>
            </ul>
            <h4>Price: Starting from $150 per night</h4>
            <Button text="Book now" position="roomsposition" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
