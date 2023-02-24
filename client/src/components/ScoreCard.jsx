import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/react'
import vector from "../images/vector.png";

const ScoreCard = () => {
  return (
    <Box width={"264px"} height={"156px"} border={"1px solid #e4d1d6"} textAlign={"start"}
    borderRadius={"16px"} padding={"8px"}>
        <Box width={"100%"} height={"55px"} marginTop={"2px"} display={"flex"} justifyContent={"space-between"}>
        <Box
            h={'30px'}
            w={"30px"}
            bg= {`url(${vector})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           ></Box>
            <Text color={"#049402"} fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
					>Passed</Text>
        </Box>
        <Text fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
				>Cognitive Ability </Text>
        <Text color={" #544D4F"}>Marks : 5/10 </Text>
    </Box>
  )
}

export default ScoreCard