// import { CheckCircleIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Center } from '@chakra-ui/layout';
// import { FcGoogle } from 'react-icons/fc';
// import {
//     Button,
//     Flex,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Link,
//     Stack,
//     Text,
//     InputRightElement,
//     InputGroup,
//     Box,
//     HStack,
//     List,
//     ListItem,
//     ListIcon,
//     useMediaQuery
//   } from '@chakra-ui/react';
// import { useState } from 'react';
// import validator from 'validator';

//   export default function SignIn() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
//     const [emailError, setEmailError] = useState('')
//     const [errorMessage, setErrorMessage] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


// const handleClick = ()=>{
     

  
//     if (validator.isEmail(email)) {
//       setEmailError('')
//     } else {
//       setEmailError('Enter valid Email!')
//     }
//     if (validator.isStrongPassword(password, {
//         minLength: 8, minLowercase: 1,
//         minUppercase: 1, minNumbers: 1, minSymbols: 1
//       })) {
//         setErrorMessage('')
//       } else {
//         setErrorMessage('Weak Password')
//       }

// }

// console.log("emailError",emailError)

//     return (
//         <>
//       {isLargerThan800?<Stack minH={'100vh'} direction={{ base: 'row', md: 'row' }}>
       
//          <Flex flex={1} p={8}  bg={('gray.50')} >

