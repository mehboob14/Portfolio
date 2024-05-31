/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here,  values are passed a properties to the
 * components that need that inforandmation.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mehboob Arshad",
  title: "UserInterface Designer & Software Developer",
  email: "mehboob14@proton.me",
  gitHub: "https://github.com/mehboob14",
  instagram: "https://instagram.com/mehboob-arshad",
  linkedIn: "https://linkdin.com/in/mehboob-arshad",
  medium: "",
  twitter: "BubbTech",
  youTube: "BubbTech",
};

const primaryColor = "#3E567E";
const secondaryColor = "#D1F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
