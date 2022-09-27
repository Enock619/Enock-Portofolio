import React from "react";
//Import images
import weather from "./Img/Weather.png";
import magena from "./Img/Magena.png";

const ProjectState = () => {
  return [
    {
      title: "Magena Taxi",
      img: magena,
      link: "https://magenataxi.netlify.app",
    },
    {
      title: "Weather App",
      img: weather,
      link: "https://dailyforecast.netlify.app",
    },
  ];
};

export default ProjectState;
