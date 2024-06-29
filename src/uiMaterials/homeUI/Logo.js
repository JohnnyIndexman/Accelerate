import { Box, Text, Image, Link } from "@chakra-ui/react";
import React from "react";
import { logo } from "./HomeComponents";

function Logo() {
  const logos = logo;
  const display = logos.map((logo) => {
    return (
      <Box key={logo.id} mb={"30px"} width={["20%", "20%", "12.5%"]}>
        <Image src={logo.image} alt="logo" />
      </Box>
    );
  });
  return (
    <Box
      bg="rgba(244, 244, 244, 1)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={["20px", "20px", "50px"]}
      py={["30px", "30px", "80px"]}
    >
      <Text fontSize={["30px", "30px", "60px"]} fontWeight="500" mb="10px">
        Our Startup Portfolio
      </Text>
      <Text fontSize={["14px", "14px", "16px"]} fontWeight="400" mb="50px">
        Some of our 2023 Service Incubator Portfolio Companies
      </Text>
      <Box display="flex" flexWrap="wrap">
        {display}
      </Box>
      <Box display='flex' align='center' gap='10px'>
        <Text textDecoration="underline">
          <Link fontWeight="600">View all companies</Link>
        </Text>
        <Image src="/images/down-right 1.png" alt="arrow" />
      </Box>
    </Box>
  );
}

export default Logo;
