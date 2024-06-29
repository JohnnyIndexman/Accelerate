import React from "react";
import {
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import contains from "./Footercomp";

function Footer() {
  const footerElement = contains;
  const display = footerElement.map((f) => (
    <Box
      key={f.id}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      height={["200px", "200px", "268px"]}
      width={["30%", "30%", "25%"]}
      alignSelf={["center", "center", ""]}
      mb="40px"
    >
      <Text
        fontSize={["12.5px", "12.5px", "15px"]}
        fontWeight="700"
        textAlign="start"
        mb="20px"
      >
        {f.title}
      </Text>
      <UnorderedList listStyleType="none" mx="0">
        {f.text.map((text, index) => (
          <ListItem key={index} textAlign="start" mb={["0", "0", "10px"]}>
            <Link
              fontSize={["12.5px", "12.5px", "14px"]}
              fontWeight="400"
              textAlign="start"
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  ));
  return (
    <Box bg="rgba(33, 33, 33, 1)" color="#fff">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        py={["10px", "20px", "30px"]}
        px={["20px", "20px", "50px"]}
      >
        <Text
          fontSize={["30px", "30px", "50px"]}
          fontWeight="500"
          textAlign="start"
          mb={["15px", "15px", "15px"]}
        >
          Newsletter
        </Text>
        <Text
          fontSize={["12.5px", "12.5px", "16px"]}
          fontWeight="400"
          textAlign="start"
          mb={["20px", "20px", "50px"]}
        >
          Get the latest about SINC PARTNERS LAB, our startup Incubator program,
          <br></br>
          Portfolio company offerings - straight into your inbox.
        </Text>
        <Box>
          <input
            type="text"
            placeholder="Enter your email address"
            className="input"
          />
          <input type="button" value="Subscribe" className="btn" />
        </Box>
      </Box>

      <Box
        border="1px solid rgba(233, 233, 233, 0.3)"
        pl={["10px", "20px", "80px"]}
        pr={["10px", "10px", "20px"]}
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        py="20px"
        mb="40px"
      >
        <Box
          //   border="1px solid white"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width={["100%", "100%", "18%"]}
          mr={["0px", "0px", "50px"]}
          mb={["20px", "20px", "0px"]}
        >
          <Image
            src="/footerImages/Vector.png"
            alt="vector-logo"
            width={["30px", "30px", "60px"]}
            height={["30px", "30px", "60px"]}
            mb="20px"
          />
          <Text
            textAlign={["center", "cente", "start"]}
            fontSize="14px"
            mb="20px"
          >
            SINC Partners Lab is a SaaS and a Marketing Tech startup studio
            <br></br>
            building platform-based products for solution-providers and
            <br></br>
            entrepreneurs that will help democratize success
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width={["100%", "100%", "70%"]}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {display}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          height={["200px", "200px", "300px"]}
          borderLeft={["none", "none", "1px solid rgba(233, 233, 233, 0.3)"]}
          width={["100%", "100%", "30%"]}
          pl={["0", "0", "20px"]}
          mt={["10px", "10px", "0"]}
        >
          <Text
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="700"
            mb="20px"
          >
            Locations
          </Text>
          <Text fontSize={["11px", "11px", "14px"]} fontWeight="500" mb="10px">
            Abuja, Nigeria{" "}
          </Text>
          <Text fontSize={["11px", "11px", "14px"]} fontWeight="500" mb="10px">
            Lagos, Nigeria{" "}
          </Text>
          <Text fontSize={["11px", "11px", "14px"]} fontWeight="500" mb="30px">
            Philadelphia, USA{" "}
          </Text>

          <Box
            display="flex"
            alignItems={["center", "center", "flex-start"]}
            gap="40px"
            alignSelf={["center", "center", "flex-start"]}
          >
            <Box>
              <Image
                src="/footerImages/accredited.png"
                alt="logo"
                height="66px"
                mb="10px"
              />
              <Text
                textAlign="start"
                fontSize={["12.5px", "12.5px", "16px"]}
                fontWeight="500"
              >
                Trust Business
              </Text>
            </Box>

            <Box
              mt="30px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/">
                <Image
                  src="/footerImages/whatsapp-color-svgrepo-com 1.png"
                  mb="10px"
                />
              </Link>
              <Text
                textAlign="center"
                fontSize={["11px", "11px", "14px"]}
                fontWeight="500"
              >
                Chat with Us
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        flexDirection={["column-reverse", "column-reverse", "row"]}
        pb="20px"
        px={["20px", "20px", "50px"]}
        justifyContent="space-around"
        gap={['20px', '20px', '0']}
      >
        <Box alignSelf={["center", "center", "flex-end"]}>
          <Text fontSize={["12.5px", "12.5px", "16px"]} fontWeight="500">
            &copy;2023 SINC Partners Lab Ltd. All rights reserved
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          gap={["15px", "15px", "30px"]}
        >
          <Text
            textAlign="center"
            fontSize={["11px", "11px", "14px"]}
            fontWeight="300"
          >
            You are guaranteed a 2x on your service or cash investment if you
            are<br></br>
            first to invest
          </Text>
          <Box
            display="flex"
            gap="20px"
            alignSelf="center"
            fontSize={["12.5px", "12.5px", "16px"]}
            pb={["15px", "15px", "0"]}
          >
            <Link textDecoration="underline">Privacy Policy</Link>
            <Link textDecoration="underline">Terms of Service</Link>
            <Link textDecoration="underline">Security</Link>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-end"
          gap="20px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="10px"
          >
            <Image
              src="/footerImages/GASUS white SVG-01 1.png"
              alt="logo"
              width={["100px", "100px", "120px"]}
              height={["30px", "30px", "38px"]}
            />
            <Text
              textAlign="start"
              fontSize={["10px", "10px", "12px"]}
              fontWeight="300"
            >
              We are a business built on the<br></br> foundation of Christian
              values and belief
            </Text>
          </Box>

          <Box
            display="flex"
            gap="20px"
            alignItems="center"
            alignSelf="flex-start"
          >
            <Image
              src="/footerImages/Facebook Icon.png"
              width={["30px", "30px", "36px"]}
              objectFit="contain"
              height={["30px", "30px", "36px"]}
            />
            <Image
              src="/footerImages/twitter-round-svgrepo-com.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
            <Image
              src="/footerImages/instagram-svgrepo-com.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
            <Image
              src="/footerImages/linkedin-round-svgrepo-com 1.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
            <Image
              src="/footerImages/medium-fill-svgrepo-com.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
            <Image
              src="/footerImages/youtube-fill-svgrepo-com.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
            <Image
              src="/footerImages/unnamed 1.png"
              width={["20px", "20px", "20.38px"]}
              objectFit="contain"
              height={["20px", "20px", "20.38px"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
