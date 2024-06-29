import { Box, Text, Button} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Section1() {
//   const style = {
//     boxSizing: "border-box",
//     border: "1px solid black",
//   };
const [bgStyle, setBgStyle] = useState()
const updateBgStyle = () => {
    const bgsize = window.innerWidth >= 800;
    const style = bgsize ? {
      backgroundImage: 'url("images/Frame bg.png")',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% auto'
    } : {
        backgroundImage: 'url("images/Frame bg.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    setBgStyle(style);
  };

  useEffect(() => {
    // Initial check
    updateBgStyle();

    // Update style on window resize
    window.addEventListener('resize', updateBgStyle);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateBgStyle);
    };
  }, []);
  
  return (
    <Box px={["20px", "20px", "50px"]} py={["0px", "0px", "0px"]} style={bgStyle}>
      <Box display="flex" flexDirection={["column", "column", "row"]} alignItems='center'>
         <Box width={['100%', '100%', '45%']} display={['block', 'block', 'flex']}
         flexDirection='column'>
          <Text
            fontSize={["40px", "40px", "56px"]}
            mt={["30px", "30px", "50px"]}
            fontWeight="600"
            mb="50px" textAlign={['center', 'center', 'start']}
            color={['#fff', '#fff', '#000']}
          >
            Building the future <br></br>
            together,<br></br> democratizing<br></br> success.
          </Text>
          <Button
            bg="rgba(48, 48, 48, 1)"
            color="#fff"
            borderRadius="24px"
            width={["100px", "178px", "178px"]}
            height={["30px", "30px", "49px"]}
            fontSize={["12.5px", "12.5px", "16px"]}
            fontWeight="600"
            mb={['30px', '30px', '50px']}
          >
            Apply to SIP 1.0
          </Button>
        </Box>

        <Box display="flex" flexDirection={["row", "row", "column"]} 
        gap={["5px",'5px', '20px']} my={['20px', '20px', '0']}>
          <Box
            boxSizing="border-box"
            border="1px solid none"
            width={["150px", "150px", "167px"]}
            height={["50px", "50px", "77px"]}
            fontSize={["12.5px", "12.5px", "16px"]}
            borderRadius="38px"
            display="flex"
            flexDirection="column"
            bg="linear-gradient(rgba(33, 33, 33, 1), rgba(166, 166, 166, 0))"
          >
            <Text
              fontWeight="600"
              fontSize={["18px", "18px", "28px"]}
              color="#fff"
            >
              20+
            </Text>
            <Text fontWeight="400" fontSize="14px" color="#fff">
              To Be Incubated
            </Text>
          </Box>
          <Box
            boxSizing="border-box"
            border="1px solid none"
            width={["150px", "150px", "167px"]}
            height={["50px", "50px", "77px"]}
            fontSize={["12.5px", "12.5px", "16px"]}
            borderRadius="38px"
            display="flex"
            flexDirection="column"
            bg="linear-gradient(rgba(33, 33, 33, 1), rgba(166, 166, 166, 0))"
          >
            <Text
              fontWeight="600"
              fontSize={["18px", "18px", "28px"]}
              color="#fff"
            >
              $1M
            </Text>
            <Text fontWeight="400" fontSize="14px" color="#fff">
              To Be Invested
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
