import { Box, Text } from "@chakra-ui/layout";
import { Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import failalertDesktop from "../images/Fail-Banner-Desktop.png";
import failalertMobile from "../images/Fail-Banner-Mobile.png";

const FailAlertBar = () => {
	const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
	return (
		<>
			{isLargerThan800 ? (
				<Box>
					<Image src={failalertMobile} />
				</Box>
			) : (
				<Box>
					<Image src={failalertDesktop} />
				</Box>
			)}
		</>
	);
};

export default FailAlertBar;