import React from "react";

const ExclusiveOffers = () => {
  return (
    <div>
      <div>
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories. "
        />
        <button>
          View All offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:transition-x-1 transition-all"
          />
        </button>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
