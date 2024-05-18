import bannerimg from "./../assets/images/banner-img.jpg";
import Button from "./button";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <img src={bannerimg} alt="Banner image"></img>
        <div className="text-overlay">
          <h2>Place to be...</h2>
          <h1>Meroviglia</h1>
          <Button
            text="Discover more"
            position="bannerposition"
            path="/rooms"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
