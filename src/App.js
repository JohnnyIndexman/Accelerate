
import "./App.css";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  // Outlet,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./uiMaterials/Layout";
import Home from "./uiMaterials/Home"
import { Box } from "@chakra-ui/react";
import Companies from "./uiMaterials/companiesUI/Companies"
import Seeq from "./uiMaterials/seeqUI/Seeq"
import Job from "./uiMaterials/jobUI/Job"
import Resources from "./uiMaterials/resourcesUI/Resources"
import Platforms from "./uiMaterials/platformsUI/Platforms"
import Initiatives from "./uiMaterials/initiativesUI/Initiatives"
import About from "./uiMaterials/aboutUI/About"

function App(){
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About />}/>
      <Route path="companies" element={<Companies />}/>
      <Route path="seeq" element={<Seeq/>}/>
      <Route path="jobs" element={<Job/>}/>
      <Route path="resources" element={<Resources/>}/>
      <Route path="platform" element={<Platforms/>}/>
      <Route path="initiatives" element={<Initiatives/>}/>
    </Route>
  ))

  return(
    <Box className="App">
      <RouterProvider router = {router}/>
    </Box>
  )
}

export default App;
