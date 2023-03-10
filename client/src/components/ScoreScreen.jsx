import { Box, Heading, Text} from "@chakra-ui/layout";
import {   ChakraProvider, HStack, Input, Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import circle from "../images/circle.png";
import { scoreData } from "../redux/data/action";
import Cards from "./Cards";
import FailAlertBar from "./FailAlertBar";
import PassAlertBar from "./PassAlertBar";
import ScoreCard from "./ScoreCard";
import theme from "./Theme"
export default function ScoreScreen() {
	const userName = localStorage.getItem("displayName")
	const [main, setMain] = useState(true);
	const [fail, setFail] = useState(false);
	const [pass, setPass] = useState(false);
    const [cognitive, setCognitive] = useState("")
	const [mettl, setMettl] = useState("")
	const [communication , setCommunication ] = useState("")
	 const [credibility , setCredibility ] = useState("")
	 const [status, setStatus] = useState([]);
    const dispatch = useDispatch()
	const id = localStorage.getItem("courseId")
	const token = localStorage.getItem("accessToken")


	const handleClick = ()=>{

		if(cognitive===""||mettl===""||communication===""||credibility===""){
			alert("Enter score")
		}
		else if(cognitive>10||mettl>10||communication>10||credibility>10){
			alert("Enter valid score")
		}
		else if(cognitive<0||mettl<0||communication<0||credibility<0){
			alert("Enter valid score")
		}
		else{
			if(cognitive!==""&&mettl!==""&&communication!==""&&credibility!==""){
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
					let data = {
						courseId:id,
						congAbilityScore:cognitive,
						MetTestScore:mettl,
						communicationScore:communication,
						credibilityScore:credibility,
						status:"pass"
					}
					dispatch(scoreData(data,token))
					
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
					let data = {
						courseId:id,
						congAbilityScore:cognitive,
						MetTestScore:mettl,
						communicationScore:communication,
						credibilityScore:credibility,
						status:"fail"
					}
					dispatch(scoreData(data,token))
					setStatus(failData)
					
				   }
			}
			
		}
      
	}

	return (
		<ChakraProvider theme={theme}>
		
		<Box padding="40px"  height={"620px"}>

		
			{main && <>
				<Box marginBottom={"20px"} >
                <Box>
                <Heading
					textAlign={"left"}
					color={"#957AD8"}
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"20px"}
				>
					Hi {userName} 👋
				</Heading>
				<Text
					textAlign={"left"}
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
			<Box alignSelf={"auto"} marginBottom={"100px"} as="form"  >
				<Heading
					textAlign={"left"}
					fontStyle={"normal"}
					fontWeight={"700"}
					fontSize={"24px"}
				>
					Please submit MSAT section scores
				</Heading>
				<HStack marginTop={"20px"} gap={"94px"} >
					<Text
						
						fontStyle={"normal"}
						fontWeight={"600"}
						fontSize={"24px"}
                        
					>
						Cognitive Ability
					</Text>{" "}
					<Box borderRadius={"10px"} height={"42px"}  width={"140px"} border="2px solid #d1cfd0" >
						
						
						<Input  border={"transparent"} textAlign="center" placeholder="-/10" _placeholder={{color: 'black' ,fontSize:"24px", textAlign:"center"}}   onChange={(e)=>setCognitive(e.target.value)} />
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"100px"}>
					<Text 
						fontStyle={"normal"}
						fontWeight={"600"}
						fontSize={"24px"}>Mettl Text Score</Text>{" "}
					<Box borderRadius={"10px"} height={"42px"} marginLeft={"22px"} width={"140px"} border="2px solid #d1cfd0 " >
						
							<Input border={"transparent"} textAlign="center" placeholder="-/10" _placeholder={{color: 'black' ,fontSize:"24px",textAlign:"center"}} onChange={(e)=>setMettl(e.target.value)}  />
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"41px"}>
					<Text 
						fontStyle={"normal"}
						fontWeight={"600"}
						fontSize={"24px"}>Communication Skills</Text>{" "}
					<Box borderRadius={"10px"} width={"140px"} height={"42px"} border="2px solid #d1cfd0 ">
						<Input border={"transparent"} textAlign="center" placeholder="-/10" _placeholder={{color: 'black' ,fontSize:"24px",textAlign:"center"}} onChange={(e)=>setCommunication(e.target.value)} />
					
					</Box>
				</HStack>
				<HStack marginTop={"20px"} gap={"98px"} >
					<Text 
						fontStyle={"normal"}
						fontWeight={"600"}
						textAlign="center"
						fontSize={"24px"}>Credibility Score</Text>
					<Select width={"140px"} onChange={(e)=>setCredibility(e.target.value)} borderRadius={"10px"} height={"42px"} border="2px solid #d1cfd0 " textAlign="center" fontSize={"24px"} >
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
			<Cards/>
			
			</>
			
			
			}
			{pass &&
			<>
			<PassAlertBar/>
			<ScoreCard status={status}/>
			
			</>
			}
		</Box>
		</ChakraProvider>
		
	);
}