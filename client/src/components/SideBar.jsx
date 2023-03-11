import React, { useEffect, useState } from "react";
import {
	IconButton,
	CloseButton,
	Flex,
	HStack,
	VStack,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Image,
	Heading,
} from "@chakra-ui/react";
import Avatar from "react-avatar";
import { FiMenu, FiChevronDown } from "react-icons/fi";

import { SlGraduation } from "react-icons/sl";
import { AiOutlineTrophy } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { BsBook } from "react-icons/bs";

import masai_logo from "../images/masai_logo.png";

import Cards from "./Cards";

import { Box } from "@chakra-ui/layout";

import Speak_to_our_Team from "../images/Speak_to_our_Team.png";
import { useDispatch, useSelector } from "react-redux";
import PassAlertBar from "./PassAlertBar";
import FailAlertBar from "./FailAlertBar";
import { getData } from "../redux/data/action";
import NextLink from 'next/link'
import { useNavigate } from "react-router-dom";
const LinkItems = [
	{name:'Courses', icon:SlGraduation},
	{ name: "Contests", icon: AiOutlineTrophy },
	{ name: "Events", icon: MdEventAvailable },
	{ name: "Self Learning", icon: BsBook },
];
export default function SideBar() {

	const { isOpen, onOpen, onClose } = useDisclosure();
    const token = localStorage.getItem("accessToken");

   
	const [status,setStatus] = useState(null)
    const dispatch = useDispatch()
	

useEffect(()=>{

	dispatch(getData(token))

},[dispatch,token])


	
   
  
	return (
		<Box minH="100vh">
			<SidebarContent
				width={"264px"}
				height={"760px"}
				onClose={() => onClose}
            
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4">
				<Heading
					textAlign={"start"}
					fontWeight="700"
					fontSize={"24px"}
					marginBottom={"16px"}
				>
					Masai School Courses
				</Heading>
				
				<Cards/>
				
			</Box>
		</Box>
	);
}
const SidebarContent = ({ onClose, ...rest }) => {
	const navigate = useNavigate();
	return (
		<>
			<Box
			
				transition="3s ease"
				bg={useColorModeValue("white", "gray.900")}
				borderRight="1px"
				borderRightColor={useColorModeValue("gray.200", "gray.700")}
				w={{ base: "full", md: 60 }}
				pos="fixed"
				h="full"
				{...rest}
			>
				<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
					<Image src={masai_logo} />
					<CloseButton
						display={{ base: "flex", md: "none" }}
						onClick={onClose}
					/>
				</Flex>

				<NavItem
					key={"Courses"}
					icon={SlGraduation}
					fontWeight={"600"}
					fontSize={"16px"}
					backgroundColor="#F2F7FF"
					color="#3470E4"
					onClick={() => navigate("/dashboard")}
				>
					{"Courses"}
				</NavItem>
				<NavItem
					key={"Contests"}
					icon={AiOutlineTrophy}
					fontWeight={"600"}
					fontSize={"16px"}
				>
					{"Contests"}
				</NavItem>
				<NavItem
					key={"Events"}
					icon={MdEventAvailable}
					fontWeight={"600"}
					fontSize={"16px"}
				>
					{"Events"}
				</NavItem>
				<NavItem
					
					alignItems={"center"}
					key={"Self Learning"}
					icon={BsBook}
					fontWeight={"600"}
					fontSize={"16px"}
				>
					{"Self Learning"}
					<Box
						
						marginLeft={"4px"}
						
					>
						{" "}
						<svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="24" rx="12" fill="#F6EDE7"/>
<path d="M10.5195 17H9.125V8.43359H13.9648V9.61719H10.5195V12.2891H13.7422V13.4668H10.5195V17ZM19.1816 8.43359C19.9199 8.43359 20.5293 8.52344 21.0098 8.70312C21.4941 8.88281 21.8535 9.15625 22.0879 9.52344C22.3262 9.89062 22.4453 10.3574 22.4453 10.9238C22.4453 11.3457 22.3672 11.7051 22.2109 12.002C22.0547 12.2988 21.8496 12.5449 21.5957 12.7402C21.3418 12.9355 21.0703 13.0918 20.7812 13.209L23.2129 17H21.625L19.5566 13.5664H18.1797V17H16.7734V8.43359H19.1816ZM19.0879 9.60547H18.1797V12.4062H19.1523C19.8047 12.4062 20.2773 12.2852 20.5703 12.043C20.8672 11.8008 21.0156 11.4434 21.0156 10.9707C21.0156 10.4746 20.8574 10.123 20.541 9.91602C20.2285 9.70898 19.7441 9.60547 19.0879 9.60547ZM30.5391 17H25.6875V8.43359H30.5391V9.61719H27.0938V11.9434H30.3223V13.1211H27.0938V15.8105H30.5391V17ZM38.4922 17H33.6406V8.43359H38.4922V9.61719H35.0469V11.9434H38.2754V13.1211H35.0469V15.8105H38.4922V17Z" fill="#CC926E"/>
</svg>

					</Box>
				</NavItem>

				<Box marginLeft={"10%"} marginTop={"100px"} textAlign="start">
					<HStack gap={"25px"}>
						<Text fontSize={"14px"} fontWeight={"600"} color={"#544D4F"}>
							Referral Program
						</Text>
						<Box borderRadius={"7px"} width={"50px"} bg={"red.100"}>
							<Text textAlign={"center"} fontSize={"14px"} color={"red"}>
								NEW
							</Text>
						</Box>
					</HStack>
					<Text
						marginTop={"15px"}
						fontSize={"14px"}
						fontWeight={"600"}
						color={"#544D4F"}
					>
						Documents
					</Text>
					<Text
						marginTop={"15px"}
						fontSize={"14px"}
						fontWeight={"600"}
						color={"#544D4F"}
					>
						ISA
					</Text>
					<Text
						marginTop={"15px"}
						fontSize={"14px"}
						fontWeight={"600"}
						color={"#544D4F"}
					>
						FAQ
					</Text>
					<HStack marginTop={"20px"}>
						<Box w="100%">
							<Image src={Speak_to_our_Team} h="70px" w="100%" />
						</Box>
						{/* <Box>
    <Text fontSize={"14px"} fontWeight={"bold"} color={"#6E71CC"}>🟢 Speak to our Team</Text>
    <Text fontSize={"14px"}>Book a slot  </Text>
    </Box> */}
					</HStack>
				</Box>
			</Box>
		</>
	);
};
const NavItem = ({ icon, children, ...rest }) => {
	return (
		<Link
			href="#"
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				color={"black"}
				{...rest}
			>
				{icon && <Icon mr="4" fontSize="16" as={icon} />}
				{children}
			</Flex>
		</Link>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	const userName = localStorage.getItem("displayName");

	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="56px"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>
			<HStack spacing={{ base: "0", md: "6" }}>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
						>
							<HStack>
								{/* <Image
                                    size={"sm"}
                                    backgroundColor={"brown"}
                                    src={AR}
                                    width={"20px"}
                                    height={"20px"}
                                    borderRadius={"50%"}
                                /> */}
								<Avatar
									size={"25px"}
									round="20px"
									textSizeRatio={"60px"}
									name={userName}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm" fontWeight={"600"}>
										{userName}
									</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}
						>
							<MenuItem>Profile</MenuItem>

							<MenuDivider />
							<MenuItem onClick={handleLogout}>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};