import React, { useEffect, useState } from "react";
import styles from "../styles/forget.module.css";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import validator from "validator";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
  const [isDisable, setDis] = useState(true);
  const [emailErr, setErr] = useState(false);
  const [email, setMail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMail(e.target.value);
  };

  const handleReset = () => {


    if (validator.isEmail(email)) {
      /// move further and fetch forget password API

      axios
        .post("https://lazy-ruby-leopard-kilt.cyclic.app/auth/forget", { email: email })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: 'OTP Sended Successfully.',
              description: "We've sended you a otp in mail.",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            navigate("/resetpassword")
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            toast({
              title: 'User not found.',
              description: "No any account assosiated with that email.",
              status: 'warning',
              duration: 3000,
              isClosable: true,
            })
          }
        });
    } else {
      //show alert
      setErr("enter valid email");
    }
  };

  useEffect(() => {
    if (email) {
      setDis(false);
    } else {
      setDis(true);
    }
  }, [email]);

  return (
    <Box className={styles.container}>
      <Box className={styles.logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17AUEhLvh0V_XYDZYeHh4Mq7xXHYNY6DKMlgT6_Y5&s"
          alt="masai logo"
          width={"10%"}
        />
      </Box>
      <Box className={styles.cont}>
        <Box className={styles.box1}>
          <Box>
            <Box className={styles.small}>
              <Text fontSize={"30px"} lineHeight="40px" fontWeight={600}>
                Get access to one-step solution for securing your dream
                internship
              </Text>
              <Flex className={styles.flex}>
                <AiFillCheckCircle color="#4358F6" fontSize={"30px"} />
                <Text>
                  earn a stipend upto 6000 by inrolling in india's first outcome
                  based internship program or get ALL of your money back.
                </Text>
              </Flex>
              <Flex className={styles.flex}>
                <AiFillCheckCircle color="#4358F6" fontSize={"30px"} />
                <Text>
                  start learning with certified certificate-relevent course
                  videos and 1000+ practice questions to make you unstoppable.
                </Text>
              </Flex>
              <Flex className={styles.flex}>
                <AiFillCheckCircle color="#4358F6" fontSize={"30px"} />
                <Text>
                  earn a stipend upto 6000 by inrolling in india's first outcome
                  based internship program or get ALL of your money back.
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box className={styles.box2}>
          <Box className={styles.form}>
            <Text fontSize={"24px"} fontWeight={600}>
              Forget Password
            </Text>
            <Box id="div1" className={styles.afterDiv1}>
              <Text textAlign={"center"}>
                enter your registerd email to reset the passowrd
              </Text>
              <Box className={styles.btns}>
                <Text textAlign={"start"}>Email</Text>
                <Input
                  onChange={handleChange}
                  placeholder="enter registered email"
                />
                {emailErr ? (
                  <Text textAlign={"start"} color="red">
                    enter valid email
                  </Text>
                ) : null}
                <Button
                  isDisabled={isDisable}
                  bg={"#4358F6"}
                  mt="20px"
                  color={"white"}
                  outline="none"
                  w="100%"
                  onClick={handleReset}
                >
                  RESET PASSWORD
                </Button>
                <Button mt="20px">CANCEL</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPass;
