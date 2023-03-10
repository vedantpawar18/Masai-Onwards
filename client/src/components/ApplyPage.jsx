import React, { useState } from "react";
import {

	Box,
	ButtonGroup,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	RadioGroup,
	Radio,
	Checkbox,
} from "@chakra-ui/react";
import validator from 'validator' 
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { profileData } from "../redux/data/action";
import { useDispatch } from "react-redux";

export default function ApplyPage() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	let user_email = localStorage.getItem("email");
	let user_name = localStorage.getItem("displayName");
	const [name, setName] = useState(user_name);
	const [email, setEmail] = useState(user_email);
	const [number, setNumber] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [passOutYear, setPassOutYear] = useState("");
	const [graduationYear, setGraduationYear] = useState("");
	const [permission, setPermission] = useState("");
	const [gender, setGender] = useState("");
	const [courseStartsOn, setCourseStartsOn] = useState("");
	const [referral, setReferral] = useState("");
	const [workingStatus, setWorkingStatus] = useState("");
	const [emailError,setEmailError] = useState('')
	const [validNumber, setValidNumber] = useState(true);
	const [update, setUpdate] = useState("");
	const navigate = useNavigate();
    const dispatch = useDispatch()

	const [ageNow, setAgeNow] = useState("");
	const token = localStorage.getItem("accessToken")

   
   
	const calculate_age = () => {
		var today = new Date();
		var birthDate = new Date(dateOfBirth);
		var age_now = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age_now--;
		}
		
        
		setAgeNow(age_now);
	
		if(age_now>=18&&age_now<=25&&passOutYear!=="NA"&&passOutYear!==""){
			let data = { 
				fullName:name ,
				emailId:email,
				mob:number,
				dateOfBirth:dateOfBirth,
				readyToWork:permission,
				twelthDiplomaCompletion:passOutYear,
				yearOfGraduation:graduationYear,
				gender:gender,
				referralCode:referral,
				workingStatus:workingStatus,
				receiveUpdates:update,
				courseStartDate:courseStartsOn
			};

		
			dispatch(profileData(data,token))
			navigate("/score")
	     }else{
			alert("Not eligible for the course")
			navigate("/dashboard")
		 }
		
	};
	const handleSubmit = () => {
       
		calculate_age();
		let emailFlag = false
		const isValidPhoneNumber = validator.isMobilePhone(number)
		setValidNumber(isValidPhoneNumber)
		if (validator.isEmail(email)) {
		   setEmailError('');
		   emailFlag = true;
		 } else {
		   setEmailError('Enter valid Email!');
		 }




		// let data = { 
		// 	fullName:"Arunraj" ,
		// 	emailId:"arunrajshanker6@gmail.com",
		// 	mob:"7356230040",
		// 	dateOfBirth:"2/4/2002",
		// 	readyToWork:"yes",
		// 	twelthDiplomaCompletion:"3/4/2019",
		// 	yearOfGraduation:"2/3/2022",
		// 	gender:"male",
		// 	referralCode:"AHSO2837",
		// 	workingStatus:"working",
		// 	receiveUpdates:["whatsapp","email"],
		// 	courseStartDate:"4/3/2023"
		// };

		// // ["whatsapp","email"]
		// dispatch(profileData(data,token))





		// mob ,
        // fullName,
        // emailId,
        // gender,
        // workingStatus,
        // receiveUpdates,
        // dateOfBirth ,
        // twelthDiplomaCompletion ,
        // courseStartDate ,
        // yearOfGraduation ,
        // referralCode ,
        // readyToWork
       
	};




	return (
		<>
			<Box p={6} as="form">
				<Text
					w="100%"
					textAlign={"start"}
					fontFamily={"Poppins"}
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"20px"}
					lineHeight={"28px"}
				>
					Profile Details
				</Text>
				<Text
					textAlign={"start"}
					fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"14px"}
					lineHeight={"28px"}
					mt={"1%"}
				>
					Course:
					<span color={"rgba(52, 112, 228, 1)"}>
						{" "}
						Full Stack Web Development (Full Time)
					</span>
				</Text>
				<Text
					textAlign={"start"}
					fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"14px"}
					lineHeight={"2px"}
					mt={"1%"}
				>
					Starts: 24 Jan 2022
				</Text>
				<Text
					textAlign={"start"}
					fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"400"}
					fontSize={"16px"}
					lineHeight={"24px"}
					color={"#544D4F"}
					mt={"1%"}
				>
					Please submit your details to take Masai School Admission Test (MSAT).
				</Text>

				<Flex>
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="first-name"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Name *
						</FormLabel>
						<Input
							placeholder="Full name"
							value={user_name}
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							onChange={() => setName(user_name)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="email"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Email *
						</FormLabel>
						<Input
							id="email"
							placeholder="Email"
							value={user_email}
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={() => setEmail(user_email)}
						/>
						<FormLabel
							htmlFor="email"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							color={"red"}
							fontSize={"10px"}
							lineHeight={"24px"}
						>
							{emailError}
						</FormLabel>
						
					</FormControl>
				</Flex>
				<Flex>
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Mobile Number *
						</FormLabel>
						<Input
							id="mobile-number"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onClick={(e)=>setNumber(e.target.value)}
						/>
						{!validNumber&&<FormLabel
							htmlFor="email"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							color={"red"}
							fontSize={"10px"}
							lineHeight={"24px"}
						>
							Not a valid number
						</FormLabel>}
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Date of Birth *
						</FormLabel>
						<Input
							id="date"
							type="date"
							onChange={(e) => setDateOfBirth(e.target.value)}
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onClick={(e)=>setDateOfBirth(e.target.value)}
						/>
					</FormControl>
				</Flex>
				<Flex>
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Which year did you pass Class 12th/Class 10 + 2 years of Diploma
							in? (Select “Not Complete” if you dropped out or did not pass your
							Class 12th/Class 10 + 2 years of Diploma) *
						</FormLabel>
						<Select
							placeholder="Select year"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"14px"}
							lineHeight={"24px"}
                            onClick={(e)=>setPassOutYear(e.target.value)}
						>
							<option value="NA">NA</option>
							<option value="2023">2023</option>
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2018">2017</option>
							<option value="2018">2016</option>
							<option value="2018">2015</option>
							<option value="2018">2014</option>
							<option value="2018">2013</option>
						</Select>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Which year did you graduate or are graduating in? (Select “Not
							Complete” if you dropped out or did not graduate) *
						</FormLabel>
						<Select
							placeholder="Select year"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onClick={(e)=>setGraduationYear(e.target.value)}
						>
							<option value="NA">NA</option>
							<option value="2027">2027</option>
							<option value="2026">2026</option>
							<option value="2025">2025</option>
							<option value="2024">2024</option>
							<option value="2023">2023</option>
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2017">2017</option>
							<option value="2016">2016</option>
							<option value="2015">2015</option>
						
						</Select>
					</FormControl>
				</Flex>

				<Flex>
					<FormControl mr="5%" mt="2%" onChange={(e)=>setPermission(e.target.value)}>
						<FormLabel
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Are you ready to get employed after completing a course at Masai?
							*
						</FormLabel >
						<RadioGroup   >
							<HStack
								spacing="24px"
								fontFamily={"Open Sans"}
								fontStyle={"normal"}
								fontWeight={"400"}
								fontSize={"16px"}
								lineHeight={"24px"}
                                
							>
								<Radio value="Yes" >Yes</Radio>
								<Radio value="No" >No</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Gender *
						</FormLabel>
						<RadioGroup
							
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onClick={(e)=>setGender(e.target.value)}
						>
							<HStack spacing="24px">
								<Radio value="Male">Male</Radio>
								<Radio value="Female">Female</Radio>
								<Radio value="Others">Others</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>
				</Flex>
				<Flex>
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Referral Code
						</FormLabel>
						<Input
							id="mobile-number"
							placeholder="Enter referral code"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
						
                            onClick={(e)=>setReferral(e.target.value)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Current working status (You will be required to submit a college
							mark sheet or salary slip in the first unit) *
						</FormLabel>
						<Select
							placeholder="Select your current working status"
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							value={workingStatus}
                            onClick={(e)=>setWorkingStatus(e.target.value)}
						>
							<option value="working">Working</option>
							<option value="not working">Not working</option>
						</Select>
					</FormControl>
				</Flex>
				<FormControl mt="2%" onChange={(e)=>setUpdate(e.target.value)}>
					<FormLabel
						htmlFor="date"
						fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"600"}
						fontSize={"14px"}
						lineHeight={"24px"}
					>
						I would like to receive updates about our courses, contests,
						workshops and more via
					</FormLabel>
					<Stack
						spacing={5}
						direction="row"
						fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"400"}
						fontSize={"16px"}
						lineHeight={"24px"}
					>
						<Checkbox value="Masai newsletter">Masai newsletter </Checkbox>
						<Checkbox value="Email updates">Email updates</Checkbox>
						<Checkbox value=">Whatsapp updates">Whatsapp updates</Checkbox>
						<Checkbox value="Automated calls">Automated calls</Checkbox>
					</Stack>
				</FormControl>
				<br />
				<br />
				<hr />
				<ButtonGroup
					mt="5%"
					w="100%"
					alignItems={"flex-end"}
					justifyContent={"flex-end"}
					marginRight={"40px"}
				>
					<Flex
						w={"20%"}
						gap={"4%"}
						alignContent={"flex-end"}
						justifyContent={"space-between"}
					>
						<Button w="7rem" color={"#3470E4"}>
							CANCEL
						</Button>
						<Button
							w="7rem"
							bgColor={"#3470E4"}
							variant="solid"
							color={"white"}
							onClick={handleSubmit}
						>
							SUBMIT
						</Button>
					</Flex>
				</ButtonGroup>
			</Box>
		</>
	);
}