import { CheckCircleIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Center } from '@chakra-ui/layout';
import { FcGoogle } from 'react-icons/fc';
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
    useMediaQuery
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import validator from 'validator';
import {  useDispatch, useSelector } from 'react-redux';
import { googleAuth, signInAuth } from '../redux/action';
import { useNavigate,Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import Navbar from './Navbar';
  export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [value, setValue] = useState("");
    const [name, setName] = useState("")
    const [token, setToken] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  auth_token = useSelector((store)=>store.auth.auth);
    const  signin_email = useSelector((store)=>store.auth.auth.email);
    const  full_name = useSelector((store)=>store.auth.auth.full_name);
    let navigate_token = localStorage.getItem("accessToken")
const handleClick = ()=>{
     console.log("clicked")
   let emailFlag = false;
   let passFlag = false;
  
    if (validator.isEmail(email)) {
      setEmailError('')
      emailFlag = true;
    } else {
      setEmailError('Enter valid Email!')
    }
    if (validator.isStrongPassword(password, {
        minLength: 8, minLowercase: 0,
        minUppercase: 0, minNumbers: 0, minSymbols: 0
      })) {
        setErrorMessage('');
        passFlag = true;
      } else {
        setErrorMessage('Weak Password')
      }
      if(emailFlag&&passFlag){
        console.log("check flags", emailFlag, passFlag)
        console.log("check tokenzzzzzz",auth_token.Primarytoken)
        
      let data = {
        email:email,
        password:password
      }
   
           dispatch(signInAuth(data))


      }
      // console.log("check tokenzzzzzz",auth_token)
      if(auth_token.Primarytoken){
        navigate("/dashboard")
       }   
       
}



// useEffect(()=>{
// if(auth_token!==undefined){
//   localStorage.setItem("accessToken",auth_token)
//   localStorage.setItem("displayName",full_name)
//   localStorage.setItem("email",signin_email)
  
// }
// },[auth_token,signin_email,full_name])



  
const handleGoogle = ()=>{
  signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
    
      console.log("data",data.user.accessToken);
      setToken(data.user.accessToken)
      localStorage.setItem("accessToken",data.user.accessToken)
         dispatch(googleAuth(data.user.accessToken))
      localStorage.setItem("displayName",data.user.displayName)

      localStorage.setItem("email",data.user.email)
  }) 
}

useEffect(()=>{

    setValue(localStorage.getItem("email"))
    setName(localStorage.getItem("displayName"))
 

},[name,value])












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
            Sign In
          </Heading>
          <Stack spacing={4}>
            <HStack>
              {/* <Box>
                <FormControl id="name" >
                  <FormLabel>Name</FormLabel>
                  <Input type="text" width={"400px"} placeholder={"Enter your name"} />
                </FormControl>
              </Box> */}
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
            </HStack>
            <FormControl id="email" >
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder='name@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
              <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{emailError}</Text>
            </FormControl>
            <FormControl id="password" >
             
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <FormLabel>Password</FormLabel>
                <Link color={"blue"}>Forgot password?</Link>
              </Stack>
              <InputGroup>
                <Input placeholder='To keep your profile safe' onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
            
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
              <Stack  direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
              <FormLabel color={'red'} fontSize={"10px"} fontWeight={'light'}>{errorMessage}</FormLabel>
              </Stack>
            </FormControl>
            <Stack spacing={10} pt={2}>
             
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                marginBottom={"-22px"}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleClick}
                >
                Sign In
              </Button>
            
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        width={"350px"}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text fontSize={"12px"} onClick={handleGoogle}>CONTINUE WITH GOOGLE</Text>
        </Center>
      </Button>
    
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              Don't have an account? <Link color={"blue"} to="/signup">Sign up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
        </Flex>
       
      </Stack>:
      
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      
      <Box
        rounded={'lg'}
        bg={('white')}
        boxShadow={'lg'}
        p={8}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
          Sign In
        </Heading>
        <Stack spacing={4}>
          <HStack>
            {/* <Box>
              <FormControl id="name" >
                <FormLabel>Name</FormLabel>
                <Input type="text" width={"400px"} placeholder={"Enter your name"} />
              </FormControl>
            </Box> */}
            {/* <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box> */}
          </HStack>
          <FormControl id="email" >
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder='name@mail.com' onChange={(e)=>setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" >
           
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <FormLabel>Password</FormLabel>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <InputGroup>
              <Input placeholder='To keep your profile safe' onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
          
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
            <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
          </FormControl>
          <Stack spacing={10} pt={2}>
           
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              marginBottom={"-22px"}
              onClick={handleClick}
              _hover={{
                bg: 'blue.500',
              }} >
              Sign In
            </Button>
          
    <Button
      w={'full'}
      maxW={'md'}
      variant={'outline'}
      width={"300px"}
      leftIcon={<FcGoogle />}>
      <Center>
        <Text fontSize={"12px"}>CONTINUE WITH GOOGLE</Text>
      </Center>
    </Button>
  
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
             Don't have an account? <Link color={"blue"}  to="/signup">Sign up</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
      
      
      }

      </>
    );
  }