import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";
import "./CardStyles.css";

const Card = ({ title, description, tools }) => {
  return (
    <Box
      className="cardContainer"
      backgroundColor="black"
      textColor="white"
      rounded="2xl"
      padding={5}
      fontFamily="cursive"
      display="grid"
      gridTemplateColumns="4fr 3fr" // Narrow column for title, wider column for content
      gap={16}
      alignItems="start"
    >
      {/* Title Column */}
      <Box
        gridColumn="1"
        display="flex"
        alignItems="center" // Center the title vertically within the first column
        height="50px" // Set a fixed height for the title
      >
        <Heading
          size="md"
          // textDecoration="underline"
          // textUnderlineOffset="4px"
          textAlign="left" // Align the title text to the left
        >
          {title}
        </Heading>
      </Box>

      {/* Content Column (Description + Tools) */}
      <Box
        gridColumn="2"
        display="flex"
        flexDirection="column" // Stack description and tools vertically
        justifyContent="flex-start" // Align content to the top of the column
        textAlign="left"
        border="0 solid #e5e7eb"
        // backgroundColor="#d28ff933"
        backgroundColor="#d28ff91d"
        padding="15px"
      >
        <Text fontFamily="sans-serif" fontWeight="lighter">
          {description}
        </Text>
        <Text
          fontFamily="sans-serif"
          paddingTop="20px"
          fontStyle="italic"
          fontWeight="lighter"
        >
          {tools}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;










//ORIGINAL CODE

// const Card = ({ title, description, tools, imageSrc }) => {
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
//   return (
//     <div>
//       <HStack spacing={3}>
//         <Box
//           className="cardContainer"
//           backgroundColor="black"
//           // border="solid 1px #d28ff933"
//           textColor="black"
//           rounded="2xl"
//           paddingBottom={5}
//           fontFamily="cursive"
//           height="30vh"
//           minWidth="400px"
//         >
//             <Box
//               spacing={3}
//               display="grid"
//               position="relative"
//               // overflow="hidden"
//               gridTemplateColumns="repeat(2,minmax(0,1fr))"
//             >
//                 <Image
//                   // height="100%"
//                   src={imageSrc}
//                   alt={title }
//                   rounded="2xl"
//                 />
//                 <Box
//                   paddingX={4}
//                   display="grid"
//                   gridColumn="2"
//                   position="absolute"
//                   top="0"
//                   left="0"
//                   bottom="0"
//                   right="0"
//                   // overflow="hidden"
//                   // height="40vh"
//                 >
//                     <Heading paddingY={3} size="md" textDecoration={"1px underline"} textUnderlineOffset={"4px"}>{title }</Heading>
//                     <Text height="100%" fontFamily="sans-serif" fontWeight="lighter">{ description}</Text>
//                     <Text fontFamily="sans-serif"  style={{paddingTop:"20px"}} fontStyle="italic" fontWeight="lighter">{ tools }</Text>
//                     {/* <HStack spacing={2}>
//                       <Text fontWeight="bold">See More</Text>
//                       <FontAwesomeIcon icon={ faArrowRight}/>
//                     </HStack> */}
//                 </Box>
//             </Box>
//         </Box>
//       </HStack>
//     </div>
//   );
// };

// export default Card;
