import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import circle from "../images/circle.png";

const FailAlertBar = () => {
	return (
		<>
			<Box
				bg="white"
				w="100%"
				
				height={"136px"}

				color="white"
				display={"flex"}
			>
				<Box width={"70%"} color={"black"} textAlign={"start"}  mt={"2px"} >
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

export default FailAlertBar;