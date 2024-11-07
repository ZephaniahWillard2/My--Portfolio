import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "../FullScreenF/FullScreenSection";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../Context/alertContext";
import "./ContactMeStyles.css";


const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        type: "",
        comment: ""
      },
      onSubmit: (values) => {
        submit(values.firstName);
        formik.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
      }),
  });

  return (
    <div className="contactMe" >
        <Heading
            as="h1" id="contactme-section"
            borderBottom="solid thin #d28ff933"
            // textAlign="center"
            height= "200px"
            fontSize= "75px"
            paddingTop= "11vh"
            fontFamily=""
            textAlign="left"
            marginLeft="51px"
        >Contact
        </Heading>
    <FullScreenSection
    //   isDarkBackground
    //   backgroundColor="#512DA8"
    //   py={16}
    //   spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start" marginTop="-4vh">
       
        <Box p={6} rounded="md" w="100%" backgroundColor="black" border="solid 1px #D9D9D9">
          <form onSubmit={formik.handleSubmit} style={{fontFamily:"sans-serif"}}>
            <VStack 
              spacing={4}
            >
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                >
                  <option></option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button className="formButton" type="submit" color="white" backgroundColor="#521f69" width="full" isLoading={isLoading} _hover={{transform:"scale(1.02)", transition:"all .3s ease-in-out", backgroundColor:"#5e2a76"}}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
    </div>
  );
};

export default LandingSection;


// 388697