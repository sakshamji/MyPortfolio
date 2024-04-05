import React from "react";

import java from "../assets/java.svg";
import springboot from "../assets/spring-icon.svg";
import hibernate from "../assets/hibernate.svg";
import postgresql from "../assets/postgresql.svg";
import mongodb from "../assets/mongodb-icon.svg";
import docker from "../assets/docker-icon.svg";
import github from "../assets/github.png";
import aws from "../assets/aws.svg";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: hibernate,
      title: "Hibernate",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: postgresql,
      title: "Postgres",
      style: "shadow-blue-100",
    },
    {
      id: 5,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: docker,
      title: "Docker",
      style: "shadow-white",
    },
    {
      id: 7,
      src: aws,
      title: "AWS",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>

        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
