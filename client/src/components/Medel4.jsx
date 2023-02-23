import {  ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Center } from "@chakra-ui/layout"
import { Button, FormControl, FormLabel, HStack, Image, Input, InputGroup, InputRightElement, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc"
import popup_image from "../images/popup_image.jpg";
import validator from 'validator';
export default function Model4() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showPassword, setShowPassword] = useState(false);
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
const handleClick = ()=>{
     

    if (validator.isEmail(email)) {
        setEmailError('')
      } else {
        setEmailError('Enter valid Email!')
      }
      if (validator.isStrongPassword(password, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setErrorMessage('')
        } else {
          setErrorMessage('Weak Password')
        }
  
        if (validator.isStrongPassword(name, {
          minLength: 3, minLowercase: 1,
          minUppercase: 1, minNumbers: 0, minSymbols: 0
        })) {
          setNameError('')
        } else {
          setNameError('Enter valid name')
        }

}
    return (
      <>
        <Button 
         onClick={onOpen}>Open Modal</Button>
  
        <Modal 
        closeOnOverlayClick={false} 
        isOpen={isOpen} 
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
     
        >
          <ModalOverlay />
          <ModalContent>
          <ModalCloseButton />
           
<Box  color="white"  >
<Image src={popup_image} alt="popup"  />


      </Box>
      <Stack margin={"30px"} spacing={4}>
           
          
            <Stack>
            <Text marginBottom={"5px"} textAlign={"center"}>By signing up, I accept the Prepleaf <Link color={'blue.400'}>Terms of Service </Link> and acknowledge the  <Link color={'blue.400'}>Privacy Policy.</Link></Text>
            </Stack>
        
           
        <Center p={2}>
        
      <Button
        marginTop={"-20px"}
        marginBottom={"-10px"}
        
        w={'500px'}
        
        variant={'outline'} 
        bg="blue.400"
        onClick={handleClick}
       >
        <Center>
          <Text color={"white"}>CONTINUE</Text>
        </Center>
      </Button>
    </Center>
          
         <Text textAlign={"center"}>OR</Text>
         <Center p={2}>
      <Button
       marginTop={"-15px"}
       w={'600px'}
    
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Continue with Google</Text>
        </Center>
      </Button>
    </Center>
   
       
      
            <Stack pt={6}>
              <Text align={'center'} marginTop={"-40px"}>
                Already have an account? <Link color={'blue.400'}>Sign in</Link>
              </Text>
            </Stack>
          </Stack>
       
          </ModalContent>
        </Modal>
      </>
    )
  }