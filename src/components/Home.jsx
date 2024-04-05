import React from "react";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Java Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on backend applications and building microservices using technologies like
            SpringBoot, Hibernate, Docker and AWS.
          </p>


        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
