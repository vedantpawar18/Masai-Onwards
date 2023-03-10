import React, { useState } from "react";
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
const LinkItems = [
	{ name: "Courses", icon: SlGraduation },
	{ name: "Contests", icon: AiOutlineTrophy },
	{ name: "Events", icon: MdEventAvailable },
	{ name: "Self Learning", icon: BsBook },
];
export default function SideBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();


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
				<Cards />
			</Box>
		</Box>
	);
}
const SidebarContent = ({ onClose, ...rest }) => {
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
				{LinkItems.map((link) => (
					<NavItem
						key={link.name}
						icon={link.icon}
						fontWeight={"600"}
						fontSize={"16px"}
					>
						{link.name}
					</NavItem>
				))}
				<Box marginLeft={"10%"} marginTop={"50px"} textAlign="start">
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