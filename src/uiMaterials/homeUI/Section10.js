import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousal from "./Carousal";
import Slider from "react-slick";

function Section10() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const carousel = carousal;
  const display = carousel.map((c) => {
    return (
      <Box key={c.id} width={["50%", "50%", "30%"]}>
        <Box>
          <Image
            src={c.image}
            width={["100%", "100%", "100%"]}
            height={["210px", "210px", "350px"]}
            objectFit="cover"
          />
        </Box>
      </Box>
    );
  });
  return (
    <Box
      bg="rgba(249, 249, 249, 1)"
      py={["10px", "20px", "30px"]}
      px={["20px", "20px", "50px"]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize={["15px", "15px", "24px"]}
        fontWeight="600"
        mt={["10px", "10px", "20px"]}
        mb={["20px", "20px", "40px"]}
      >
        As Featured In
      </Text>
      <Box display="flex">
         <Slider {...settings}>{display}</Slider> 
        {/* {display} */}
      </Box>
    </Box>
  );
}
// maxWidth="1800px"
export default Section10;
