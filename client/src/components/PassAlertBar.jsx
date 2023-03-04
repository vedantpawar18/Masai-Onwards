import { Box, Text, Image } from "@chakra-ui/layout";
import React from "react";
import pass from "../images/pass.png";

const PassAlertBar = () => {
	return (
		<>
			<Box
				bg="white"
				w="900px"
				bgColor={" rgba(238, 255, 247, 1)"}
				height={"136px"}
				color="white"
				display={"flex"}
			>
				<Box width={"70%"} color={"black"} textAlign={"start"} p={4}>
					<Text
						fontFamily={"Poppins"}
						fontWeight={"700"}
						fontSize={"24px"}
						fontStyle={"normal"}
					>
						Congratulations!🤩
					</Text>
					<Text
						fontFamily="Open Sans"
						fontWeight={"400"}
						fontSize={"14px"}
						fontStyle={"normal"}
						color={"#544D4F"}
					>
						You have successfuly cleared MSAT! Complete the id verification to
						get admitted to Masai School.
					</Text>

					<Text
						fontFamily="Open Sans"
						fontWeight={"600"}
						fontSize={"14px"}
						fontStyle={"normal"}
						marginTop="15px"
						color={"#3470E4"}
					>
						SHARE THIS WITH YOUR FRIENDS
					</Text>
				</Box>
				<Box
					width={"30%"}
					// border="1px solid red"
					height={"130px"}
					backgroundPosition="center"
					bgSize={"contain"}
					backgroundRepeat="no-repeat"
					backgroundImage={`url(${pass})`}
				></Box>
			</Box>
		</>
	);
};

export default PassAlertBar;
