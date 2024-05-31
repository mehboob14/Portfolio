/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wom.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Language Translator  🎉",
    description:
      "Seamlessly translate text across 50 languages with this JavaScript-powered application. This experience enabled me to explore Node.js, Express.js, and EJS, while leveraging Axios for efficient API communication. ",
    url: "https://github.com/mehboob14/Language-Translator",
  },
  {
    title: "JSON-Weather App",
    description:
      "A simple and basic web application designed to fetch weather data based on user-specified locations.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Candy Crush",
    description:
      "Enjoy a simple and fun Candy Crush game built using JavaScript, with a touch of CSS and HTML. Match colorful candies to crush them and score points in this addictive game! ",
    url: "https://github.com/mehboob14/Candy-Crush",
  },
  {
    title: "Chat App",
    description:
      "A Fullstack Chat App built using Node.js, Express.js, Socket.io, and for fronted uses React. Users can join rooms, share files with real time communication",
    url: "https://github.com/mehboob14/Chat-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
