import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import "./CardStyles.css";
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
          className="cardContainer"
          backgroundColor="black"
          // border="solid 1px #d28ff933"
          textColor="black"
          rounded="2xl"
          paddingBottom={5}
          fontFamily="cursive"
          height="30vh"
          minWidth="400px"
        >
            <Box
              spacing={3}
              display="grid"
              position="relative"
              // overflow="hidden"
              gridTemplateColumns="repeat(2,minmax(0,1fr))"
            >
                <Image
                  // height="100%"
                  src={imageSrc}
                  alt={title }
                  rounded="2xl"
                />
                <Box
                  paddingX={4}
                  display="grid"
                  gridColumn="2"
                  position="absolute"
                  top="0"
                  left="0"
                  bottom="0"
                  right="0"
                  // overflow="hidden"
                  // height="40vh"
                >
                    <Heading paddingY={3} size="md" textDecoration={"1px underline"} textUnderlineOffset={"4px"}>{title }</Heading>
                    <Text height="100%" style={{paddingTop:"1px"}} fontFamily="sans-serif" fontWeight="lighter">{ description}</Text>
                    <Text fontFamily="sans-serif"  style={{paddingTop:"20px"}} fontStyle="italic" fontWeight="lighter">{ tools }</Text>
                    {/* <HStack spacing={2}>
                      <Text fontWeight="bold">See More</Text>
                      <FontAwesomeIcon icon={ faArrowRight}/>
                    </HStack> */}
                </Box>
            </Box>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