//          <Box>
// <svg width="140" height="47" viewBox="0 0 140 47" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M51.4518 14.7329H49.3637V21.4836H45.1755V3.56424H51.5358C55.34 3.56424 58.3162 4.97799 58.3162 9.08966C58.3402 13.2249 55.088 14.7329 51.4518 14.7329ZM51.2118 7.03972H49.3877V11.2692H51.1518C52.7119 11.2692 54.164 10.7862 54.164 9.08966C54.14 7.38137 52.7119 7.03972 51.2118 7.03972Z" fill="black"/>
// <path d="M67.1966 12.2706C66.8245 12.1763 66.4885 12.1292 66.1645 12.1292C64.0044 12.1292 63.2964 13.9435 63.2964 14.9921V21.4718H59.2642V8.8658H63.1403V10.6801H63.1884C63.8004 9.40774 64.9884 8.50058 66.4885 8.50058C66.8005 8.50058 67.1486 8.52414 67.3526 8.59483L67.1966 12.2706Z" fill="black"/>
// <path d="M80.3371 16.3234H71.4807C71.6127 17.7136 72.9567 18.715 74.3848 18.715C75.6569 18.715 76.5449 18.173 77.0729 17.3955L79.8691 19.2098C78.729 20.9416 76.8089 21.8959 74.3248 21.8959C70.6526 21.8959 67.6045 19.4808 67.6045 15.2277C67.6045 11.1161 70.4846 8.47705 74.1928 8.47705C77.805 8.47705 80.3131 11.0218 80.3131 15.3455C80.3611 15.6636 80.3611 16.0053 80.3371 16.3234ZM76.6649 13.7315C76.6649 12.412 75.8489 11.3163 74.2648 11.3163C72.7287 11.3163 71.6007 12.4356 71.4927 13.7315H76.6649Z" fill="black"/>
// <path d="M89.3496 21.8253C87.8495 21.8253 86.3975 21.1655 85.6534 20.0699H85.6054V27.5274H81.5732V8.88942H85.4014V10.4328H85.4734C86.2055 9.40779 87.5855 8.54776 89.3736 8.54776C92.9138 8.54776 95.1699 11.6462 95.1699 15.1453C95.1699 18.6443 93.0218 21.8253 89.3496 21.8253ZM88.4016 11.9172C86.6015 11.9172 85.4494 13.5548 85.4494 15.1453C85.4494 16.7829 86.5775 18.3734 88.4016 18.3734C90.3217 18.3734 91.2697 16.7593 91.2697 15.0982C91.2577 13.5077 90.3217 11.9172 88.4016 11.9172Z" fill="black"/>
// <path d="M96.946 21.4836V2.33899H101.014V21.4718H96.946V21.4836Z" fill="black"/>
// <path d="M115.511 16.3234H106.655C106.787 17.7136 108.131 18.715 109.559 18.715C110.831 18.715 111.719 18.173 112.247 17.3955L115.043 19.2098C113.903 20.9416 111.983 21.8959 109.499 21.8959C105.826 21.8959 102.778 19.4808 102.778 15.2277C102.778 11.1161 105.658 8.47705 109.367 8.47705C112.979 8.47705 115.487 11.0218 115.487 15.3455C115.535 15.6636 115.535 16.0053 115.511 16.3234ZM111.827 13.7315C111.827 12.412 111.011 11.3163 109.427 11.3163C107.891 11.3163 106.763 12.4356 106.655 13.7315H111.827Z" fill="black"/>
// <path d="M116.915 10.5977C118.343 9.20749 120.371 8.47705 122.351 8.47705C126.443 8.47705 127.967 10.5506 127.967 15.1453V21.4954H124.295V20.1405H124.223C123.611 21.1891 122.219 21.7781 120.767 21.7781C118.835 21.7781 116.339 20.8003 116.339 17.8196C116.339 14.1792 120.635 13.5666 124.175 13.5666V13.3898C124.175 12.141 123.227 11.5755 121.979 11.5755C120.839 11.5755 119.687 12.1646 118.967 12.8715L116.915 10.5977ZM124.319 15.9817H123.815C122.051 15.9817 120.071 16.2056 120.071 17.7136C120.071 18.6679 120.995 19.0095 121.811 19.0095C123.419 19.0095 124.343 17.9845 124.343 16.4176V15.9817H124.319Z" fill="black"/>
// <path d="M137.772 5.40209C137.484 5.30784 137.064 5.22537 136.668 5.22537C135.192 5.22537 134.88 6.42706 134.88 7.61697V8.88935H137.616V12.0114H134.88V21.4953H130.848V12.0114H128.604V8.88935H130.824V7.67587C130.824 4.5774 131.988 1.87949 136.068 1.87949C136.752 1.87949 137.46 1.95017 138 2.12689L137.772 5.40209Z" fill="black"/>
// <path d="M3.43732 14.2498C3.40132 14.2145 3.34133 14.1673 3.28134 14.1084C3.24534 14.0731 3.19735 14.026 3.13735 13.9788L1.12158 11.976C1.97349 12.8125 3.12535 13.9317 3.43732 14.2498Z" fill="black"/>
// <path d="M21.3186 10.7155C20.9586 11.5401 20.4665 12.3413 19.8305 13.1542L16.0263 9.45486C16.0503 9.30171 16.0623 9.13677 16.0623 8.97183C16.0503 8.1707 15.7143 7.45204 15.0423 6.79229C14.3703 6.13254 13.6142 5.80266 12.7862 5.7791C11.9461 5.76732 11.1901 6.08541 10.5181 6.74517L7.68594 9.52555L4.21777 6.10898L7.03791 3.34038C9.22201 1.19618 11.4781 0.0887422 13.8062 0.00627328C16.1463 -0.0761957 18.1024 0.654244 19.6865 2.20937C20.9586 3.44641 21.7146 5.09579 21.9906 7.14573C22.1106 8.20605 21.8946 9.39595 21.3186 10.7155Z" fill="black"/>
// <path d="M20.0104 15.3455L16.8423 18.4558L11.874 13.5548L15.0422 10.421L20.0104 15.3455Z" fill="url(#paint0_linear_1_5329)"/>
// <path d="M39.0673 2.79846L24.3546 17.2423C24.3546 17.2423 24.3426 17.2541 24.3306 17.2659C24.3306 17.2659 24.3186 17.2777 24.3066 17.2894L24.2106 17.3837C24.1986 17.3955 24.1746 17.419 24.1506 17.4426L24.1146 17.4779L24.0666 17.5251C24.0546 17.5368 24.0306 17.5604 24.0186 17.5722L23.9706 17.6193C23.8506 17.7371 23.6946 17.8903 23.5386 18.0434C23.5146 18.067 23.4906 18.0906 23.4666 18.1141L23.4306 18.1495C23.4066 18.173 23.3826 18.1966 23.3586 18.2202C22.5905 18.9742 21.5585 19.9874 20.9704 20.5646L20.8624 20.6707C20.7304 20.8003 20.6224 20.9063 20.5624 20.9652C20.0824 21.4364 19.4104 20.9652 19.4104 20.9652L16.9743 18.5736L16.8542 18.4558L20.0224 15.3455L29.9349 5.50816L39.0673 2.79846Z" fill="#00ABDB"/>
// <path d="M24.3546 17.2424C24.3546 17.2424 24.3426 17.2541 24.3306 17.2659C24.3306 17.2659 24.3186 17.2777 24.3066 17.2895L24.2586 17.3366C24.2466 17.3484 24.2226 17.372 24.2106 17.3837C24.1986 17.3955 24.1746 17.4191 24.1506 17.4426C24.1386 17.4544 24.1266 17.4662 24.1146 17.478C24.1026 17.4898 24.0906 17.5016 24.0666 17.5251C24.0546 17.5369 24.0306 17.5605 24.0186 17.5722C24.0066 17.584 23.9826 17.6076 23.9706 17.6194C23.8506 17.7372 23.6946 17.8903 23.5386 18.0435C23.5146 18.0671 23.4906 18.0906 23.4666 18.1142L23.4306 18.1495C23.4066 18.1731 23.3826 18.1967 23.3586 18.2202C22.5905 18.9742 21.5585 19.9874 20.9704 20.5647C20.9344 20.6 20.8984 20.6354 20.8624 20.6707C20.7304 20.8003 20.6224 20.9063 20.5624 20.9653C20.0824 21.4365 19.4104 20.9653 19.4104 20.9653L16.9743 18.5737L16.8542 18.4558L20.0224 15.3456L24.3546 17.2424Z" fill="#00ABDB"/>
// <path d="M22.2306 25.2064L18.4384 29L3.28169 14.0967C3.34169 14.1556 3.40169 14.2027 3.43769 14.2381C3.12568 13.92 1.97362 12.8007 1.12158 11.9761L3.13768 13.9671C2.53765 13.4134 1.37359 12.3177 0.689562 11.6462C0.677562 11.6344 0.653561 11.6108 0.64156 11.5991C0.629559 11.5873 0.605558 11.5755 0.593558 11.5519L0.233541 11.1985L0.22154 11.1867C0.233541 11.1867 0.22154 11.1749 0.209539 11.1632C0.185538 11.1396 0.173538 11.116 0.149537 11.0925C0.113535 11.0453 0.0775331 10.9982 0.0655325 10.9511C0.0535319 10.9275 0.0535319 10.9157 0.0415314 10.8922C0.0415314 10.8804 0.0295308 10.8568 0.0295308 10.8451C-0.0424726 10.6094 0.0295308 10.3856 0.113535 10.2324C0.113535 10.2206 0.125535 10.2206 0.125535 10.2089C0.161537 10.15 0.185538 10.1028 0.22154 10.0675C0.233541 10.0557 0.233541 10.0439 0.245541 10.0321C0.245541 10.0321 0.257542 10.0321 0.257542 10.0204L0.269542 10.0086L0.389548 9.89077L3.5337 6.7923L6.96586 10.1853L22.2306 25.2064Z" fill="black"/>
// <path d="M3.43732 14.2498C3.40132 14.2145 3.34133 14.1673 3.28134 14.1084C3.24534 14.0731 3.19735 14.026 3.13735 13.9788L1.12158 11.976C1.97349 12.8125 3.12535 13.9317 3.43732 14.2498Z" fill="black"/>
// <path d="M133.648 31.3481C134.327 31.3481 134.845 30.8323 134.845 30.1741C134.845 29.5159 134.291 29 133.648 29C133.005 29 132.452 29.5159 132.452 30.1741C132.434 30.8145 132.988 31.3481 133.648 31.3481Z" fill="#0A0103"/>
// <path d="M88.0001 33.2693C88.6966 33.2693 89.4289 33.2693 90.1432 33.2693C90.1432 33.7318 90.1432 34.1588 90.1432 34.6568C90.7147 33.4828 91.6791 33.0736 92.8757 33.0914C94.0723 33.1092 95.0009 33.6429 95.5367 34.728C95.7332 34.4967 95.9117 34.2299 96.1261 34.0164C96.6797 33.4472 97.3762 33.1804 98.162 33.127C98.6799 33.0914 99.1978 33.127 99.6979 33.3049C100.609 33.6073 101.18 34.2655 101.52 35.1194C101.752 35.742 101.823 36.4002 101.823 37.0583C101.823 38.606 101.823 40.1358 101.823 41.6835C101.823 41.719 101.823 41.7724 101.823 41.808C101.127 41.808 100.43 41.808 99.6979 41.808C99.6979 41.719 99.6979 41.6479 99.6979 41.5945C99.6979 40.1536 99.6979 38.7483 99.6979 37.3074C99.6979 36.9872 99.6622 36.6314 99.5729 36.329C99.3764 35.6708 98.9478 35.2795 98.2334 35.1905C97.4476 35.1016 96.7869 35.315 96.3582 36.0266C96.1439 36.3824 96.0546 36.7381 96.0368 37.1295C96.0189 38.606 96.0189 40.0647 96.0189 41.5412C96.0189 41.6301 96.0189 41.719 96.0189 41.808C95.3045 41.808 94.5902 41.808 93.8579 41.808C93.8579 41.719 93.8579 41.6479 93.8579 41.5767C93.8579 40.0469 93.8579 38.5348 93.8579 37.005C93.8579 36.5069 93.7329 36.0444 93.3757 35.6708C92.8578 35.0838 92.1792 35.066 91.4827 35.2795C90.6969 35.5107 90.3397 36.1333 90.2325 36.916C90.2147 37.1829 90.1968 37.4675 90.1968 37.7521C90.1968 39.0329 90.1968 40.2959 90.1968 41.5767C90.1968 41.6657 90.1968 41.7368 90.1968 41.8436C89.4824 41.8436 88.7502 41.8436 88.0358 41.8436C88.0001 38.944 88.0001 36.0977 88.0001 33.2693Z" fill="#0A0103"/>
// <path d="M110.235 34.2656C110.235 33.981 110.235 33.643 110.235 33.2694C110.949 33.2694 111.664 33.2694 112.378 33.2694C112.378 36.0978 112.378 38.9263 112.378 41.7547C111.682 41.7547 110.985 41.7547 110.253 41.7547C110.253 41.3989 110.253 41.0432 110.253 40.6874C110.217 40.7052 110.181 40.7052 110.181 40.7052C109.61 41.4701 108.806 41.8081 107.878 41.9326C106.485 42.1105 105.252 41.7014 104.27 40.6696C103.573 39.958 103.198 39.0508 103.091 38.0546C102.984 36.9873 103.127 35.9911 103.698 35.0661C104.591 33.643 105.913 33.0026 107.592 33.0915C108.378 33.1271 109.074 33.3584 109.717 33.8564C109.896 34.0165 110.074 34.1411 110.235 34.2656ZM107.681 35.0483C106.306 35.0483 105.252 36.0978 105.252 37.4854C105.252 38.8729 106.324 39.9758 107.681 39.9758C109.074 39.9758 110.199 38.8907 110.199 37.4854C110.181 36.1512 109.074 35.0483 107.681 35.0483Z" fill="#0A0103"/>
// <path d="M128.701 34.2833C128.701 33.9809 128.701 33.6251 128.701 33.2871C129.416 33.2871 130.13 33.2871 130.844 33.2871C130.844 36.1156 130.844 38.944 130.844 41.7725C130.148 41.7725 129.451 41.7725 128.701 41.7725C128.701 41.4167 128.701 41.0609 128.701 40.6695C128.523 40.8474 128.398 40.9897 128.237 41.1321C127.541 41.7191 126.683 41.9681 125.772 41.9681C124.576 41.9681 123.54 41.5412 122.719 40.6695C122.004 39.9224 121.647 39.0152 121.558 37.9834C121.468 36.9161 121.647 35.8843 122.236 34.9771C123.129 33.6251 124.415 33.0203 126.058 33.1093C126.844 33.1448 127.558 33.3761 128.183 33.8742C128.38 34.0165 128.523 34.1588 128.701 34.2833ZM126.147 35.0483C124.772 35.0483 123.719 36.0978 123.719 37.4853C123.719 38.8729 124.79 39.9758 126.147 39.9758C127.54 39.9758 128.666 38.8907 128.666 37.4853C128.666 36.1512 127.523 35.0483 126.147 35.0483Z" fill="#0A0103"/>
// <path d="M120.415 35.742C119.736 35.742 119.057 35.742 118.379 35.742C118.164 34.8704 117.236 34.4968 116.486 34.9771C115.914 35.3329 115.932 36.0266 116.521 36.3113C116.896 36.4892 117.307 36.5781 117.7 36.6848C118.307 36.8627 118.95 36.9872 119.522 37.3075C120.754 38.019 121.075 39.5489 120.236 40.6873C119.807 41.2922 119.164 41.6302 118.45 41.8258C117.289 42.1282 116.146 42.0571 115.075 41.4523C114.217 40.972 113.717 40.2248 113.646 39.2464C113.646 39.2287 113.646 39.2109 113.646 39.1575C114.325 39.1575 114.985 39.1575 115.664 39.1575C115.736 39.7445 116.075 40.1003 116.664 40.2248C117.129 40.3316 117.575 40.296 118.021 40.1003C118.397 39.9224 118.539 39.62 118.522 39.2642C118.504 38.9796 118.307 38.7839 118.057 38.695C117.7 38.5705 117.343 38.4815 116.968 38.3748C116.378 38.2147 115.789 38.0724 115.218 37.7878C113.86 37.094 113.646 35.6353 114.128 34.6925C114.485 34.0165 115.039 33.5896 115.753 33.3583C116.986 32.9492 118.182 33.0381 119.325 33.7141C120.075 34.1766 120.397 34.8526 120.432 35.6887C120.432 35.6887 120.415 35.7064 120.415 35.742Z" fill="#0A0103"/>
// <path d="M134.863 33.2872C134.863 36.1156 134.863 38.9441 134.863 41.7725C134.148 41.7725 133.434 41.7725 132.72 41.7725C132.72 38.9441 132.72 36.1156 132.72 33.2872C133.452 33.2872 134.148 33.2872 134.863 33.2872Z" fill="#0A0103"/>
// <path d="M134.845 33.2872H132.72V39.0152L134.863 36.418L134.845 33.2872Z" fill="#ED0331"/>
// <path d="M136.113 40.6518C136.113 40.4739 136.149 40.296 136.238 40.1715C136.327 40.0114 136.434 39.9046 136.595 39.8157C136.756 39.7268 136.899 39.6912 137.077 39.6912C137.256 39.6912 137.399 39.7268 137.559 39.8157C137.72 39.9046 137.827 40.0114 137.917 40.1715C138.006 40.3316 138.042 40.4739 138.042 40.6518C138.042 40.8297 138.006 40.972 137.917 41.1321C137.827 41.2922 137.72 41.3989 137.559 41.5056C137.399 41.5946 137.256 41.6302 137.059 41.6302C136.881 41.6302 136.702 41.5946 136.559 41.5056C136.399 41.4167 136.291 41.2922 136.202 41.1499C136.149 40.972 136.113 40.8297 136.113 40.6518ZM136.274 40.6518C136.274 40.8119 136.309 40.9364 136.381 41.0609C136.452 41.1854 136.559 41.2744 136.684 41.3633C136.809 41.4345 136.952 41.4701 137.095 41.4701C137.256 41.4701 137.381 41.4345 137.506 41.3633C137.631 41.2922 137.72 41.1854 137.809 41.0609C137.881 40.9364 137.917 40.7941 137.917 40.6518C137.917 40.4917 137.881 40.3672 137.809 40.2426C137.738 40.1181 137.631 40.0292 137.506 39.9402C137.381 39.8691 137.238 39.8335 137.095 39.8335C136.934 39.8335 136.809 39.8691 136.684 39.9402C136.559 40.0114 136.47 40.1181 136.381 40.2426C136.309 40.3672 136.274 40.4917 136.274 40.6518ZM136.881 41.1677H136.684V40.0647H137.059C137.184 40.0647 137.292 40.0825 137.381 40.1537C137.47 40.2248 137.488 40.2782 137.488 40.3849C137.488 40.4917 137.417 40.5806 137.309 40.6162C137.417 40.6518 137.488 40.7407 137.488 40.883V40.972C137.488 41.0431 137.488 41.0965 137.506 41.1321V41.1499H137.309C137.292 41.1321 137.292 41.0609 137.292 40.972C137.292 40.883 137.292 40.8475 137.292 40.8119C137.274 40.7229 137.22 40.6874 137.113 40.6874H136.881V41.1677ZM136.881 40.5806H137.095C137.167 40.5806 137.202 40.5628 137.256 40.545C137.292 40.5273 137.327 40.4739 137.327 40.4383C137.327 40.3672 137.309 40.3316 137.292 40.3138C137.256 40.296 137.184 40.2782 137.095 40.2782H136.899V40.5806H136.881Z" fill="#0A0103"/>
// <path d="M70.3301 35.21C70.4901 34.95 70.7201 34.74 71.0201 34.58C71.3201 34.42 71.6635 34.34 72.0501 34.34C72.5101 34.34 72.9268 34.4567 73.3001 34.69C73.6735 34.9233 73.9668 35.2567 74.1801 35.69C74.4001 36.1233 74.5101 36.6267 74.5101 37.2C74.5101 37.7733 74.4001 38.28 74.1801 38.72C73.9668 39.1533 73.6735 39.49 73.3001 39.73C72.9268 39.9633 72.5101 40.08 72.0501 40.08C71.6568 40.08 71.3135 40.0033 71.0201 39.85C70.7268 39.69 70.4968 39.48 70.3301 39.22V40H68.6201V32.6H70.3301V35.21ZM72.7701 37.2C72.7701 36.7733 72.6501 36.44 72.4101 36.2C72.1768 35.9533 71.8868 35.83 71.5401 35.83C71.2001 35.83 70.9101 35.9533 70.6701 36.2C70.4368 36.4467 70.3201 36.7833 70.3201 37.21C70.3201 37.6367 70.4368 37.9733 70.6701 38.22C70.9101 38.4667 71.2001 38.59 71.5401 38.59C71.8801 38.59 72.1701 38.4667 72.4101 38.22C72.6501 37.9667 72.7701 37.6267 72.7701 37.2Z" fill="#0A0103"/>
// <path d="M81.1072 34.42L77.6072 42.65H75.7672L77.0472 39.81L74.7772 34.42H76.6872L77.9772 37.91L79.2572 34.42H81.1072Z" fill="#0A0103"/>
// <defs>
// <linearGradient id="paint0_linear_1_5329" x1="13.4547" y1="11.9854" x2="18.3904" y2="16.9551" gradientUnits="userSpaceOnUse">
// <stop stop-color="#00ABDB"/>
// <stop offset="1" stop-color="#144B98"/>
// </linearGradient>
// </defs>
// </svg>


