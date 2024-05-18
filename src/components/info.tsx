import heritage from "./../assets/images/heritage.jpg";
import Button from "./button";

const Info = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-container__left">
          <div className="info-container__left--text">
            <h3>Our Heritage</h3>
            <h2>EMBRACING AND PRESERVING THE PAST</h2>
            <p>
              All the aging mansions of Santorini have some beautiful stories to
              tell... stories that go centuries back in the making and told from
              one generation to another, making certain the cultural heritage of
              each family lives on.
            </p>
            <Button text="more about us" path="/heritage" />
          </div>
        </div>
        <div className="info-container__right">
          <img src={heritage}></img>
        </div>
      </div>
    </>
  );
};

export default Info;
