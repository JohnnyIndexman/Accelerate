import { Box, Text, Card } from "@chakra-ui/react";
import React from "react";
import { whatWeBring } from "./Concept";

function Section7() {
  const what = whatWeBring;
  const display = what.map((w) => {
    return (
      <Box key={w.id} width={["47%", "47%", "23%"]} mb='20px'>
        <Card
          width="100%"
          height={["220px", "220px", "430px"]}
          p="20px"
          display="flex"
          flexDirection="column"
          bg="rgba(249, 249, 249, 1)"
        >
          <Text
            textAlign="start"
            fontWeight="400"
            fontSize={["14px", "14px", "20px"]}
            mb={["10px", "10px", "10px"]}
          >
            {w.head}
          </Text>
          <Text
            textAlign="start"
            fontSize={["15px", "15px", "24px"]}
            fontWeight="400"
            mb={["10px", "10px", "10px"]}
          >
            {w.title}
          </Text>
          <Text
            textAlign="start"
            fontSize={["12px", "12px", "15px"]}
            fontWeight="400"
            mb={["10px", "10px", "10px"]}
          >
            {w.body}
          </Text>
        </Card>
      </Box>
    );
  });
  return (
    <Box
      py={["10px", "20px", "20px"]}
      px={["20px", "20px", "50px"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontWeight="500"
        fontSize={["30px", "30px", "56px"]}
        mb="20px"
        mt={["15px", "15px", "30px"]}
      >
        What We Bring
      </Text>
      <Text fontSize={["13px", "13px", "17px"]} mb={["20px", "20px", "50px"]}>
        We empower visioners to build the future with us and we provide
      </Text>

      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        mb={["20px", "20px", "40px"]}
      >
        {display}
      </Box>
    </Box>
  );
}

export default Section7;
