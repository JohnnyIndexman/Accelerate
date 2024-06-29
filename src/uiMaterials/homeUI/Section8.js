import { Box, Text, Card, Image, Button } from "@chakra-ui/react";
import React from "react";
import { matters } from "./Concept";

function Section8() {
  const boxStyle = {
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(228, 228, 228, 1)",
    width: "100%",
  };

  const matter = matters;
  const display = matter.map((m) => {
    return (
      <Box key={m.id} width={["47%", "47%", "18%"]} mb="20px">
        <Card
          width="100%"
          p={["10px", "10px", "20px"]}
          height={["210px", "210px", "328px"]}
          display="flex"
          flexDirection="column"
          justify="space-between"
        >
          <Text fontSize={["15px", "15px", "24px"]} fontWeight="400">
            {m.title}
          </Text>
          <Image src={m.image} width="100%" height="170px" />
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
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
        mb="50px"
      >
        <Box width={["100%", "100%", "45%"]}>
          <Text
            fontSize={["30px", "30px", "52px"]}
            fontWeight={500}
            mt={["15px", "15px", "30px"]}
            mb="20px"
            textAlign={["center", "center", "start"]}
          >
            Our 5 Idea-Focus-Test
          </Text>
          <Text
            fontSize={["15px", "15px", "17px"]}
            fontWeight={400}
            mb="40px"
            textAlign={["center", "center", "start"]}
          >
            Our quick 5 critical question we usually answer to test an idea for
            investment and if it passes our value and vision test.
          </Text>
          <Button
            bg="rgba(48, 48, 48, 1)"
            color="#fff"
            borderRadius="24px"
            width={["100px", "178px", "178px"]}
            height={["30px", "30px", "49px"]}
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="600"
            mb={["30px", "30px", "50px"]}
          >
            Apply to SIP 1.0
          </Button>
        </Box>

        <Box
          width={["100%", "100%", "45%"]}
          display="flex"
          flexDirection={["column", "column", "row"]}
          flexWrap="wrap"
          justifyContent="space-between"
          mt={["15px", "15px", "30px"]}
        >
          <Box width={["100%", "100%", "45%"]} mb="20px">
            <Box display="flex" alignItems="center" gap="20px">
              <Text>01</Text>
              <Box style={boxStyle}></Box>
            </Box>
            <Text alignSelf="start" fontSize={["12.5px", "12.5px", "17px"]}>
              Will the solution help democratize success<br></br> for everyone?
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]} mb="20px">
            <Box display="flex" alignItems="center" gap="20px">
              <Text>02</Text>
              <Box style={boxStyle}></Box>
            </Box>
            <Text alignSelf="start" fontSize={["12.5px", "12.5px", "17px"]}>
              Is the product solving a problem for service<br></br> providers
              and entrepreneurs?
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]} mb="20px">
            <Box display="flex" alignItems="center" gap="20px">
              <Text>03</Text>
              <Box style={boxStyle}></Box>
            </Box>
            <Text alignSelf="start" fontSize={["12.5px", "12.5px", "17px"]}>
              WIs the solution a good to have or must have?
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]} mb="20px">
            <Box display="flex" alignItems="center" gap="20px">
              <Text>04</Text>
              <Box style={boxStyle}></Box>
            </Box>
            <Text alignSelf="start" fontSize={["12.5px", "12.5px", "17px"]}>
              Is the product a platform-based product?
            </Text>
          </Box>
          <Box width={["100%", "100%", "100%"]} mb="20px">
            <Box display="flex" alignItems="center" gap="20px">
              <Text>05</Text>
              <Box style={boxStyle}></Box>
            </Box>
            <Text alignSelf="start" fontSize={["12.5px", "12.5px", "17px"]}>
              Is the timing right or are we willing to stick with it till its
              accepted as been self-evident?
            </Text>
          </Box>
        </Box>
      </Box>

      <Box style={boxStyle} mb="50px"></Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize={["30px", "30px", "56px"]}
          fontWeight={500}
          mb="20px"
          textAlign="center"
        >
          What Matters Most
        </Text>
        <Text
          textAlign={["center", "center", "end"]}
          mb="50px"
          fontSize={["15px", "15px", "17px"]}
        >
          For every startup in our portfolio and as part of our success
          strategies, we have <br></br> key 5 areas of importance in order of
          preference.
        </Text>

        <Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            mb={["20px", "20px", "40px"]}
          >
            {display}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section8;
