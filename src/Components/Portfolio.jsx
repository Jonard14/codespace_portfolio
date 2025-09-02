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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website to showcase projects and skills. Deployed on Vercel for fast, global accessibility.",
    url: "https://jonard-francisco.vercel.app",
  },
  {
    title: "AINA: A Personalized Health Recommendation System",
    description:
      "Deep learning system for height and weight estimation through image processing with personalized health recommendations using LLMs",
    url: "",
  },
  {
    title: "NutriTrack Mobile App",
    description:
      "Comprehensive mobile application for tracking dietary intake, nutritional content, and health parameters like sugar and sodium levels.",
    url: "",
  },
  {
    title: "Jumping Jack",
    description:
      "2D platformer game challenging players to reach the top of a tower with leaderboard functionality for fastest completion times.",
    url: "https://github.com/Jonard14/Jumping-Jack",
  },
  {
    title: "Coin Detection in Education",
    description:
      "Educational tool using computer vision to detect coins, promoting financial literacy through technological learning.",
    url: "https://github.com/Jonard14/Coin-Detection-in-Education",
  },
  {
    title: "Pinoy Feast App",
    description:
      "Mobile showcase of Filipino cuisine from different provinces, featuring food history and interactive browsing capabilities",
    url: "https://github.com/Jonard14/Pinoy-Feast",
  },
  {
    title: "Movie Booking System",
    description:
      "Full-featured web application for movie reservations, seat selection, concessions ordering, and administrative management.",
    url: "https://github.com/Jonard14/Movie-Booking-System",
  },
  /*
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  */
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
