import { Box, Text } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import passalertDesktop from "../images/Pass-Banner-Desktop.png";
import passalertMobile from "../images/Pass-Banner-Mobile.png";

const PassAlertBar = () => {
	const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
	return (
		<>
			{isLargerThan800 ? (
				<Box>
					<Image src={passalertMobile} />
				</Box>
			) : (
				<Box>
					<Image src={passalertDesktop} />
				</Box>
			)}
		</>
	);
};

export default PassAlertBar;
