import React from "react";
import { Box, Text, Card, Image } from "@chakra-ui/react";
import { service } from "./Concept";

function Section6() {
  const serve = service;
  const display = serve.map((s) => {
    return (
      <Box
        key={s.id}
        width={["100%", "100%", "30%"]}
        height={["300px", "300px", "420px"]}
        mb='20px'
      >
        <Card width="100%" height="100%" p={["10px", "10px", "20px"]}>
          <Image
            src={s.image}
            alt="hero"
            width="80px"
            height="80px"
            clipPath="circle()"
            mb={["15px", "15px", "20px"]}
          />
          <Text
            fontSize={["14.5px", "14.5px", "20px"]}
            fontWeight="500"
            textAlign="start"
            mb={["15px", "15px", "20px"]}
          >
            {s.head}
          </Text>
          <Text fontSize={["12.5px", "12.5px", "16px"]} textAlign="start">
            {s.text}
          </Text>
        </Card>
      </Box>
    );
  });
  return (
    <Box
      bg="rgba(249, 249, 249, 1)"
      py={["10px", "20px", "20px"]}
      px={["20px", "20px", "50px"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize={["30px", "30px", "56px"]}
        fontWeight="500"
        mt={["15px", "15px", "10px"]}
        mb={["15px", "15px", "40px"]}
      >
        Our Service Incubation Programme
      </Text>
      <Box
        display="flex"
        gap={[""]}
        justifyContent="space-between"
        flexWrap="wrap"
        mb={['20px', '20px', '40px']}
      >
        {display}
      </Box>
    </Box>
  );
}

export default Section6;
