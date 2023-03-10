import React, { ReactNode, useState } from "react";
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
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Image,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { SlGraduation } from "react-icons/sl";
import { AiOutlineTrophy } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { ReactText } from "react";
import masai_logo from "../images/masai_logo.png";
import AR from "../images/AR.png";
import Cards from "./Cards";
import FailAlertBar from "./FailAlertBar";
import PassAlertBar from "./PassAlertBar";
import { Box } from "@chakra-ui/layout";
import customer_care_icon from "../images/customer_care_icon.jpg";
import ScoreScreen from "./ScoreScreen";
import Avatar from 'react-avatar';
const LinkItems = [
    { name: "Courses", icon: SlGraduation },
    { name: "Contests", icon: AiOutlineTrophy },
    { name: "Events", icon: MdEventAvailable },
    { name: "Self Learning", icon: BsBook },
];
export default function ScoreDashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [apply, setApply] = useState(false);

const handleClick = ()=>{

}




    return (
        
        <Box minH="100vh" >
            <SidebarContent
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
            <ScoreScreen  />
               
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
            <Flex h="20"  alignItems="center" mx="8" justifyContent="space-between">
                <Image src={masai_logo} alt="masai_logo" />
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
  <Box  marginLeft={"10%"} marginTop={"50px"}  textAlign="start" >
<HStack gap={"25px"}>
<Text fontSize={"14px"}>Referral Program</Text>
<Box borderRadius={"7px"} width={"50px"} bg={"red.100"} >
<Text textAlign={"center"} fontSize={"14px"} color={"red"}>NEW</Text>
</Box>
</HStack>
<Text marginTop={"15px"} fontSize={"14px"}>
Documents
</Text>
<Text marginTop={"15px"} fontSize={"14px"}>ISA</Text>
<Text marginTop={"15px"} fontSize={"14px"}>FAQ</Text>
<HStack marginTop={"20px"}>
    <Box >
    <Image src={customer_care_icon} h="50px" w="50px" />
    </Box>
    <Box>
    <Text fontSize={"14px"} fontWeight={"bold"} color={"#6E71CC"}>🟢 Speak to our Team</Text>
    <Text fontSize={"14px"}>Book a slot  </Text>
    </Box>
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
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
const MobileNav = ({ onOpen, ...rest }) => {

    const userName = localStorage.getItem("displayName");

    const handleLogout = ()=>{
	
        localStorage.clear();
        window.location.reload()
    }

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
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
                                <Avatar  size={"25px"}
                                    round="20px"
                                    textSizeRatio={"60px"} name={userName} />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">{userName}</Text>
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