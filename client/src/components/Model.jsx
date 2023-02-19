import { Heading, Text } from "@chakra-ui/layout"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

export default function Model() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <ModalOverlay />
        
          <ModalContent>
           <Heading textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"} marginTop={"10px"}>Profile Details</Heading>
           <Text fontSize={"15px"} textAlign={"center"} margin="25px">Welcome! Complete your profile to start applying at Prepleaf program.</Text>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Mobile number</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>College name</FormLabel>
<Select placeholder='Ex: IIT Pune'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
              </FormControl>


              <FormControl mt={4}>
                <FormLabel>Graduation year</FormLabel>
<Select placeholder='Select year of graduation'>
  <option value='option1'>2023</option>
  <option value='option2'>2022</option>
  <option value='option3'>2021</option>
  <option value='option3'>2020</option>
  <option value='option3'>2019</option>
  <option value='option3'>2018</option>
</Select>
              </FormControl>


              
              <FormControl mt={4}>
                <FormLabel>Degree</FormLabel>
<Select placeholder='Ex: Bacholers'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
              </FormControl>
              
            </ModalBody>
           
            <ModalFooter>
             
            <Button margin={"auto"} width={"380px"} colorScheme='blue' mr={3} >
                CONTINUE
              </Button>
            </ModalFooter>
           
          </ModalContent>
         
        </Modal>
      </>
    )
  }