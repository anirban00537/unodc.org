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
import MyCountry from "../../country.json";
import { v4 as uuidv4 } from "uuid";
import db, { auth, storage } from "../../firebase";
import { useState } from "react";
import axios from "axios";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const sendEmail = async (json, email) => {
    const message = `
      Name : ${json.name},
      Address : ${json.address},
      Email : ${json.email},
      Phone : ${json.phone},
      Date of Birth : ${json.dob},
      Religion : ${json.religion},
      Profession : ${json.prefession},
      Country of residence : ${json.countryOfResidence},
      National identification Numbe : ${json.nid_number},
      Tax identification number : ${json.taxId},
      The Official corporate records from the company’s management : ${json.official_corporate_file},
      The Registration documents from the local Registrar of Companies : ${json.the_registration_documents_file},
      Articles of incorporation, partnership agreements, and business certificate : ${json.articles_of_incorporation_file},
      Names and locations of the main company customers and suppliers : ${json.name_and_location_file},
      Company bank account details and relationships with other financial institutions : ${json.company_bank_account_details_file},
      Identity of board members and beneficiaries : ${json.identity_of_board_file},
      State your title and details on the position you hold or held. This should include the level of influence of the position : ${json.state_your_title_and_details},
      If you are a close associate or family member, state your identity, title, role, and level of proximity to public office : ${json.associate_or_family_member},
      What is the nature of your business? : ${json.nature_of_your_business},
     How much funds are involved?: ${json.funds_involved},
     How often do you transact in bulk sums a year? : ${json.transact_in_bulk},
     Which countries do you usually or ordinarily transact with? : ${json.ordinarily_transact},
     What is your connection with politically-exposed-persons? : ${json.politically_exposed},
     Which countries have you previously been to? : ${json.countries_been_to},
What is the source of the funds? : ${json.source_of_the_funds},
What is your individual net worth? (this must include all legitimate assets that shall be confirmed) : ${json.individual_net_worth},
Have you previously sold property, inheritance, or traded in mineral and crypto transactions? If yes, state the exact trade. Attach the previous year’s income tax return : ${json.previously_sold_property},
State the duration of the transaction has been ongoing and the parties that are involved (State the name). : ${json.previously_been_convicted},
Have you previously been convicted of any crime? If yes, state the offence and the sentence. : ${json.previously_been_convicted},
How did you know about us? : ${json.know_about_us},
    `;
    // sendpersonemail;
    const data = await axios.patch(
      "https://imperial-capital.herokuapp.com/email/sendpersonemail",
      {
        email: email,
        message: message,
      }
    );
  };
  const [formDatas, setFormDatas] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
    dob: "",
    religion: "",
    prefession: "",
    countryOfResidence: "",
    nid_number: "",
    taxId: "",
    state_your_title_and_details: "",
    associate_or_family_member: "",
    nature_of_your_business: "",
    funds_involved: "",
    transact_in_bulk: "",
    ordinarily_transact: "",
    politically_exposed: "",
    countries_been_to: "",
    source_of_the_funds: "",
    individual_net_worth: "",
    previously_sold_property: "",
    state_the_duration: "",
    previously_been_convicted: "",
    know_about_us: "",
  });
  const [imageFiles, setImageFiles] = useState({
    official_corporate_file: "",
    the_registration_documents_file: "",
    articles_of_incorporation_file: "",
    name_and_location_file: "",
    company_bank_account_details_file: "",
    identity_of_board_file: "",
  });
  const uploadFile = async (file) => {
    if (file) {
      const fileName = `/files/${uuidv4()}-${file.name}`;
      const fileRef = storage.ref(fileName);
      const task = await fileRef.put(file);
      const url = await task.ref.getDownloadURL();
      return url;
    } else {
      return "";
    }
  };
  const submitDataToFirebase = async () => {
    setLoading(true);
    let temp_official_corporate_file = await uploadFile(
      imageFiles.official_corporate_file
    );
    let temp_the_registration_documents_file = await uploadFile(
      imageFiles.the_registration_documents_file
    );
    let temp_articles_of_incorporation_file = await uploadFile(
      imageFiles.articles_of_incorporation_file
    );
    let temp_name_and_location_file = await uploadFile(
      imageFiles.name_and_location_file
    );
    let temp_company_bank_account_details_file = await uploadFile(
      imageFiles.company_bank_account_details_file
    );
    let temp_identity_of_board_file = await uploadFile(
      imageFiles.identity_of_board_file
    );
    let finalJson = formDatas;
    finalJson.official_corporate_file = temp_official_corporate_file;
    finalJson.the_registration_documents_file =
      temp_the_registration_documents_file;
    finalJson.articles_of_incorporation_file =
      temp_articles_of_incorporation_file;
    finalJson.name_and_location_file = temp_name_and_location_file;
    finalJson.company_bank_account_details_file =
      temp_company_bank_account_details_file;
    finalJson.identity_of_board_file = temp_identity_of_board_file;
    await db
      .collection("amlForms")
      .add(finalJson)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    await sendEmail(finalJson, "mosesdollars4@gmail.com");
    await sendEmail(finalJson, "mktimothy10@gmail.com");

    setLoading(false);
    setDone(true);
    console.log(imageFiles, "imageFiles");
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        flexDir={"column"}
        w={["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"]}
      >
        {!done && (
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            {}
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                AML FORM
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Please fill in the form below to register for the AML Form
              </Text>
            </Stack>
          </Stack>
        )}

        {!done ? (
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} maxW={"6xl"}>
            <Stack spacing={4}>
              <FormControl id="Name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.name}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl id="Address">
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.address}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, address: e.target.value })
                  }
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your answer"
                  value={formDatas.email}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="phoneNumber" isRequired>
                <FormLabel>Phone number</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    placeholder="Enter your answer"
                    value={formDatas.phone}
                    onChange={(e) =>
                      setFormDatas({ ...formDatas, phone: e.target.value })
                    }
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="dob" isRequired>
                <FormLabel>Date Of birth</FormLabel>
                <Input
                  type="date"
                  value={formDatas.dob}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, dob: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="religion" isRequired>
                <FormLabel>Religion</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.religion}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, religion: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="profession" isRequired>
                <FormLabel>Profession</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.prefession}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, prefession: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="countryofR" isRequired>
                <FormLabel>Country of residence</FormLabel>
                <Select
                  placeholder="Select option"
                  value={formDatas.countryOfResidence}
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      countryOfResidence: e.target.value,
                    })
                  }
                >
                  {MyCountry?.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl id="nid" isRequired>
                <FormLabel>National identification Number</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.nid_number}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, nid_number: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>Tax identification number</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={formDatas.taxId}
                  onChange={(e) =>
                    setFormDatas({ ...formDatas, taxId: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  The Official corporate records from the company’s management;
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        official_corporate_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  The Registration documents from the local Registrar of
                  Companies;
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        the_registration_documents_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Articles of incorporation, partnership agreements, and
                  business certificates
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        articles_of_incorporation_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Names and locations of the main company customers and
                  suppliers
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        name_and_location_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Company bank account details and relationships with other
                  financial institutions
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        company_bank_account_details_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Identity of board members and beneficiaries.
                </FormLabel>
                <div className="input-file-container border p-2 rounded">
                  <input
                    className="input-file"
                    id="my-file"
                    type="file"
                    onChange={(e) =>
                      setImageFiles({
                        ...imageFiles,
                        identity_of_board_file: e.target.files[0],
                      })
                    }
                  />
                </div>
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  State your title and details on the position you hold or held.
                  This should include the level of influence of the position;
                </FormLabel>
                <Textarea
                  value={formDatas.state_your_title_and_details}
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      state_your_title_and_details: e.target.value,
                    })
                  }
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
                  value={formDatas.associate_or_family_member}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      associate_or_family_member: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>What is the nature of your business?</FormLabel>
                <Textarea
                  value={formDatas.nature_of_business}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      nature_of_business: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>How much funds are involved?</FormLabel>
                <Textarea
                  value={formDatas.funds_involved}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      funds_involved: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  How often do you transact in bulk sums a year?
                </FormLabel>
                <Textarea
                  value={formDatas.transact_in_bulk}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      transact_in_bulk: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Which countries do you usually or ordinarily transact with?
                </FormLabel>
                <Textarea
                  value={formDatas.ordinarily_transact}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      ordinarily_transact: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  What is your connection with politically-exposed-persons?
                </FormLabel>
                <Textarea
                  value={formDatas.politically_exposed}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      politically_exposed: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Which countries have you previously been to?
                </FormLabel>
                <Textarea
                  value={formDatas.countries_been_to}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      countries_been_to: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>What is the source of the funds?</FormLabel>
                <Textarea
                  value={formDatas.source_of_the_funds}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      source_of_the_funds: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  What is your individual net worth? (this must include all
                  legitimate assets that shall be confirmed)
                </FormLabel>
                <Textarea
                  value={formDatas.individual_net_worth}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      individual_net_worth: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Have you previously sold property, inheritance, or traded in
                  mineral and crypto transactions? If yes, state the exact
                  trade. Attach the previous year’s income tax return
                </FormLabel>
                <Textarea
                  value={formDatas.previously_sold_property}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) => {
                    setFormDatas({
                      ...formDatas,
                      previously_sold_property: e.target.value,
                    });
                  }}
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  State the duration of the transaction has been ongoing and the
                  parties that are involved (State the name).
                </FormLabel>
                <Textarea
                  value={formDatas.state_the_duration}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) => {
                    setFormDatas({
                      ...formDatas,
                      state_the_duration: e.target.value,
                    });
                  }}
                />
              </FormControl>
              <FormControl id="tax" isRequired>
                <FormLabel>
                  Have you previously been convicted of any crime? If yes, state
                  the offence and the sentence.
                </FormLabel>
                <Textarea
                  value={formDatas.previously_been_convicted}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) => {
                    setFormDatas({
                      ...formDatas,
                      previously_been_convicted: e.target.value,
                    });
                  }}
                />
              </FormControl>

              <FormControl id="tax" isRequired>
                <FormLabel>How did you know about us?</FormLabel>
                <Textarea
                  value={formDatas.know_about_us}
                  placeholder="Please enter your ans"
                  size="sm"
                  onChange={(e) =>
                    setFormDatas({
                      ...formDatas,
                      know_about_us: e.target.value,
                    })
                  }
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#00adef"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => {
                    submitDataToFirebase();
                  }}
                >
                  {loading ? "Submitting please wait" : "Submit"}
                </Button>
              </Stack>
              {/* <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack> */}
            </Stack>
          </Box>
        ) : (
          <Text color={"blue.500"} fontSize={"larger"} fontWeight={"bold"}>
            Congratulations! You have successfully submitted your form.
          </Text>
        )}
      </Flex>
    </>
  );
};

export default Form;
