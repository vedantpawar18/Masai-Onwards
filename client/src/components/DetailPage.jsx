import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
	SimpleGrid,
	Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { MdOutlineExposureZero, MdPerson, MdWorkOutline } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiOutline, BiUserVoice } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function DetailPage() {
	const data = useSelector((store) => store.data.data);
	const { id } = useParams();
	console.log("params", id);

	const filter = data.filter((item) => {
		return item._id === id;
	});
	console.log("filter", filter);
	// const data = useSelector((store)=>store)

	const Feature = ({ title, text, icon }) => {
		return (
			<Stack alignItems={"center"}>
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bg={"gray.100"}
					mb={1}
				>
					{icon}
				</Flex>
				<Text fontWeight={700} fontSize={"17px"}>
					{title}
				</Text>
				<Text fontSize={"14px"} color={"black.800"}>
					{text}
				</Text>
			</Stack>
		);
	};

	return (
		<>
			{filter?.map((item) => (
				<>
					<Heading>
						<link
							href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
							rel="stylesheet"
						/>
					</Heading>

					<Container maxW={"6xl"}>
						<Stack
							as={Box}
							textAlign={"center"}
							spacing={{ base: 8, md: 14 }}
							py={{ base: 20, md: 36 }}
						>
							<Heading
								fontWeight={700}
								fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
								lineHeight={"110%"}
							>
								{item.course_name}-{item.course_type}
							</Heading>

							<Box p={4}>
								<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
									<Feature
										icon={
											<Icon as={MdPerson} w={10} h={10} color={"#6e71cc"} />
										}
										title={"5000+ Students Currently Enrolled"}
									/>
									<Feature
										icon={
											<Icon
												as={RiSuitcaseLine}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={"96% PlacementSuccess Rate"}
									/>
									<Feature
										icon={
											<Icon as={FaRupeeSign} w={10} h={10} color={"#6e71cc"} />
										}
										title={"36 LPA Highest Salary"}
									/>
								</SimpleGrid>
							</Box>
							<Box textAlign={"start"}>
								<Heading>Minimum Criteria</Heading>
								<br />
								<Text color={"gray.800"} fontSize={"17px"}>
									You should meet the following requirements to be eligible for
									this course.
								</Text>
							</Box>

							<Box p={4}>
								<SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
									<Feature
										icon={
											<Icon
												as={TbCertificate}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={"Minimum Qualification"}
										text={
											"Cleared 12th Standard, Ready To Take a Job Immediately After Course Finishes or are a diploma holder."
										}
									/>
									<Feature
										icon={
											<Icon
												as={RiSuitcaseLine}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={"Age"}
										text={"Min. 18 yrs,Max. 28 yrs"}
									/>
									<Feature
										icon={
											<Icon as={BiUserVoice} w={10} h={10} color={"#6e71cc"} />
										}
										title={"Communication Skills"}
										text={
											"A Laptop, uninterrupted internet connection (Internet Requirement - Minimum 2GB / 4GB of data per day. Download speed recommended 20mbps, minimum 10mbps)."
										}
									/>
									<Feature
										icon={<Icon as={BsGlobe} w={10} h={10} color={"#6e71cc"} />}
										title={"ID"}
										text={"Valid PAN Card and Aadhar Card"}
									/>
								</SimpleGrid>
							</Box>
							<Box textAlign={"start"}>
								<Heading>Pay Through Pay After Placement</Heading>
								<br />
								<Text color={"gray.800"} fontSize={"17px"}>
									No loans, no collaterals, no interest rate.
								</Text>
							</Box>

							<Box p={3}>
								<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
									<Feature
										icon={
											<Icon
												as={MdOutlineExposureZero}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={"Apply and study for ZERO upfront fee."}
									/>
									<Feature
										icon={
											<Icon as={BiOutline} w={10} h={10} color={"#6e71cc"} />
										}
										title={
											"Pay the course fee in 36 months or less from your post-course salary, only when you earn ₹ 5LPA (CTC) or more."
										}
									/>
									<Feature
										icon={
											<Icon
												as={MdWorkOutline}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={
											"The ISA is capped at a maximum repayment of ₹ 3.5 Lakhs."
										}
									/>
								</SimpleGrid>
							</Box>
							<Box textAlign={"start"}>
								<Heading>Course Details</Heading>
								<br />
								<Text color={"gray.800"} fontSize={"17px"}>
									{item.course_description}
								</Text>
							</Box>
							<Box p={2}>
								<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
									<Feature
										icon={
											<Icon as={SlCalender} w={10} h={10} color={"#6e71cc"} />
										}
										title={"35 Weeks (8 Months) "}
									/>

									<Feature
										icon={
											<Icon
												as={AiOutlineClockCircle}
												w={10}
												h={10}
												color={"#6e71cc"}
											/>
										}
										title={"11 am to 11 pm (Monday to Saturday)"}
									/>
								</SimpleGrid>
							</Box>
						</Stack>
						
							
						
					</Container>
					<hr/>
					<Box marginTop="30px" marginBottom={"30px"} textAlign={"right"} marginRight={"40px"} >
						
					<Button bg={"blue.400"} color={"white"}>Apply Now</Button>
					</Box>
					
				</>
			))}
		</>
	);
}
