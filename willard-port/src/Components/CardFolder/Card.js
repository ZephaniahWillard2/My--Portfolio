import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, tools, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="black"
          border="solid .5px #fad3ff78"
          textColor="black"
          rounded="2xl"
          paddingBottom={5}
          fontFamily="cursive"
          height="300px"
         

        >
          <Box spacing={3}  display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))">
            <Image height="300px" src={imageSrc} alt={title } rounded="3xl"/>
            <Box paddingX={4} display="grid" gridColumn="2">
              <Heading paddingY={3} size="md">{title }</Heading>
              <Text>{ description}</Text>
              <Text>{ tools }</Text>
              <HStack spacing={2}>
                {/* <Text fontWeight="bold">See More</Text> */}
                {/* <FontAwesomeIcon icon={ faArrowRight}/> */}
              </HStack>
            </Box>
          </Box>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
