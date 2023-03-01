import { Box, Heading, Text} from "@chakra-ui/layout";
import {   HStack, Input, Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useState } from "react";
import circle from "../images/circle.png";
import Cards from "./Cards";
import PassAlertBar from "./PassAlertBar";
import ScoreCard from "./ScoreCard";
export default function ScoreScreen() {

	const [main, setMain] = useState(true);
	const [fail, setFail] = useState(false);
	const [pass, setPass] = useState(false);
    const [cognitive, setCognitive] = useState("")
	const [mettl, setMettl] = useState("")
	const [communication , setCommunication ] = useState("")
	 const [credibility , setCredibility ] = useState("")
	 const [status, setStatus] = useState([]);





	// const data = [
	// 	{"score":10}
	// ]
	
	// const handleSubmit = ()=>{
	// 	for(let i=0; i<data.length; i++){
	// 		 if(data[i].score>5){
	// 		   setStatus(true)
	// 		 }
	// 	}
	// }



	const handleClick = ()=>{

		if(cognitive===""||mettl===""||communication===""||credibility===""){
			alert("Enter score")
		}else{
			if(Number(cognitive)>=6&&Number(mettl)>=6.5&&Number(communication)>=6&&credibility!=="low"){
				setMain(false)
				setPass(true)
				let passData = {
					"cognitive":cognitive,
					"mettl":mettl,
					"communication":communication,
					"credibility":credibility,
                     "status":"Passed",
					 "color":"green"
				}
				setStatus(passData)
			   }else{
				setMain(false)
				setFail(true)
				let failData = {
					"cognitive":cognitive,
					"mettl":mettl,
					"communication":communication,
					"credibility":credibility,
                     "status":"Not cleared",
					 "color":"red"
				}
				setStatus(failData)

			   }
		}
      
	}

console.log("statuzzzzzzzzzz",status)


	return (
		<Box padding="40px"  height={"620px"}>

		
			{main && <>
				<Box marginBottom={"20px"} >
                <Box>
                <Text
					textAlign={"left"}
					color={"#957AD8"}
					fontFamily={"Poppins"}
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"20px"}
				>
					Hi Abishek 👋
				</Text>
				<Text
					textAlign={"left"}
					fontFamily={"Open Sans"}
					fontStyle={"normal"}
					fontWeight={"400"}
					fontSize={"16px"}
					color={"#544D4F"}
				>
					Welcome to masai school, welcome to out courses contents events and
					more
				</Text>
                </Box>
				
                
				<hr width="100%" />
			</Box>
			<Box alignSelf={"auto"} marginBottom={"100px"}>
				<Heading
					textAlign={"left"}
					fontFamily={"Poppins"}
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"24px"}
				>
					Please submit MSAT section scores
				</Heading>
				<HStack marginTop={"20px"} gap={"94px"} >
					<Text
						fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"530"}
						fontSize={"23px"}
                        
					>
						Cognitive Ability
					</Text>{" "}
					<Box borderRadius={"5px"}   width={"120px"} border="1px solid #d1cfd0  ">
						{/* <Text
							fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"530"}
							fontSize={"23px"}
                           
                            
						>
							-/10
						</Text> */}
						<Input placeholder="-/10" onChange={(e)=>setCognitive(e.target.value)} />
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"100px"}>
					<Text fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"530"}
						fontSize={"23px"}>Mettl Text Score</Text>{" "}
					<Box borderRadius={"5px"} marginLeft={"22px"} width={"120px"} border="1px solid #d1cfd0 " >
						{/* <Text fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"530"}
							fontSize={"23px"} >-/10</Text> */}
							<Input placeholder="-/10" onChange={(e)=>setMettl(e.target.value)} />
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"50px"}>
					<Text fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"530"}
						fontSize={"23px"}>Communication Skills</Text>{" "}
					<Box borderRadius={"5px"} width={"120px"} border="1px solid #d1cfd0 ">
						<Input placeholder="-/10" onChange={(e)=>setCommunication(e.target.value)} />
						{/* <Text fontFamily={"Open Sans"}
							fontStyle={"normal"}
							fontWeight={"530"}
							fontSize={"23px"}>-/10</Text> */}
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"95px"}>
					<Text fontFamily={"Open Sans"}
						fontStyle={"normal"}
						fontWeight={"530"}
						fontSize={"23px"}>Credibility Score</Text>
					<Select width={"120px"} onChange={(e)=>setCredibility(e.target.value)}>
					<option value="#">score</option>
						<option value="low">Low</option>
						<option value="high">High</option>
						<option value="medium">Medium</option>
					</Select>
				</HStack>
                
			</Box>
            <hr width={"100%"}  />
            <Box position={"relative"} marginTop={"5px"}>

            <Button colorScheme='blue' position={"absolute"}  right={"0px"} onClick={handleClick}  >Submit</Button>
            </Box>
			</>}
            {fail &&
			<>
		
			<FailAlertBar/>
			<ScoreCard status={status}/>
			<Cards />
			
			</>
			
			
			}
			{pass &&
			<>
			<PassAlertBar/>
			<ScoreCard status={status}/>
			
			</>
			}
		</Box>
	);
}



const FailAlertBar = () => {
	return (
		<>
			<Box
				bg="white"
				w="900px"
				height={"136px"}
				marginTop={"80px"}
				// border="1px solid red"
				marginLeft={"24px"}
				color="white"
				display={"flex"}
              
			>
				<Box width={"70%"} color={"black"} textAlign={"start"}   p={4}>
					<Text
						fontFamily={"Poppins"}
						fontWeight={"700"}
						fontSize={"24px"}
						fontStyle={"normal"}
					>
						Better luck next time
					</Text>
					<Text
						fontFamily="Open Sans"
						fontWeight={"400"}
						fontSize={"14px"}
						fontStyle={"normal"}
						color={"#544D4F"}
					>
						You could not clear MSAT for Full Stack Web Development, starting 24
						Jan 2020. You can try our other courses, contests and events.
					</Text>
				</Box>
				<Box
					width={"30%"}
                    // border="1px solid red"
                    height={"130px"}
					backgroundPosition="center"
		bgSize={"contain"}
					backgroundRepeat="no-repeat"
					backgroundImage={`url(${circle})`}
                   
				></Box>


{/* <Box
				bg="white"
				w="1120px"
				height={"136px"}
				marginTop={"80px"}
				
                backgroundPosition="center"
                bgSize="contain"
                backgroundRepeat="no-repeat"
                backgroundImage={`url(${failPic})`}
				marginLeft={"24px"}
				color="white"
				display={"flex"}
      
			>
				
			</Box> */}
			</Box>
		</>
	);
};
