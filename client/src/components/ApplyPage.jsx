import React, { useEffect, useState } from "react";
import {
	
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,

	FormLabel,
	Input,
	Select,

	RadioGroup,
	Radio,
	Checkbox,
	ChakraProvider,
	useMediaQuery,
} from "@chakra-ui/react";
import validator from 'validator' 
import { useToast } from "@chakra-ui/react";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import { useNavigate, useParams } from "react-router-dom";
import { getData, profileData } from "../redux/data/action";
import { useDispatch, useSelector } from "react-redux";
import Theme from "./Theme";

import '@fontsource/poppins/400.css'
import '@fontsource/open-sans/700.css'



export default function ApplyPage() {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	let userEmail = localStorage.getItem("email");
	let userName = localStorage.getItem("displayName");
	const [name, setName] = useState(userName);
	const [email, setEmail] = useState(userEmail);
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
	const [flag, setFlag] = useState(true)
	const [update, setUpdate] = useState([]);
	const navigate = useNavigate();
    const dispatch = useDispatch()
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(33.33);
	const [warning, setWarning] = useState(false)
	const [ageNow, setAgeNow] = useState("");
	const [dataArray, setdataArray] = useState([]);
	const token = localStorage.getItem("accessToken")
	const data = useSelector((store) => store.data.data) || [];
	let formData = JSON.parse(localStorage.getItem("formData") )|| []
	const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
	

	useEffect(() => {
		dispatch(getData(token));
	}, [dispatch, token]);


     let dataA = []
	useEffect(()=>{
		if(data && data.length!==0 ){
			dataA = data.userFormDetails[0]

		
			setdataArray(dataA)
		}
		},[data])

		console.log("data apply page",dataArray)
	// const data = useSelector((store) => store.data.data.courses)||[];
	// const { id } = useParams();
	// const filter = data.filter((item) => {
	// 	return item._id === id;
	// });

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
			navigate("/score")
	     }else{
			
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
			// alert("Not eligible for the course")
			toast({
				title: 'Not eligible.',
				description: "User not eligible for the course.",
				status: 'warning',
				duration: 5000,
				isClosable: true,
			  })
			// navigate("/dashboard")
		 }
		
	};
	const handleSubmit = () => {
		
		
		
	
		const isValidPhoneNumber = validator.isMobilePhone(number)
		setValidNumber(isValidPhoneNumber)
		if (validator.isEmail(email)) {
		   setEmailError('');
		  
		 } else {
		   setEmailError('Enter valid Email!');
		 }

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


	calculate_age();

		
			
	};

	const handleChange = (e)=>{
	
		if(name!==""&&email!==""&&number!==""&&
		dateOfBirth!==""&&permission!==""
		&&passOutYear!==""&&graduationYear!==""
		&&gender!==""&&workingStatus!==""&&update){
			setFlag(false)
		}else{
			setFlag(true)
		}
   
	}

const handleUpdate = (e)=>{
	e.preventDefault()
	const option = e.target.value;
	let newOption = [...update];
	if(update.includes(option)){
		newOption.splice(newOption.indexOf(option))
	}else{
		newOption.push(option)
	}
	setUpdate(newOption)
}


const handleNext = ()=>{
	let dob = dataArray?.dateOfBirth
	let passOut = dataArray.twelthDiplomaCompletion
	var today = new Date();
		var birthDate = new Date(dob);
		var age_now = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age_now--;
		}
		
        
		setAgeNow(age_now);
		if(age_now>=18&&age_now<=25&&passOut!=="NA"){
          navigate("/score")
		}else{
			setWarning(true)
			toast({
				title: 'Not eligible.',
				description: "User not eligible for the course.",
				status: 'warning',
				duration: 5000,
				isClosable: true,
			  })
      
		}
}



