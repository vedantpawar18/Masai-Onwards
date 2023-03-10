import {
	Box,
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
import { useEffect } from "react";

import { getData } from "../redux/data/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function Cards() {
	const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

	const navigate = useNavigate();

	const data = useSelector((store) => store.data.data.courses)||[];
	const dispatch = useDispatch();
	const token = localStorage.getItem("accessToken")

	useEffect(() => {
		dispatch(getData(token));
	}, [dispatch,token]);

	const handleApply = (id)=>{
		localStorage.setItem("courseId",id);
		navigate("/applydashboard")
	}

	return (
		<>
			{isLargerThan800 ? (
				<>
					<Grid gridTemplateColumns={"repeat(1, 1fr)"}>
						{data.map((item) => (
							<GridItem
								maxW={"445px"}
								w={"full"}
								bg={"white"}
								boxShadow={"2xl"}
								rounded={"md"}
								p={6}
								overflow={"hidden"}
								border={"1px solid #D9D9D9"}
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
										<Text color={"green"} fontWeight="bold" fontSize="12px">
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
										<Text marginTop={"-5px"}>Last Date to Apply: {item.deadline}</Text>
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
										<Button
											onClick={()=>handleApply(item._id)}
											bg={"#3470E4"}
											color={"white"}
										>
											Apply Now
										</Button>
									</HStack>
								</Stack>
							</GridItem>
						))}
					</Grid>
				</>
			) : (
				<>
					<Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={"5px"}>
						{data.map((item) => (
							<GridItem
								maxW={"445px"}
								border={"1px solid #D9D9D9"}
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
										<Text color={"green"} fontWeight="bold" fontSize="12px">
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
										height={"90px"}
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
										<Text marginTop={"-5px"}>Last Date to Apply: {item.deadline}</Text>
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
										
										<Button
											onClick={()=>handleApply(item._id)}
											bg={"#3470E4"}
											color={"white"}
										>
											Apply Now
										</Button>
									</HStack>
								</Stack>
							</GridItem>
						))}
					</Grid>
				</>
			)}
		</>
	);
}