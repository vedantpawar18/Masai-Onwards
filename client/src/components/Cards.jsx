import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    HStack
  } from '@chakra-ui/react';
  import {TbCalendarTime} from "react-icons/tb"
  import {BiRupee} from "react-icons/bi"
  import {IoIosLaptop} from "react-icons/io"
  import {BsCalendar2Date} from "react-icons/bs"
  import card_image from "../images/card_image.jpg"
  export default function Cards() {
    return (
      <Center >
        <Box
          maxW={'445px'}
          w={'full'}
          bg={('white')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg= {`url(${card_image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            borderRadius={"15px"}
           >
           <Box  h="20px" w="50px"> </Box>
           <Box marginLeft="10px" bg="white" borderRadius={"7.5px"} h="20px" w="80px">
           <Text  color={"green"} fontWeight="bold" fontSize="12px">Full Time</Text>
           </Box>
           <Text textAlign={"left"} paddingLeft="10px" paddingTop={"70px"} fontSize={"30px"} fontWeight="bold"
            color={"white"}>Full Stack   Web Development</Text>
          </Box>
          <Stack textAlign={"start"}>
                      <Text
                          fontFamily={"Open Sans"}
                          fontStyle={"normal"}
                          fontWeight={600}
                          fontSize={"14px"}
                          marginTop="10px"
                      >
                          Starts: 24 Jan 2022
                      </Text>
                      <Text
                          color={"rgba(84, 77, 79, 1)"}
                          fontStyle={"normal"}
                          fontWeight={400}
                          fontSize={"14px"}
                          paddingBottom="20px"
                      >
                          Become a job-ready software developer in 30 weeks at no upfront
                          fees. Pay us only if you get a job that pays you ₹5,00,000/- per
                          year or more!
                      </Text>
                      <Box
                          fontStyle={"normal"}
                          fontWeight={600}
                          fontSize={"14px"}
                          display={"flex"}
                          gap="12px"
                          alignItems={"start"}
                          variant="ghost"
                          paddingBottom="10px"
                          marginBottom={"30px"}
                      >
                          {<TbCalendarTime/>}
                          <Text marginTop={"-5px"}>Last Date to Apply: 02 Dec 2021</Text>
                      </Box>
                      <Box
                          paddingBottom="10px"
                          fontStyle={"normal"}
                          fontWeight={600}
                          fontSize={"14px"}
                          display={"flex"}
                              gap="12px"
                          alignItems={"start"}
                          variant="ghost"
                      >
                          {<BiRupee/>}
                          <Text marginTop={"-5px"}>Pay Only After You Earn 5LPA</Text>
                      </Box>
                      <HStack gap={"60px"}>
                      <HStack>
                      {<IoIosLaptop/>} <Text fontSize={"14px"} fontWeight={"bold"}>Online</Text>
                      </HStack>
                      <HStack>
                      {<BsCalendar2Date/>} <Text fontSize={"14px"} fontWeight={"bold"}>30 Weeks</Text>
                      </HStack>
                      </HStack>
                      <HStack>
                      <Button w="200px" color={"#3470E4"} bg="transparent">View Details</Button>
                      <Button w="200px" color={"white"} bg="blue.400">Apply Now</Button>
                      </HStack>
                  </Stack>
        </Box>
      </Center>
    );
  }