// <Box >
// <Heading fontSize={"30px"} paddingTop={"100px"} textAlign={"left"}>
//          Get access to a one-stop solution for securing your dream internship
//          </Heading>
//          <Box paddingTop={"30px"}>
//          <List spacing={3} textAlign={"start"}>
         
//   <ListItem>
//   <ListIcon as={CheckCircleIcon} color='blue.500'/>
//     Earn a stipend of up to ₹60,000 by enrolling in India's first 
//     outcome-based internship program or get ALL of your money back.
//   </ListItem>
//   <ListItem>
//     <ListIcon as={CheckCircleIcon} color='blue.500'/>
//     Start learning with certified industry-relevant course videos 
//     and 1000+ practise questions to make you unstoppable.
//   </ListItem>
//   <ListItem>
//     <ListIcon as={CheckCircleIcon} color='blue.500'/>
//     Attempt live tests and assignments along with personalised 
//     recommendations to help you navigate to success.
//   </ListItem>
// </List>

//          </Box>
    
// </Box>
//          </Box>

         
//         </Flex>
//         <Flex p={6} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      
//         <Box
//           rounded={'lg'}
//           bg={('white')}
//           boxShadow={'lg'}
//           p={8}>
//               <Heading fontSize={'3xl'} textAlign={'center'}>
//             Sign In
//           </Heading>
//           <Stack spacing={4}>
//             <HStack>
//               {/* <Box>
//                 <FormControl id="name" >
//                   <FormLabel>Name</FormLabel>
//                   <Input type="text" width={"400px"} placeholder={"Enter your name"} />
//                 </FormControl>
//               </Box> */}
//               {/* <Box>
//                 <FormControl id="lastName">
//                   <FormLabel>Last Name</FormLabel>
//                   <Input type="text" />
//                 </FormControl>
//               </Box> */}
//             </HStack>
//             <FormControl id="email" >
//               <FormLabel>Email</FormLabel>
//               <Input type="email" placeholder='name@mail.com' onChange={(e)=>setEmail(e.target.value)}/>
//               <Text color={"red"} fontSize={"10px"} textAlign={"left"}>{emailError}</Text>
//             </FormControl>
//             <FormControl id="password" >
             
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//                 <FormLabel>Password</FormLabel>
//                 <Link color={'blue.400'}>Forgot password?</Link>
//               </Stack>
//               <InputGroup>
//                 <Input placeholder='To keep your profile safe' onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
            
