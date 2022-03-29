import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Textarea,
  Select,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FilterProps,
} from "@chakra-ui/react";
import image from '../public/img/image.png';
import { useState } from "react";

const Register = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        flexDir={"column"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              AML FORM
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Please fill in the form below to register for the AML Form
            </Text>
          </Stack>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          maxW={"3xl"}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="Address">
                  <FormLabel>Address</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
              <FormLabel>Phone number</FormLabel>
              <InputGroup>
                <Input type="number" />
              </InputGroup>
            </FormControl>
            <FormControl id="dob" isRequired>
              <FormLabel>Date Of birth</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="religion" isRequired>
              <FormLabel>Religion</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="profession" isRequired>
              <FormLabel>Profession</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="countryofR" isRequired>
              <FormLabel>Country of residence</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
            <FormControl id="nid" isRequired>
              <FormLabel>National identification Number</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>Tax identification number</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                The Official corporate records from the company’s management
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Articles of incorporation, partnership agreements, and business
                certificates
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Names and locations of the main company customers and suppliers
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Company bank account details and relationships with other
                financial institutions
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Identity of board members and beneficiaries.
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                The Official corporate records from the company’s management;
              </FormLabel>
              <div className="input-file-container border p-2 rounded">
                <input className="input-file" id="my-file" type="file" />
              </div>
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                The Official corporate records from the company’s management
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                If you are a close associate or family member, state your
                identity, title, role, and level of proximity to public office
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>What is the nature of your business?</FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>How much funds are involved?</FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                How often do you transact in bulk sums a year?
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Which countries do you usually or ordinarily transact with?
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                What is your connection with politically-exposed-persons?
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Which countries have you previously been to?
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>What is the source of the funds?</FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                What is your individual net worth? (this must include all
                legitimate assets that shall be confirmed)
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Have you previously sold property, inheritance, or traded in
                mineral and crypto transactions? If yes, state the exact trade.
                Attach the previous year’s income tax return
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                State the duration of the transaction has been ongoing and the
                parties that are involved (State the name).
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <FormControl id="tax" isRequired>
              <FormLabel>
                Have you previously been convicted of any crime? If yes, state
                the offence and the sentence.
              </FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>

            <FormControl id="tax" isRequired>
              <FormLabel>How di you know about us?</FormLabel>
              <Textarea
                value=""
                placeholder="Please enter your ans"
                size="sm"
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
            {/* <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack> */}
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Register;
