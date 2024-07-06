import React, { useState } from "react";
import { Box, Image, Text, Link, Button } from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";

function Header() {
  const [isClose, setIsClose] = useState(true);
  const style = isClose
    ? {
        display: "none",
      }
    : {
        display: "block",
      };

  function handleClick() {
    setIsClose(!isClose);
  }
  return (
    <Box
      bg="rgba(249, 249, 249, 1)"
      px={["10px", "10px", "50px"]}
      py={["10px", "20px", "20px"]}
      position={["sticky", "sticky", "sticky"]}
      top={["0", "0", "0"]}
      right="0px"
      left="0"
      zIndex="1"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="50px"
        justifyContent="space-between"
      >
        <Link href="/">
          <Image
            src="/images/asin5-logo.png"
            width={["130px", "151px", "151px"]}
            height={["40px", "58px", "58px"]}
            alt="Logo"
            alignSelf={["flex-start", "flex-start", "flex-start"]}
          />
        </Link>
        <Box
          display={["none", "none", "flex"]}
          justifyContent="space-between"
          alignItems="center"
          width={["100%", "100%", "100%"]}
          flexDirection={["column", "column", "row"]}
          border={["1px solid black", "1px solid black", "none"]}
          mt={["50px", "50px", "0"]}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            flexDirection={["column", "column", "row"]}
          >
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/about">About us</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="companies">Companies</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/seeq">SEEQ</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/jobs">Jobs</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/resources">Resources</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/platform">Platforms</Link>
            </Text>
            <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
              <Link href="/initiatives">Initiatives</Link>
            </Text>
          </Box>
          <Box
            alignSelf={["center", "center", "flex-end"]}
            mt={["30px", "30px", "0px"]}
          >
            <Button
              bg="rgba(48, 48, 48, 1)"
              color="#fff"
              borderRadius="24px"
              width={["100px", "178px", "178px"]}
              height={["30px", "30px", "49px"]}
            >
              Apply to SIP 1.0
            </Button>
          </Box>
        </Box>
        <Box
          alignSelf="flex-start"
          cursor="pointer"
          display={["block", "block", "none"]}
        >
          <RiMenu2Line size="30px" onClick={handleClick} />
        </Box>
      </Box>

      {/* responsive menu */}
      <Box
        display={["flex", "flex", "none"]}
        alignItems="center"
        gap="50px"
        flexDirection="column"
        position={["sticky", "sticky", "sticky"]}
        top={["0", "0", "0"]}
        right="0px"
        left="0"
        zIndex="1"
        className="dropdown"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="20px"
          style={style}
        >
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/about">About us</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/companies">Companies</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/seeq">SEEQ</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/jobs">Jobs</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/resources">Resources</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/platform">Platforms</Link>
          </Text>
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="500"
            mb="8px"
          >
            <Link href="/initiatives">Initiatives</Link>
          </Text>

          <Box
            alignSelf={["center", "center", "flex-end"]}
            mt={["30px", "30px", "0px"]}
          >
            <Button
              bg="rgba(48, 48, 48, 1)"
              color="#fff"
              borderRadius="24px"
              width={["100px", "178px", "178px"]}
              height={["30px", "30px", "49px"]}
              fontSize={["12.5px", "12.5px", "16px"]}
              fontWeight="600"
              mb={["20px", "20px", "0px"]}
            >
              Apply to SIP 1.0
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
