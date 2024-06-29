import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Section1 from './homeUI/Section1'
import Section2 from './homeUI/Section2'
import Section3 from './homeUI/Section3'
import Section4 from './homeUI/Section4'
import Logo from './homeUI/Logo'
import Section5 from './homeUI/Section5'
import Section6 from './homeUI/Section6'
import Section7 from './homeUI/Section7'
import Section8 from './homeUI/Section8'
import Section9 from './homeUI/Section9'
import Section10 from './homeUI/Section10'



function Home() {

  return (
    <Box>
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       <Logo />
       <Section5 />
       <Section6 />
       <Section7 />
       <Section8 />
       <Section9 />
       <Section10 />
    </Box>
  )
}

export default Home