//                 <InputRightElement h={'full'}>
                
//                   <Button
//                     variant={'ghost'}
//                     onClick={() =>
//                       setShowPassword((showPassword) => !showPassword)
//                     }>
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
                 
            
//                 </InputRightElement>
//               </InputGroup>
//               <Stack  direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//               <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
//               <FormLabel color={'red'} fontSize={"10px"} fontWeight={'light'}>{errorMessage}</FormLabel>
//               </Stack>
//             </FormControl>
//             <Stack spacing={10} pt={2}>
             
//               <Button
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={'blue.400'}
//                 color={'white'}
//                 marginBottom={"-22px"}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//                 onClick={handleClick}
//                 >
//                 Sign In
//               </Button>
            
//       <Button
//         w={'full'}
//         maxW={'md'}
//         variant={'outline'}
//         width={"350px"}
//         leftIcon={<FcGoogle />}>
//         <Center>
//           <Text fontSize={"12px"}>CONTINUE WITH GOOGLE</Text>
//         </Center>
//       </Button>
    
//             </Stack>
//             <Stack pt={6}>
//               <Text align={'center'}>
//                 Already have an account? <Link color={'blue.400'}>Sign in</Link>
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//         </Flex>
       
//       </Stack>:
      
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      
//       <Box
//         rounded={'lg'}
//         bg={('white')}
//         boxShadow={'lg'}
//         p={8}>
//             <Heading fontSize={'3xl'} textAlign={'center'}>
//           Sign In
//         </Heading>
//         <Stack spacing={4}>
//           <HStack>
//             {/* <Box>
//               <FormControl id="name" >
//                 <FormLabel>Name</FormLabel>
//                 <Input type="text" width={"400px"} placeholder={"Enter your name"} />
//               </FormControl>
//             </Box> */}
//             {/* <Box>
//               <FormControl id="lastName">
//                 <FormLabel>Last Name</FormLabel>
//                 <Input type="text" />
//               </FormControl>
//             </Box> */}
//           </HStack>
//           <FormControl id="email" >
//             <FormLabel>Email</FormLabel>
//             <Input type="email" placeholder='name@mail.com'/>
//           </FormControl>
//           <FormControl id="password" >
           