console.log("check",courseStartsOn,workingStatus,referral,gender,graduationYear,passOutYear,permission,dateOfBirth,number)

	return (
		<ChakraProvider theme={Theme}>
			{ isLargerThan800? <Box p={6} as="form" onChange={handleChange}>
				<Heading
					textAlign={"start"}
				
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"20px"}
					lineHeight={"28px"}
					mt={"1%"}
				>
					Profile Details 
				</Heading>
				
				<Text
					textAlign={"start"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"14px"}
					lineHeight={"28px"}
					mt={"1%"}
				>
					Course:
					<span style={{ color: "rgba(52, 112, 228, 1)" }}>
						{" "}
						Full Stack Web Development{" "}
						<span style={{ color: "rgba(26, 159, 189, 1)" }}>(Full Time)</span>
					</span>
				</Text>
				<Text
					textAlign={"start"}
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
					fontStyle={"normal"}
					fontWeight={"400"}
					fontSize={"16px"}
					lineHeight={"24px"}
					color={"#544D4F"}
					mt={"1%"}
				>
					Please submit your details to take Masai School Admission Test (MSAT).
				</Text>
				
			
			
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="first-name"
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Name *
						</FormLabel>
						<Input
							placeholder="Full name"
							value={userName&&userName}
	
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							onChange={() => setName(userName)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="email"
	
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
							value={userEmail&&userEmail}
	
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={() => setEmail(userEmail)}
						/>
						<FormLabel
							htmlFor="email"
	
							fontStyle={"normal"}
							fontWeight={"600"}
							color={"red"}
							fontSize={"10px"}
							lineHeight={"24px"}
						>
							{emailError}
						</FormLabel>
						
					</FormControl>
			
				
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Mobile Number *
						</FormLabel>
						<Input
							id="mobile-number"
							value={dataArray&&dataArray?.mob}
							fontStyle={"normal"}
							placeholder="Mobile number"
							_placeholder={{color: "grey"}}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={(e)=>setNumber(e.target.value)}
						/>
						{!validNumber&&<FormLabel
							htmlFor="email"
	
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
							value={dataArray&&dataArray?.dateOfBirth}
							onChange={(e) => setDateOfBirth(e.target.value)}
							
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
						/>
					</FormControl>
			
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
	
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
							_placeholder={{color: "grey"}}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"14px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.twelthDiplomaCompletion}
                            onChange={(e)=>setPassOutYear(e.target.value)}
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
							_placeholder={{color: "grey"}}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"14px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.yearOfGraduation}
                            onChange={(e)=>setGraduationYear(e.target.value)}
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
				

				
					<FormControl mr="5%" mt="2%" onChange={(e)=>setPermission(e.target.value)} >
						<FormLabel
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Are you ready to get employed after completing a course at Masai?
							*
						</FormLabel >
						<RadioGroup   value={dataArray&&dataArray?.readyToWork}  >
							<HStack
								spacing="24px"
		                     
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

					<FormControl mt="2%" onChange={(e)=>setGender(e.target.value)} > 
						<FormLabel
							htmlFor="date"
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Gender *
						</FormLabel>
						<RadioGroup
							
	                        value={dataArray&&dataArray?.gender}
							
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            
						>
							<HStack spacing="24px">
								<Radio value="Male">Male</Radio>
								<Radio value="Female">Female</Radio>
								<Radio value="Others">Others</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>
			
				
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
	
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
	                       
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={(e)=>setReferral(e.target.value)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
	
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
							
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.workingStatus}
                            onChange={(e)=>setWorkingStatus(e.target.value)}
						>
							<option value="working">Working</option>
							<option value="not working">Not working</option>
						</Select>
					</FormControl>
				
				<FormControl mt="2%" onChange={handleUpdate}>
					<FormLabel
						htmlFor="date"

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
                        
						fontStyle={"normal"}
						fontWeight={"400"}
						fontSize={"16px"}
						lineHeight={"24px"}
					>
						<Checkbox value="Masai newsletter" >Masai newsletter </Checkbox>
						<Checkbox value="Email updates">Email updates</Checkbox>
						<Checkbox value="Whatsapp updates">Whatsapp updates</Checkbox>
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
						
						gap={"4%"}
						alignContent={"flex-end"}
						justifyContent={"space-between"}
					>
						<Button w="7rem" color={"#3470E4"}>
							CANCEL
						</Button>
						{dataArray?.userId?<Button
							w="7rem"
							bgColor={"#3470E4"}
							variant="solid"
							color={"white"}
							onClick={handleNext}
							
						>
							Next
						</Button>:<Button
							w="7rem"
							bgColor={"#3470E4"}
							variant="solid"
							color={"white"}
							onClick={handleSubmit}
							isDisabled={flag}
						>
							SUBMIT
						</Button>}
						
					</Flex>
				
				</ButtonGroup>
				
			</Box>:
			
			<Box p={6} as="form" onChange={handleChange}>
				<Heading
					textAlign={"start"}
				
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"20px"}
					lineHeight={"28px"}
					mt={"1%"}
				>
					Profile Details
				</Heading>
				<Text
					textAlign={"start"}
					fontStyle={"normal"}
					fontWeight={"600"}
					fontSize={"14px"}
					lineHeight={"28px"}
					mt={"1%"}
				>
					Course:
					<span style={{ color: "rgba(52, 112, 228, 1)" }}>
						{" "}
						Full Stack Web Development{" "}
						<span style={{ color: "rgba(26, 159, 189, 1)" }}>(Full Time)</span>
					</span>
				</Text>
				<Text
					textAlign={"start"}
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
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Name *
						</FormLabel>
						<Input
							placeholder="Full name"
							value={userName&&userName}
	
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							onChange={() => setName(userName)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="email"
	
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
							value={userEmail&&userEmail}
	                        
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={() => setEmail(userEmail)}
						/>
						<FormLabel
							htmlFor="email"
	
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
							
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Mobile Number *
						</FormLabel>
						<Input
							id="mobile-number"
	                        value={dataArray&&dataArray?.mob}
							placeholder="Mobile number"
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							_placeholder={{color: "grey"}}
							lineHeight={"24px"}
                            onChange={(e)=>setNumber(e.target.value)}
						/>
						{!validNumber&&<FormLabel
							htmlFor="email"
	
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
							value={dataArray&&dataArray?.dateOfBirth}
							onChange={(e) => setDateOfBirth(e.target.value)}
							
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
						/>
					</FormControl>
				</Flex>
				<Flex>
					<FormControl mr="5%" mt="2%">
						<FormLabel
							htmlFor="number"
	
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
							_placeholder={{color: "grey"}}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"14px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.twelthDiplomaCompletion}
                            onChange={(e)=>setPassOutYear(e.target.value)}
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
							_placeholder={{color: "grey"}}
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"14px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.yearOfGraduation}
                            onChange={(e)=>setGraduationYear(e.target.value)}
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
					<FormControl mr="5%" mt="2%" onChange={(e)=>setPermission(e.target.value)}  >
						<FormLabel
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Are you ready to get employed after completing a course at Masai?
							*
						</FormLabel >
						<RadioGroup value={dataArray&&dataArray?.readyToWork}  >
							<HStack
								spacing="24px"
		
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

					<FormControl mt="2%"  onChange={(e)=>setGender(e.target.value)}> 
						<FormLabel
							htmlFor="date"
	
							fontStyle={"normal"}
							fontWeight={"600"}
							fontSize={"14px"}
							lineHeight={"24px"}
						>
							Gender *
						</FormLabel>
						<RadioGroup
							 value={dataArray&&dataArray?.gender}
							 
	
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            
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
	
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
                            onChange={(e)=>setReferral(e.target.value)}
						/>
					</FormControl>

					<FormControl mt="2%">
						<FormLabel
							htmlFor="date"
	
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
							
							fontStyle={"normal"}
							fontWeight={"400"}
							fontSize={"16px"}
							lineHeight={"24px"}
							value={dataArray&&dataArray?.workingStatus}
                            onChange={(e)=>setWorkingStatus(e.target.value)}
						>
							<option value="working">Working</option>
							<option value="not working">Not working</option>
						</Select>
					</FormControl>
				</Flex>
				<FormControl mt="2%" onChange={handleUpdate}>
					<FormLabel
						htmlFor="date"

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

						fontStyle={"normal"}
						fontWeight={"400"}
						fontSize={"16px"}
						lineHeight={"24px"}
					>
						<Checkbox value="Masai newsletter" >Masai newsletter </Checkbox>
						<Checkbox value="Email updates">Email updates</Checkbox>
						<Checkbox value="Whatsapp updates">Whatsapp updates</Checkbox>
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
						{dataArray?.userId?<Button
							w="7rem"
							bgColor={"#3470E4"}
							variant="solid"
							color={"white"}
							onClick={handleNext}
							
						>
							Next
						</Button>:<Button
							w="7rem"
							bgColor={"#3470E4"}
							variant="solid"
							color={"white"}
							onClick={handleSubmit}
							isDisabled={flag}
						>
							SUBMIT
						</Button>}
						
					</Flex>
				
				</ButtonGroup>
				
			</Box>
			
			
			
			}
			
		</ChakraProvider>
	);
}