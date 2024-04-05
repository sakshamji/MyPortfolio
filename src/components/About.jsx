import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          🚀 Crafting robust and scalable solutions with a focus on Java backend development.
           Leveraging my expertise in Java EE and Spring Framework, I thrive on building high-performance applications that seamlessly integrate with various systems.
            Specializing in database management, I excel in working with SQL and NoSQL databases, ensuring efficient data storage and retrieval.
             From optimizing database queries to implementing data security measures, I am committed to delivering solutions that prioritize both performance and reliability.
        </p>

        <br />

        <p className="text-xl">
          🌐 Proficient in RESTful API development, I design and implement APIs that facilitate smooth communication between different components of a system.
           My hands-on experience with technologies like Spring Boot ensures the creation of microservices that are not only efficient but also easy to maintain.
            Comfortable in the world of DevOps, I utilize tools like Docker and Kubernetes to deploy and manage applications, fostering a continuous integration and continuous deployment (CI/CD) environment.
             Constantly staying updated with the latest industry trends, I am eager to implement cutting-edge technologies that enhance the overall development process.
              Whether it's implementing reactive programming with Spring WebFlux or incorporating cloud solutions like AWS or Azure, I am always up for a challenge.
              Let's collaborate and turn your ideas into seamlessly functioning, innovative applications! 💻✨
        </p>
      </div>
    </div>
  );
};

export default About;
