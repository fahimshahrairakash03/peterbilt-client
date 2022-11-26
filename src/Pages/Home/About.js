import React from "react";
import truck5 from "../../assets/bannerImg/truck5.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src={truck5}
            className="lg:w-1/2 sm:w-3/4 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-center text-red-900">
              About Us!
            </h1>
            <p className="py-6  font-medium ">
              For 80 years, Peterbilt has supplied the used commercial vehicle
              market with the industry’s most rugged, reliable and efficient
              products. Based in use, Peterbilt brings on highway, vocational
              and medium duty trucks that provide value to their owners and
              pride to their drivers. These vehicles are supported through
              industry-leading aftermarket programs and a dedicated network of
              independent market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
