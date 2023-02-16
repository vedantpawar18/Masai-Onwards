import React, { useEffect, useState } from "react";
import styles from "../styles/forget.module.css";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const ForgetPass = () => {
  const [isDisable, setDis] = useState(true);
  const [email, setMail] = useState("");

  const handleChange = (e) => {
    setMail(e.target.value);
  };

  const handleReset = () => {
    let div1 = document.querySelector("#div1");
    let div2 = document.querySelector("#div2");
    div1.style.display = "none";
    div2.style.display = "block";
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
      <Box className={styles.box1}>
        <Box className={styles.logo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17AUEhLvh0V_XYDZYeHh4Mq7xXHYNY6DKMlgT6_Y5&s"
            alt="masai logo"
          />
        </Box>
        <Box>
          <Box className={styles.small}>
            <Text fontSize={"30px"} lineHeight="40px" fontWeight={600}>
              Get access to one-step solution for securing your dream internship
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
                start learning with certified certificate-relevent course videos
                and 1000+ practice questions to make you unstoppable.
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
          <Box id="div2" className={styles.afterDiv2}>
            <Box m="auto">
              <Text>
                if there is an account associated with this email you will
                receive a LINK to reset the email
              </Text>
            </Box>
            <Button m="20px" bg={"#4358F6"} color="white">
              GO BACK TO SIGN IN
            </Button>
            <Text>
              Didn't receive the mail ?{" "}
              <span>
                <a href="/user/forget">click to resend</a>
              </span>{" "}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPass;
