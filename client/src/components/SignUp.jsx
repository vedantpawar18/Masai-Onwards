import { CheckCircleIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    InputRightElement,
    InputGroup,
    Box,
    HStack,
    List,
    ListItem,
    ListIcon,
    useMediaQuery,
  } from '@chakra-ui/react';
  import validator from 'validator';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  verifyData } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const  auth_token = useSelector((store)=>store.auth.auth)
   console.log("auth_token",auth_token)
    const navigate = useNavigate()
const handleClick = ()=>{
     
  let emailFlag = false;
  let passFlag = false;
  let nameFlag = false;

    if (validator.isEmail(email)) {
      setEmailError('');
      emailFlag = true;
    } else {
      setEmailError('Enter valid Email!');
    }
    if (validator.isStrongPassword(password, {
        minLength: 8, minLowercase: 0,
        minUppercase: 0, minNumbers: 0, minSymbols: 0
      })) {
        setErrorMessage('')
        passFlag = true;
      } else {
        setErrorMessage('Weak Password');
      }

      if (validator.isStrongPassword(name, {
        minLength: 3, minLowercase: 1,
        minUppercase: 1, minNumbers: 0, minSymbols: 0
      })) {
        setNameError('');
        nameFlag = true;
      } else {
        setNameError('Enter valid name');
      }

    
      
     if(emailFlag&&passFlag&&nameFlag){

      let data = {
        email:email,
        password:password,
        fullName:name
      }
      
     
      
      dispatch(verifyData(data));
     }
 
    
 

   
}






useEffect(()=>{
if(auth_token){
  if(auth_token!==undefined){
    navigate("/dashboard")
  }
}
if(auth_token==="User already exists"){
  setUser('User already exist please sign in')
}
},[auth_token,navigate])



    return (
        <>
          <Navbar/>
      {isLargerThan800?<Stack minH={'100vh'} direction={{ base: 'row', md: 'row' }}>
       
         <Flex flex={1} p={8}  bg={('gray.50')} >

         <Box>



<Box >
<Heading fontSize={"30px"} paddingTop={"100px"} textAlign={"left"}>
         Get access to a one-stop solution for securing your dream internship
         </Heading>
         <Box paddingTop={"30px"}>
         <List spacing={3} textAlign={"start"}>
         
  <ListItem>
  <ListIcon as={CheckCircleIcon} color='blue.500'/>
    Earn a stipend of up to ₹60,000 by enrolling in India's first 
    outcome-based internship program or get ALL of your money back.
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='blue.500'/>
    Start learning with certified industry-relevant course videos 
    and 1000+ practise questions to make you unstoppable.
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='blue.500'/>
    Attempt live tests and assignments along with personalised 
    recommendations to help you navigate to success.
  </ListItem>
</List>

         </Box>
    
</Box>
         </Box>

         
        </Flex>
        <Flex p={6} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      
        <Box
          rounded={'lg'}
          bg={('white')}
          boxShadow={'lg'}
          p={8}>
              <Heading fontSize={'3xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="name" >
                  <FormLabel>Name</FormLabel>
                  <Input type="text" width={"400px"} value={name} onChange={(e)=>setName(e.target.value)} placeholder={"Enter your name"} />
                  <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{nameError}</Text>
                </FormControl>
              </Box>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
            </HStack>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} placeholder='name@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
              <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{emailError}</Text>
            </FormControl>
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input placeholder='To keep your profile safe' value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
              
                <InputRightElement h={'full'}>
                
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                 
            
                </InputRightElement>
              </InputGroup>
              <Stack direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
            <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
            <FormLabel color={'red'} fontSize={"10px"} fontWeight={'light'}>{errorMessage}</FormLabel>
            </Stack>
            </FormControl>
            {user&&<Text color={"red"} fontSize={"12px"}>{user}</Text>}
            <Stack spacing={10} pt={2}>
                <Text>By signing up, I accept the Prepleaf <Link color={'blue.400'}>Terms of Service</Link> and acknowledge the  <Link color={'blue.400'}>Privacy Policy.</Link></Text>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleClick}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              Already have an account? <Link color={'blue.400'} to="/signin"><span style={{color:"blue"}}>Sign in</span></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
        </Flex>
       
      </Stack>:<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      
      <Box
        rounded={'lg'}
        bg={('white')}
        boxShadow={'lg'}
        p={8}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
          Sign up
        </Heading>
        <Stack spacing={4}>
         
            <Box>
              <FormControl id="name" >
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} placeholder={"Enter your name"} onChange={(e)=>setName(e.target.value)} />
                <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{nameError}</Text>
              </FormControl>
            </Box>
          
          <FormControl id="email" >
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} placeholder='name@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
            <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{emailError}</Text>
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input placeholder='To keep your profile safe' value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
          
              <InputRightElement h={'full'}>
              
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
               
          
              </InputRightElement>
            </InputGroup>
            <Stack direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                  <Flex gap={"25px"}  justify={'space-between'}>
                  <FormLabel color={'red'} fontSize={"10px"} fontWeight={'light'}>{errorMessage}</FormLabel>
            <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
          
            </Flex>
            </Stack>
           
          </FormControl>
          {user&&<Text color={"red"} fontSize={"12px"}>{user}</Text>}
          <Stack spacing={10} pt={2}>
              <Text>By signing up, I accept the Prepleaf <Link color={'blue.400'}>Terms of Service</Link> and acknowledge the  <Link color={'blue.400'}>Privacy Policy.</Link></Text>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}  onClick={handleClick}>
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already have an account? <Link color={'blue.400'} to="/signin"><span style={{color:"blue"}}>Sign in</span></Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>}

      </>
    );
  }