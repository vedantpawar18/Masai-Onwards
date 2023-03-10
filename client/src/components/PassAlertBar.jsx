import { Box, Text, Image } from "@chakra-ui/layout";
import React from "react";
import pass from "../images/pass.png";

const PassAlertBar = () => {
	return (
		<>
			<Box
				bg="white"
				w="100%"
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
						You have successfully cleared MSAT! Complete the id verification to
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
						<Box display={"flex"} gap={"8px"}>SHARE THIS WITH YOUR FRIENDS <svg  width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4ZM17 3V0L24 7L17 14V11L21 7L17 3Z" fill="#3470E4"/>
</svg></Box>
						

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