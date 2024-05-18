import { Logo } from "../assets/icons/logo";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <Logo path="/" />
        </div>
        <div className="footer__middle">
          <div className="footer__middle--about">
            <h4>About</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="footer__middle--reservations">
            <h4>Reservations</h4>
            <p>Request an invoice</p>
            <p>Find a reservation</p>
            <p>Email preferences</p>
          </div>
          <div className="footer__middle--news">
            <h4>News</h4>
            <p>Press room</p>
            <p>New openings</p>
            <p>Newsletter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
