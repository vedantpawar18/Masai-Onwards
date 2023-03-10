import {
	Box,
	Text,
	Stack,
	Button,
	HStack,
	Grid,
	useMediaQuery,
	ChakraProvider,
} from "@chakra-ui/react";

import { TbCalendarTime } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import { IoIosLaptop } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import card_image from "../images/card_image.jpg";
import { GridItem } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import ScoreScreen from "./ScoreScreen";
import ApplyModel from "./ApplyModel";
import { getData } from "../redux/data/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Theme from "./Theme";

export default function Cards() {
	const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
	const [apply, setApply] = useState(false);
	const navigate = useNavigate();

	const data = useSelector((store) => store.data.data.courses) || [];
	const dispatch = useDispatch();
	const token = localStorage.getItem("accessToken");

	useEffect(() => {
		dispatch(getData(token));
	}, [dispatch, token]);

	const handleApply = (id) => {
		localStorage.setItem("courseId", id);
		navigate("/applydashboard");
	};
	return (
		<ChakraProvider theme={Theme}>
			{isLargerThan800 ? (
				<>
					<Grid gridTemplateColumns={"repeat(1, 1fr)"} gap={"12px"}>
						{data.map((item) => (
							<GridItem
								w={"343"}
								h={"540"}
								bg={"white"}
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
									textAlign={"center"}
										marginLeft="10px"
										bg="white"
										borderRadius={"7.5px"}
										h="20px"
										w="80px"
										
									>
										{item.course_type === "Full time" ? (
											<Text color={"#1A9FBD"} fontWeight="bold" fontSize="12px" >
												{item.course_type}
											</Text>
										) : (
											<Text color={"#CC926E"} fontWeight="bold" fontSize="12px">
												{item.course_type}
											</Text>
										)}
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
										<Text marginTop={"-5px"}>
											Last Date to Apply: {item.deadline}
										</Text>
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
											onClick={() => handleApply(item._id)}
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
								border={"1px solid #D9D9D9"}
								w={"350px"}
								h={"510"}
								bg={"white"}
								rounded={"md"}
								p={3}
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
										textAlign={"center"}
									>
										{item.course_type === "Full time" ? (
											<Text color={"#1A9FBD"} fontWeight="bold" fontSize="12px">
												{item.course_type}
											</Text>
										) : (
											<Text color={"#CC926E"} fontWeight="bold" fontSize="12px">
												{item.course_type}
											</Text>
										)}
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
									{/* <Text
 										
 										fontStyle={"normal"}
 										fontWeight={600}
 										fontSize={"14px"}
 										marginTop="10px"
 									>
 										{item.course_start_date}
 									</Text> */}
									<Box
										fontStyle={"normal"}
										fontWeight={600}
										fontSize={"14px"}
										display={"flex"}
										gap="12px"
										alignItems={"start"}
										variant="ghost"
										marginTop={"10px"}
									>
										<span
											class="logged-in"
											style={{ color: "rgba(111, 205, 158, 1)" }}
										>
											●
										</span>
										<Text>{item.course_start_date}</Text>
									</Box>
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
										<Text marginTop={"-5px"}>
											Last Date to Apply: {item.deadline}{" "}
										</Text>
										<svg
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http:www.w3.org/2000/svg"
										>
											<path
												d="M6.33331 4.99992H7.66665V3.66659H6.33331V4.99992ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93992 1.66665 6.99992C1.66665 4.05992 4.05998 1.66659 6.99998 1.66659C9.93998 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.93998 12.3333 6.99998 12.3333ZM6.99998 0.333252C6.1245 0.333252 5.25759 0.50569 4.44876 0.840722C3.63992 1.17575 2.90499 1.66682 2.28593 2.28587C1.03569 3.53612 0.333313 5.23181 0.333313 6.99992C0.333313 8.76803 1.03569 10.4637 2.28593 11.714C2.90499 12.333 3.63992 12.8241 4.44876 13.1591C5.25759 13.4941 6.1245 13.6666 6.99998 13.6666C8.76809 13.6666 10.4638 12.9642 11.714 11.714C12.9643 10.4637 13.6666 8.76803 13.6666 6.99992C13.6666 6.12444 13.4942 5.25753 13.1592 4.4487C12.8241 3.63986 12.3331 2.90493 11.714 2.28587C11.095 1.66682 10.36 1.17575 9.5512 0.840722C8.74237 0.50569 7.87546 0.333252 6.99998 0.333252V0.333252ZM6.33331 10.3333H7.66665V6.33325H6.33331V10.3333Z"
												fill="#FFBF00"
											/>
										</svg>
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
											onClick={() => handleApply(item._id)}
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
		</ChakraProvider>
	);
}