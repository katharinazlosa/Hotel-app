import { useEffect, useState } from "react";
import executivesuite from "./../assets/images/EXECUTIVE-SUITE-Home-Slider.jpg";
import suite from "./../assets/images/SUITE-Home-Slider.jpg";
import superiorsuite from "./../assets/images/SUPERIOR-ROOMr.jpg";
import juniorsuite from "./../assets/images/JUNIOR-SUITE-Home-Slider.jpg";
import Button from "./button";

const RoomGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = [executivesuite, suite, superiorsuite, juniorsuite];
  const itemNames: string[] = [
    "Executive Suite",
    "Suite",
    "Junior Suite",
    "Superior Room",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleListItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="roomgallery-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="current-image"
        />
        <div className="image-info">
          <h3>Rooms</h3>
          <h2>A delightful stay</h2>
          <ul className="image-list">
            {itemNames.map((itemName, index) => (
              <li
                key={index}
                className="list-item"
                onClick={() => handleListItemClick(index)}
              >
                {itemName}
              </li>
            ))}
          </ul>
          <Button text="Welcome" path="/rooms" />
        </div>
      </div>
    </>
  );
};

export default RoomGallery;
