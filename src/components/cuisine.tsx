import fico from "./../assets/images/fico.jpg";
import Button from "./button";

const Cuisine = () => {
  return (
    <>
      <div className="cuisine-container">
        <img src={fico}></img>
        <div className="cuisine-container__text">
          <div className="cuisine-container__text--left">
            <h3>
              To eat figs off the tree is one of the exquisite pleasures of the
              Mediterranean
            </h3>
            <h4> - Elizabeth David</h4>
            <Button text="indulge" path="/ficoaperitivo" />
          </div>
          <div className="cuisine-container__text--right">
            <p>
              Welcome to Fico, a brand-new restaurant, featuring Santorini’s
              Italian culinary influences, local produce, fresh pasta and
              distinctive flavors. Find your spot on our dining patio cozily
              nesting by our pool and let our Executive Chef Fanis Maekantis
              introduce you to a carefully curated, creative and yet traditional
              menu that will delight your pallet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuisine;
