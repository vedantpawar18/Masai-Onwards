import {
	Box,
	Center,
	Text,
	Stack,
	Button,
	HStack,
	Grid,
    useMediaQuery,
   
} from "@chakra-ui/react";

import { TbCalendarTime } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import { IoIosLaptop } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import card_image from "../images/card_image.jpg";
import { GridItem } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import ScoreScreen from "./ScoreScreen";
import { useNavigate,Link} from "react-router-dom";
import ApplyModel from "./ApplyModel";

import { useSelector ,useDispatch} from 'react-redux';
import { getData } from "../redux/data/action";


export default function Cards() {
    const [isLargerThan800] = useMediaQuery('(max-width: 800px)')
	const [apply, setApply] = useState(false);
	const navigate = useNavigate();
	
    const data = useSelector((store)=>store.data.data)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getData())
      },[dispatch])
console.log(data)

    
	return (
        <>
		{isLargerThan800?<>
     
        

       
         <Grid gridTemplateColumns={"repeat(1, 1fr)"} >
         {data.map((item)=>(
<GridItem
            maxW={"445px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
			
        >
            <Box
                h={"210px"}
                bg={`url(${card_image})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius={"15px"}
				
            >
                <Box h="20px" w="50px">
                    {" "}
                </Box>
                <Box
                    marginLeft="10px"
                    bg="white"
                    borderRadius={"7.5px"}
                    h="20px"
                    w="80px"
					
                >
                    <Text color={"green"} fontWeight="bold" fontSize="12px" >
                       {item.course_type}
                    </Text>
                </Box>
                <Text
                    textAlign={"left"}
                    paddingLeft="10px"
                    paddingTop={"70px"}
                    fontSize={"30px"}
                    fontWeight="bold"
                    color={"white"}
                >
                   {item.course_name}
                </Text>
            </Box>
            <Stack textAlign={"start"}>
                <Text
                    fontFamily={"Open Sans"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    fontSize={"14px"}
                    marginTop="10px"
                >
                    {item.course_start_date}
                </Text>
                <Text
                    color={"rgba(84, 77, 79, 1)"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    fontSize={"14px"}
                    paddingBottom="20px"
                >
                   {item.course_description}
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
                    {<TbCalendarTime />}
                    <Text marginTop={"-5px"}>{item.deadline}</Text>
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
                    {<BiRupee />}
                    <Text marginTop={"-5px"}>{item.course_guarantee}</Text>
                </Box>
                <HStack gap={"60px"}>
                    <HStack>
                        {<IoIosLaptop />}{" "}
                        <Text fontSize={"14px"} fontWeight={"bold"}>
                            {item.course_mode}
                        </Text>
                    </HStack>
                    <HStack>
                        {<BsCalendar2Date />}{" "}
                        <Text fontSize={"14px"} fontWeight={"bold"}>
                         {item.course_duration}
                        </Text>
                    </HStack>
                </HStack>
                <HStack>
                    <Button w="200px" color={"#3470E4"} bg="transparent">
                        <Link to={`/${item.id}`}> View Details</Link>
                      
                    </Button>
                    <ApplyModel/>
                </HStack>
            </Stack>
        </GridItem>
     ))}
    </Grid>
	  
        
        </>:


<>



 <Grid gridTemplateColumns={"repeat(3, 1fr)"} >
 {data.map((item)=>(
        <GridItem
            maxW={"445px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
			
        >
            <Box
                h={"210px"}
                bg={`url(${card_image})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius={"15px"}
				
            >
                <Box h="20px" w="50px">
                    {" "}
                </Box>
                <Box
                    marginLeft="10px"
                    bg="white"
                    borderRadius={"7.5px"}
                    h="20px"
                    w="80px"
					
                >
                    <Text color={"green"} fontWeight="bold" fontSize="12px" >
                       {item.course_type}
                    </Text>
                </Box>
                <Text
                    textAlign={"left"}
                    paddingLeft="10px"
                    paddingTop={"70px"}
                    fontSize={"30px"}
                    fontWeight="bold"
                    color={"white"}
                >
                   {item.course_name}
                </Text>
            </Box>
            <Stack textAlign={"start"}>
                <Text
                    fontFamily={"Open Sans"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    fontSize={"14px"}
                    marginTop="10px"
                >
                    {item.course_start_date}
                </Text>
                <Text
                    color={"rgba(84, 77, 79, 1)"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    fontSize={"14px"}
                    paddingBottom="20px"
                >
                   {item.course_description}
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
                    {<TbCalendarTime />}
                    <Text marginTop={"-5px"}>{item.deadline}</Text>
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
                    {<BiRupee />}
                    <Text marginTop={"-5px"}>{item.course_guarantee}</Text>
                </Box>
                <HStack gap={"60px"}>
                    <HStack>
                        {<IoIosLaptop />}{" "}
                        <Text fontSize={"14px"} fontWeight={"bold"}>
                            {item.course_mode}
                        </Text>
                    </HStack>
                    <HStack>
                        {<BsCalendar2Date />}{" "}
                        <Text fontSize={"14px"} fontWeight={"bold"}>
                         {item.course_duration}
                        </Text>
                    </HStack>
                </HStack>
                <HStack>
                    <Button w="200px" color={"#3470E4"} bg="transparent">
                    <Link to={`/dashboard/${item._id}`}> View Details</Link>
                    </Button>
                    <ApplyModel/>
                </HStack>
            </Stack>
        </GridItem>

))}
    </Grid>
	

  
</>
        }

       
        </>
	);
}
