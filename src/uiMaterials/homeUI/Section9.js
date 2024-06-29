import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

function Section9() {
  const style = {
    backgroundImage: "url(/images/checkers.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <Box
      py={["10px", "20px", "30px"]}
      px={["20px", "20px", "50px"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={style}
    >
      <Box
        width="80%"
        boxSizing="border-box"
        border="2px solid linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.77))"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius={["15px", "15px", "30px"]}
        height={["250px", "250px", "305px"]}
        bg="linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.77))"
      >
        <Text
          textAlign="center"
          mb={["20px", "20px", "40px"]}
          mt="20px"
          fontWeight="600"
          fontSize={["15px", "15px", "24px"]}
        >
          We are always on the look out for innovative individuals and corporate
          <br></br>
          institution who buys into our vision of making success available to
          <br></br>
          everyone with a strategic mission to democratize pain points for
          <br></br>
          entrepreneurs
        </Text>
        <Button
          bg="rgba(31, 102, 171, 1)"
          color="#fff"
          borderRadius="24px"
          height={["30px", "30px", "49px"]}
          fontSize={["12.5px", "12.5px", "16px"]}
          fontWeight="600"
          mb={["30px", "30px", "50px"]}
          border="1px solid #fff"
        >
          Apply to SIP 1.0
        </Button>
      </Box>
    </Box>
  );
}

export default Section9;
