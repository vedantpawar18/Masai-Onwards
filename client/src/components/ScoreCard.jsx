import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { Flex, Heading, Image } from '@chakra-ui/react'
// import vector from "../images/vector.png";

const ScoreCard = ({status}) => {
  console.log("statussssssssss",status)
  return (
    <>
    <Box marginTop={"30px"} marginBottom={"30px"}>
    <Heading fontSize={"20px"} textAlign={"left"}>Score Details</Heading>
    <Text textAlign={"left"}>Here are your score details </Text>
    </Box>
    <Flex gap="20px" marginBottom={"40px"}>
      <Box width={"264px"} height={"156px"} border={"1px solid #e4d1d6"} textAlign={"start"}
    borderRadius={"16px"} padding={"8px"}>
        <Box width={"100%"} height={"55px"} marginTop={"2px"} display={"flex"} justifyContent={"space-between"}>
        <Box
            h={'30px'}
            w={"30px"}
            bg= {`url(${"vector"})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           ></Box>
            <Text color={`${status.color}`} fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
					>{status.status}</Text>
        </Box>
        <Text fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
				>Cognitive Ability </Text>
        <Text color={" #544D4F"}>Marks : {status.cognitive}/10 </Text>
    </Box>
    

    <Box width={"264px"} height={"156px"} border={"1px solid #e4d1d6"} textAlign={"start"}
    borderRadius={"16px"} padding={"8px"}>
        <Box width={"100%"} height={"55px"} marginTop={"2px"} display={"flex"} justifyContent={"space-between"}>
        <Box
            h={'30px'}
            w={"30px"}
            bg= {`url(${"vector"})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           ></Box>
            <Text color={`${status.color}`} fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
					>{status.status}</Text>
        </Box>
        <Text fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
				>Mettl Test Score </Text>
        <Text color={" #544D4F"}>Marks : {status.mettl}/10 </Text>
    </Box>

    <Box width={"264px"} height={"156px"} border={"1px solid #e4d1d6"} textAlign={"start"}
    borderRadius={"16px"} padding={"8px"}>
        <Box width={"100%"} height={"55px"} marginTop={"2px"} display={"flex"} justifyContent={"space-between"}>
        <Box
            h={'30px'}
            w={"30px"}
            bg= {`url(${"vector"})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           ></Box>
            <Text color={`${status.color}`} fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
					>{status.status}</Text>
        </Box>
        <Text fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
				> Communication Skills </Text>
        <Text color={" #544D4F"}>Marks : {status.communication}/10 </Text>
    </Box>

    <Box width={"264px"} height={"156px"} border={"1px solid #e4d1d6"} textAlign={"start"}
    borderRadius={"16px"} padding={"8px"}>
        <Box width={"100%"} height={"55px"} marginTop={"2px"} display={"flex"} justifyContent={"space-between"}>
        <Box
            h={'30px'}
            w={"30px"}
            bg= {`url(${"vector"})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           ></Box>
            <Text color={`${status.color}`} fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
					>{status.status}</Text>
        </Box>
        <Text fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"16px"}
				>Credibility Score </Text>
        <Text color={" #544D4F"}>Marks :  {status.credibility}/10 </Text>
    </Box>
    </Flex>
    </>
  )
}

export default ScoreCard