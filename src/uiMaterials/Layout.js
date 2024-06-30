import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default Layout;
