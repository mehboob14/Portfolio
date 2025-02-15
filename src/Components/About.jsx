/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**

 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/deso.jpg";
const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Aspiring Full Stack Developer, Passionate about building robust and efficient server-side solutions. ";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "FullStack developer",
  "User experience",
  "Node.js Developer",
  "Machine learning",
  "Mobile user interfaces",
  "User Interface",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Aspiring Full Stack Developer, currently pursuing Beachlor's Degree in Infromation Technology. My ambition encompasses forging great user experience with expertize in user centerd Design.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