//             <Stack
//               direction={{ base: 'column', sm: 'row' }}
//               align={'start'}
//               justify={'space-between'}>
//               <FormLabel>Password</FormLabel>
//               <Link color={'blue.400'}>Forgot password?</Link>
//             </Stack>
//             <InputGroup>
//               <Input placeholder='To keep your profile safe' type={showPassword ? 'text' : 'password'} />
          
//               <InputRightElement h={'full'}>
              
//                 <Button
//                   variant={'ghost'}
//                   onClick={() =>
//                     setShowPassword((showPassword) => !showPassword)
//                   }>
//                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                 </Button>
               
          
//               </InputRightElement>
//             </InputGroup>
//             <FormLabel fontWeight={'light'}>Minimum 8 characters</FormLabel>
//           </FormControl>
//           <Stack spacing={10} pt={2}>
           
//             <Button
//               loadingText="Submitting"
//               size="lg"
//               bg={'blue.400'}
//               color={'white'}
//               marginBottom={"-22px"}
//               _hover={{
//                 bg: 'blue.500',
//               }}>
//               Sign In
//             </Button>
          
//     <Button
//       w={'full'}
//       maxW={'md'}
//       variant={'outline'}
//       width={"300px"}
//       leftIcon={<FcGoogle />}>
//       <Center>
//         <Text fontSize={"12px"}>CONTINUE WITH GOOGLE</Text>
//       </Center>
//     </Button>
  
//           </Stack>
//           <Stack pt={6}>
//             <Text align={'center'}>
//               Already have an account? <Link color={'blue.400'}>Sign in</Link>
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Stack>
      
      
//       }

//       </>
//     );
//   }