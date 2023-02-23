import { Box, Button, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import landingImage from "../images/landing_page.jpg";
import "./landingPage.css"
function LandingPage() {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <>
  

    {isLargerThan800?
       <Box id="landingContainer" 
       backgroundPosition="center"
       bgSize="contain"
       backgroundRepeat="no-repeat"
       backgroundImage={`url(${landingImage})`}>
   
   <Text id="text1">
   We offer
   </Text>
   <Text id="text2">
   100% Internship Guarantee
   </Text>
   <Text id="text3">
   Else 110% Return
   </Text>
   
   
      <Button id="applyNow">
   Apply Now
   </Button>
   
       </Box>
      :
      <Box>
      <Image src={landingImage} justifyContent={'center'} alt="smallScreen" />
      <Heading color={"#2a3a8a"} fontSize={"20px"}>Tech Internship Guarantee Program</Heading>
      <Text fontSize={"10px"} color={"#2a3a8a"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur iusto maxime dolor minima eligendi exercitationem 
         possimus, praesentium animi ut ducimus quasi dicta 
         veritatis nostrum assumenda ipsam</Text>
      <Button marginTop={"30px"} color={"white"} bg={"#2a3a8a"}>
   Apply for free
   </Button>

      </Box>
      }

    </>
  )
}

export default LandingPage