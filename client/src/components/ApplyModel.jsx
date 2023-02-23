import { Heading, Text } from "@chakra-ui/layout";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	useDisclosure,
	useMediaQuery,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function ApplyModel() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [flag, setFlag] = useState(false);
	const [submit,setSubmit]=useState(false)

	const initialRef = useRef(null);
	const finalRef = useRef(null);
	const handleYear = (e) => {
		if (e.target.value !== "NA") {
			setFlag(true);
		} else {
			setFlag(false);
		}
	};








	return (
		<>
			<Button onClick={onOpen} w="200px" color={"white"} bg="blue.400">
				Apply Now
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />

				<ModalContent>
					<Heading
						textAlign={"center"}
						fontSize={"2xl"}
						fontWeight={"bold"}
						marginTop={"10px"}
					>
						Profile Details
					</Heading>
					<Text fontSize={"15px"} textAlign={"center"} margin="25px">
						Welcome! Complete your profile to start applying at Prepleaf
						program.
					</Text>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Mobile number</FormLabel>
							<Input ref={initialRef} placeholder="Enter Mobile number" />
						</FormControl>
						<FormControl>
							<FormLabel>Date of Birth</FormLabel>
							<Input ref={initialRef} placeholder="Enter Date of Birth" />
						</FormControl>
						<FormControl>
							<FormLabel> When did you pass 12th class or diploma?</FormLabel>
							<Input
								ref={initialRef}
								type="date"
								placeholder="Enter Date of Birth"
							/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Graduation year</FormLabel>
							<Select
								placeholder="Select year of graduation"
								onChange={handleYear}
							>
								<option value="NA">NA</option>
								<option value="2023">2023</option>
								<option value="2022">2022</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
							</Select>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>
								Are you ready to work after completion of the course?
							</FormLabel>
							<Select placeholder="select">
								<option value="option1">Yes</option>
								<option value="option2">No</option>
							</Select>
						</FormControl>
						{flag && (
							<FormControl mt={4}>
								<FormLabel>
									Are you completing your graduation through distance learning?
								</FormLabel>
								<Select placeholder="select">
									<option value="option1">Yes</option>
									<option value="option2">No</option>
								</Select>
							</FormControl>
						)}
					</ModalBody>

					<ModalFooter>
						<Button margin={"auto"} width={"380px"} colorScheme="blue" mr={3} onClick={""}>
							SUBMIT
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
