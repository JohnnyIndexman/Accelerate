import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./uiMaterials/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  // const style ={
  //   boxSizing: 'border-box',
  //   border: '1px solid black'
  // }
  return (
    <ChakraProvider>
      <Box className="App">
        <Header />
        <Home />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
