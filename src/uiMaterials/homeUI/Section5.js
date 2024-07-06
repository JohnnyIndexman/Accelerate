import { Box, Text, Card, Image } from "@chakra-ui/react";
import React from "react";
import { concept } from "./Concept";

function Section5() {
  const concepts = concept;
  const display = concepts.map((c) => {
    return (
      <Box
        key={c.id}
        width={["100%", "50%", "20%"]}
        height={["240px", "240px", "400px"]}
        mb={["20px", "20px", "0"]}
      >
        <Card
          height="100%"
          width="100%"
          p={["20px", "20px", "20px"]}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            textAlign="center"
            fontSize={["13px", "13px", "15px"]}
            fontWeight="500"
            mb="15px"
          >
            {c.title}
          </Text>
          <Image
            src={c.image}
            alt="hero"
            width={["50px", "50px", "100px"]}
            height={["50px", "50px", "100px"]}
            clipPath="circle()"
            mb="20px"
          />
          <Text fontSize={["11.5px", "11.5px", "14px"]}>{c.text}</Text>
        </Card>
      </Box>
    );
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={["20px", "20px", "50px"]}
      py={["30px", "30px", "80px"]}
    >
      <Text fontSize={["25px", "25px", "56px"]} fontWeight="500" mb="15px">
        Our 5 Concept Innovations
      </Text>
      <Text
        mb={["30px", "30px", "60px"]}
        fontSize={["12.5px", "12.5px", "16px"]}
      >
        We have five <span>&#9316;</span> proprietary concept innovations that
        will support the startup ecosystem, support solution-providers/{" "}
        <br></br>entrepreneurs and ultimately help democratize success;
      </Text>

      <Box display="flex" alignItems="center" flexWrap="wrap">
        {display}
      </Box>
    </Box>
  );
}

export default Section5;
