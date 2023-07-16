import React from "react";
import DetailCard from "./DetailCard";
import { GrBundle, GrDeliver } from "react-icons/gr";
import { AiFillCalendar } from "react-icons/ai";
import { ImFontSize } from "react-icons/im";

const LandingPageDetailSection = () => {
  return (
    <div className="detailed-outer">
      <div className="detail-container">
        <div className="section-column">
          <div className="two-column-container">
            <h2>Bundle Subscription: How It Works</h2>
            <p className="detail-container-p">
              Simple as 1-2-3: Explore, Choose, Delight - Unwrap Your Perfect
              Candy & Snack Bundles!
            </p>
          </div>

          <div className="card-container">
            <DetailCard
              icon={<GrBundle />}
              name="Choose Bundle"
              description="Choose between a variety of snack bundles."
            ></DetailCard>
            <DetailCard
              icon={<ImFontSize />}
              name="Select Size"
              description="Choose sizing for selected bundle"
            ></DetailCard>
            <DetailCard
              icon={<AiFillCalendar />}
              name="Select Subscription"
              description="Select between a monthly or annual subscription"
            ></DetailCard>
            <DetailCard
              icon={<GrDeliver />}
              name="Get Bundle"
              description="Enjoy the contents of your bundle!"
            ></DetailCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageDetailSection;
