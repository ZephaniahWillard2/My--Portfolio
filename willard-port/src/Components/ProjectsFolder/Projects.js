import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenF/FullScreenSection";
import Card from "../CardFolder/Card";
import "./ProjectsStyles.css";


const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    tools: "JavaScript, React.js",
    getImageSrc: () => require("../../Images/MyLogo.png"),

  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      tools: "JavaScript, React.js",
      getImageSrc: () => require("../../Images/MyLogo.png"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      tools: "JavaScript, React.js",
      getImageSrc: () => require("../../Images/MyLogo.png"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      tools: "JavaScript, React.js",
      getImageSrc: () => require("../../Images/Greek.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <Box className="projectContainer">
       <Heading
          as="h1"
          id="projects-section"
          borderBottom="solid thin #d28ff9"
          textAlign="center"
          height= "200px"
          fontSize= "75px"
          paddingTop= "81.5px"
          fontFamily=""
          >
        Projects
      </Heading>
    <FullScreenSection
      // backgroundColor="#14532d"
      // isDarkBackground
      p={8}
      // alignItems="flex-start"
      spacing={8}
    >
     
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            tools={project.tools}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
    </Box>
  );
};

export default ProjectsSection;


















// import React from 'react';
// import './ProjectsStyles.css';

// const Projects = () =>{
//     return(
//         <div>Projects
//         </div>
//     )
// };

// export default Projects;