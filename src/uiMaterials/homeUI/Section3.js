import React from "react";
import { Box, Text, Image, Card } from "@chakra-ui/react";
import {sections} from "./HomeComponents";

function Section3() {
  const components = sections;
  const displayComp = components.map((c) => {
    return (
      <Box
        key={c.id}
        width={["100%", "48%", "18%"]}
        mb={['10px', '10px', '0']}
        height={["auto", "auto", "300px"]}
      >
        <Card p="10px" bg="rgba(249, 249, 249, 1)" mb={['20px', '20px', '0']} height='auto'>
          <Text
            alignSelf="flex-start"
            mb="20px"
            fontSize={["15px", "15px", "20px"]}
            fontWeight='400' 
          >
            {c.number}
          </Text>
          <Text textAlign="start" mb="20px"
          fontWeight='400' fontSize={["15px", "15px", "18px"]}>
            {c.title}
          </Text>
          <Image
            src={c.image}
            alt="hero-image"
            width={["auto","auto","fit-content"]}
            height={["200px","200px","auto"]}
          />
        </Card>
      </Box>
    );
  });
  return (
    <Box px={["0px", "0px", "50px"]} mb={["0px", "0px", "25px"]}>
      <Text
        fontSize={["25px", "25px", "56px"]}
        fontWeight="500"
        mt={["30px", "30px", "50px"]}
        mb={["15px", "15px", "25px"]}
      >
        Our 5 Area of Focus
      </Text>
      <Text mb={["15px", "15px", "50px"]} fontSize={["14.5px", "14.5px", "17px"]}>
        In our quest to help make success available to everyone, we have initial
        strategic <br></br> direction to focus on these five (5) key areas at
        the lab
      </Text>

      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        justifyContent={['space-around','space-around',"space-between"]}
        gap={['0px', '0px', '0']}
        height='auto'
      >
        {displayComp}
      </Box>
    </Box>
  );
 }

export default Section3;
