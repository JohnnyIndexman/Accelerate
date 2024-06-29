import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

function Section2() {
  return (
    <Box
      bg="rgba(249, 249, 249, 1)"
      py={["10px", "20px", "20px"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text
        color="rgba(32, 43, 143, 1)"
        fontSize="16px"
        fontWeight="500"
        mt={["20px", "20px", "50px"]}
        mb={["10px", "10px", "30px"]}
      >
        WHO WE ARE
      </Text>
      <Text
        fontSize={["20px", "20px", "44px"]}
        fontWeight="500"
        mb={["10px", "10px", "30px"]}
      >
        We Make Your Startup A Success Story
      </Text>
      <Text mb={["15px", "15px", "30px"]} fontSize={['13px', '13px', '16px']}>
        {" "}
        SINC Partners has a novel vision of making success available to everyone
        and democratizing the pain point of success. We are a next generation
        <br></br>
        startup studio focus on building and supporting enterprises at scale and
        we help them raise service investments and funds across 3-5 deals from
        as<br></br>
        low as $25k at start to up to $15m before you leave the lab.<br></br>
        We are a Gasus Business, a business built on the foundation of Christian
        values and belief.
      </Text>

      <Button
        bg="rgba(48, 48, 48, 1)"
        color="#fff"
        borderRadius="24px"
        width={["100px", "178px", "178px"]}
        height={["30px", "30px", "49px"]}
        fontSize={["12.5px", "12.5px", "16px"]}
        fontWeight="600"
        mb="30px"
      >
        READ ABOUT US
      </Button>

      <Text fontSize={['15px', '15px', '18px']} fontWeight="400" alignSelf="flex-end">
        ASIN5 is a startup
      </Text>
    </Box>
  );
}

export default Section2;
