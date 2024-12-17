"use client";
import React, { useState, useRef } from "react";
import ProjectCard from '../ProjectCard/ProjectCard'
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register. ",
      image: "/images/projects/1.png",
      gitUrl: "https://github.com/AhmedAbbas88/FreshCart",
      previewUrl: "https://ahmedabbas88.github.io/FreshCart/",
    },
    {
      id: 2,
      title: "Google Gemini",
      description: "Is an artificial intelligence chatbot tool to simulate human conversations using natural language processing and machine learning. In addition to supplementing Google Search, Gemini can be integrated into websites, messaging platforms or applications to provide realistic.",
      image: "/images/projects/2.png",
      gitUrl: "https://github.com/AhmedAbbas88/Gemini",
      previewUrl: "https://ahmedabbas88.github.io/Gemini/",
    },
    {
      id: 3,
      title: "Next.js Portfolio Website",
      description: "A portfolio website is a unique platform that allows me to showcase my work and tell others about myself. It’s like an online business card or CV that can help me find partnerships, show off my work, and even land my first job.",
      image: "/images/projects/3.png",
      gitUrl: "https://github.com/AhmedAbbas88/portfolio",
      previewUrl: "/",
    },
    
  ];
  

  const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref} id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    
        
    
  )
}

export default Projects