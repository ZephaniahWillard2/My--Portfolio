import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenF/FullScreenSection";
import Card from "../CardFolder/Card";
import "./ProjectsStyles.css";

//ORIGINAL CODE

const projects = [
  {
    title: "Dynamic Art Gallery",
    description:
      "A dynamic web app for viewing and storing online artwork. Browse the art gallery, view individual art pieces, and add art pieces to your collection.",
    tools: "JavaScript | React.js | Routing | CSS",
    getImageSrc: () => require("../../Images/ArtGallerySS.png"),

  },
  {
    title: "Little Lemon Capstone",
    description:
      "Coursera capstone project, consisting of Little Lemon's website and focused on providing an online reservation page.",
      tools: "JavaScript | React.js | API | Routing | CSS" ,
      getImageSrc: () => require("../../Images/LLCapstoneTallSS.png"),
  },
  {
    title: "Furniture Store",
    description:
      "A furniture store website to add and catalog furniture items, their type, and their prices.",
      tools: "JavaScript | React.js | CSS",
      getImageSrc: () => require("../../Images/FurnitureStoreSS.png"),
  },
  {
    title: "DJ Days",
    description:
      "A dynamic web application that allows users to browse through a list of albums, add new albums to their collection, and select any album to be played.",
      tools: "JavaScript | CSS | Servers | HTML",
      getImageSrc: () => require("../../Images/DjDSSTwo.png"),
  },
];

const ProjectsSection = () => {
  return (
    <Box className="projectContainer">
       <Heading
          as="h1"
          id="projects-section"
          borderBottom="solid thin #d28ff933"
          // textAlign="center"
          height= "200px"
          fontSize= "75px"
          paddingTop= "11vh"
          fontFamily=""
          textAlign="left"
          marginLeft="51px"
          >
        Projects
      </Heading>
    <FullScreenSection
      // backgroundColor="#14532d"
      // isDarkBackground
      p={0}
      spacing={14}
      marginTop="10vh"
    >
     
      <Box
        display="grid"
        // gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="70px"
        // gridGap={52}
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









//ALTERNATE CODE: Name 1 column, content 2 column

// import React from "react";
// import { Box, Heading } from "@chakra-ui/react";
// import FullScreenSection from "../FullScreenF/FullScreenSection";
// import Card from "../CardFolder/Card";
// import "./ProjectsStyles.css";

// const projects = [
//   {
//     title: "Dynamic Art Gallery",
//     description:
//       "A dynamic web app for viewing and storing online artwork. Browse the art gallery, view individual art pieces, and add art pieces to your collection.",
//     tools: "JavaScript | React.js | Routing | CSS",
//   },
//   {
//     title: "Little Lemon Capstone",
//     description:
//       "Coursera capstone project, consisting of Little Lemon's website and focused on providing an online reservation page.",
//     tools: "JavaScript | React.js | API | Routing | CSS",
//   },
//   {
//     title: "Furniture Store",
//     description:
//       "A furniture store website to add and catalog furniture items, their type, and their prices.",
//     tools: "JavaScript | React.js | CSS",
//   },
//   {
//     title: "DJ Days",
//     description:
//       "A dynamic web application that allows users to browse through a list of albums, add new albums to their collection, and select any album to be played.",
//     tools: "JavaScript | CSS | Servers | HTML",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <Box className="projectContainer">
//       <Heading
//         as="h1"
//         id="projects-section"
//         borderBottom="solid thin #d28ff933"
//         height="200px"
//         fontSize="75px"
//         paddingTop="11vh"
//         fontFamily=""
//         textAlign="left"
//         marginLeft="51px"
//       >
//         Projects
//       </Heading>
//       <FullScreenSection p={0} spacing={14}>
//         {/* Flexbox container for project cards */}
//         <Box
//           display="flex"
//           flexDirection="column" // Stack the cards vertically
//           gap={6} // Add spacing between cards
//         >
//           {projects.map((project) => (
//             <Card
//               key={project.title}
//               title={project.title}
//               description={project.description}
//               tools={project.tools}
//             />
//           ))}
//         </Box>
//       </FullScreenSection>
//     </Box>
//   );
// };

// export default ProjectsSection;

