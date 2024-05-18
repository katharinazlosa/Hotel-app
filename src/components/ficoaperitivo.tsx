import Footer from "./footer";
import Header from "./header";
import fico from "./../assets/images/fico.jpg";

const FicoAperitivo = () => {
  return (
    <>
      <Header />
      <div className="ficoaperitivo-container">
        <img src={fico}></img>
        <h1>Fico Aperitivo</h1>
        <p>
          Welcome to Fico Aperitivo, where Italian tradition meets modern flair.
          Nestled in the heart of the city, our restaurant offers an inviting
          ambiance and a culinary experience that celebrates the vibrant flavors
          of Italy. From handcrafted cocktails to artisanal small plates, every
          detail is crafted with care to ensure an unforgettable dining
          experience.
        </p>
        <h3>Culinary</h3>
        <p>
          At Fico Aperitivo, we pride ourselves on serving authentic Italian
          cuisine with a contemporary twist. Our menu features a curated
          selection of antipasti, bruschette, and cicchetti, expertly crafted by
          our talented chefs using the finest locally sourced ingredients. Pair
          your meal with a glass of fine wine or a signature cocktail from our
          extensive beverage menu for the perfect dining experience.
        </p>
        <h3>Ambiance</h3>
        <p>
          Step into Fico Aperitivo and immerse yourself in the cozy ambiance of
          our stylish dining space. Whether you're enjoying a leisurely meal
          with friends or savoring a romantic dinner for two, our restaurant
          provides the perfect setting for any occasion. Relax and unwind as you
          indulge in delicious food and delightful drinks, surrounded by warm
          hospitality and Italian charm.
        </p>
        <h3>Signature dishes</h3>
        <p>
          Discover the flavors of Italy with our signature dishes at Fico
          Aperitivo. From creamy burrata bruschetta to crispy arancini and
          savory prosciutto crostini, each dish is a culinary masterpiece that
          reflects the rich culinary heritage of Italy. Don't miss our selection
          of house-made pasta and decadent desserts, designed to tantalize your
          taste buds and leave you craving for more.
        </p>
        <h3>Aperitivo Hour</h3>
        <p>
          Join us for Aperitivo Hour at Fico Aperitivo and experience the art of
          Italian happy hour. Sip on handcrafted cocktails and enjoy
          complimentary small bites as you unwind after a long day. Whether
          you're looking to socialize with friends or simply relax and enjoy the
          ambiance, our Aperitivo Hour is the perfect way to start your evening
          in style.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FicoAperitivo;
