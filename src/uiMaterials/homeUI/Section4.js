import React from "react";
import { Box, Text, Link, Image, Card } from "@chakra-ui/react";
import { section4 } from "./HomeComponents";

function Section4() {
  const component = section4;
  const display = component.map((c) => {
    return (
      <Box key={c.id} width={["100%", "49%", "30%"]} mb={['20px', '20px', '0']}>
        <Card p="10px" bg="rgba(249, 249, 249, 1)"
        height={['220px', '220px', '228px']}>
          <Image
            src={c.image}
            alt="hexagon"
            width="40px"
            height="40px"
            alignSelf="flex-start"
            mb="20px"
          />
          <Text
            textAlign="start"
            mb={["10px", "10px", "20px"]}
            fontSize={["12.5px", "12.5px", "17px"]}
          >
            {c.text}
          </Text>
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
      py={["20px", "20px", "80px"]}
    >
      <Text fontSize={["30px", "30px", "56px"]} fontWeight="500" mb="10px">
        Our Service Incubation Model
      </Text>
      <Text
        textAlign="center"
        fontSize={["14.5px", "14.5px", "17px"]}
        fontWeight="400px"
        mb="30px"
      >
        The Service Incubation model is an alternate funding model for startup
        that allows professionals to offer their services to <br></br>startups
        in return for a minute equity (usually between 0.5% to 1.5%) in the
        startup. As a service incubator, you will see<br></br> your share grow
        as much as 1000% in 12 – 24 months as been first to invest.
      </Text>
      <Box display="flex" alignItems="center" gap="15px" mb="40px">
        <Text textDecoration="underline">
          <Link fontWeight="600">Become A Service Incubator</Link>
        </Text>
        <Image src="/images/down-right 1.png" alt="arrow" />
      </Box>

      <Box>
        <Text fontWeight="500" fontSize={["20px", "20px", "32px"]} mb="50px">
          Our Service Incubation Hypothesis
        </Text>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {display}
        </Box>
      </Box>
    </Box>
  );
}

export default Section4;
