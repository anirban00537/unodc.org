import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
function DrawerExample({ business }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Application details</DrawerHeader>

          <DrawerBody>
            <Container maxW={"7xl"}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
              >
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    >
                      {business?.name}
                    </Heading>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                    }
                  >
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={useColorModeValue("yellow.500", "yellow.300")}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Name
                      </Text>

                      <List spacing={2}>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Company name:
                          </Text>{" "}
                          ${business?.name}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Address:
                          </Text>{" "}
                          {business?.address}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Email:
                          </Text>{" "}
                          {business?.email}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Phone:
                          </Text>{" "}
                          {business?.phone}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Date of Birth:
                          </Text>{" "}
                          {business?.dob}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Religion:
                          </Text>{" "}
                          {business?.religion}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Profession:
                          </Text>{" "}
                          {business?.prefession}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Country of residence:
                          </Text>{" "}
                          ${business?.countryOfResidence}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            National identification Number:
                          </Text>{" "}
                          {business?.nid_number}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            The Official corporate records from the company’s
                            management:
                          </Text>{" "}
                          {business?.official_corporate_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            The Registration documents from the local Registrar
                            of Companies:
                          </Text>{" "}
                          {business?.the_registration_documents_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Articles of incorporation, partnership agreements,
                            and business certificate :
                          </Text>{" "}
                          {business?.articles_of_incorporation_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Names and locations of the main company customers
                            and suppliers :
                          </Text>{" "}
                          {business?.name_and_location_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Company bank account details and relationships with
                            other financial institutions:
                          </Text>{" "}
                          {business?.company_bank_account_details_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Identity of board members and beneficiaries :
                          </Text>{" "}
                          {business?.identity_of_board_file}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            State your title and details on the position you
                            hold or held. This should include the level of
                            influence of the position :
                          </Text>{" "}
                          {business?.state_your_title_and_details}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            If you are a close associate or family member, state
                            your identity, title, role, and level of proximity
                            to public office :
                          </Text>{" "}
                          {business?.associate_or_family_member}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What is the nature of your business? :
                          </Text>{" "}
                          {business?.nature_of_your_business}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How much funds are involved?:
                          </Text>{" "}
                          {business?.funds_involved}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How often do you transact in bulk sums a year? :
                          </Text>{" "}
                          {business?.transact_in_bulk}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Which countries do you usually or ordinarily
                            transact with? :
                          </Text>{" "}
                          {business?.ordinarily_transact}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What is your connection with
                            politically-exposed-persons?:
                          </Text>{" "}
                          {business?.politically_exposed}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Which countries have you previously been to? :
                          </Text>{" "}
                          {business?.countries_been_to}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What is the source of the funds?:
                          </Text>{" "}
                          {business?.source_of_the_funds}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What is your individual net worth? (this must
                            include all legitimate assets that shall be
                            confirmed):
                          </Text>{" "}
                          {business?.individual_net_worth}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you previously sold property, inheritance, or
                            traded in mineral and crypto transactions? If yes,
                            state the exact trade. Attach the previous year’s
                            income tax return :
                          </Text>{" "}
                          {business?.previously_sold_property}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            State the duration of the transaction has been
                            ongoing and the parties that are involved (State the
                            name). :
                          </Text>{" "}
                          {business?.previously_been_convicted}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you previously been convicted of any crime? If
                            yes, state the offence and the sentence. :
                          </Text>{" "}
                          {business?.previously_been_convicted}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            HHow did you know about us?:
                          </Text>{" "}
                          {business?.know_about_us}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            EXECUTIVE SUMMARY (PDF, PPT, PPTX, DOC, DOCX)
                          </Text>{" "}
                          <a
                            href={business?.exclusive_summary_file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            File
                          </a>
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What convinced you to apply? Did someone encourage
                            you to apply?:
                          </Text>{" "}
                          {business?.encourage}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How did you hear about us?:
                          </Text>{" "}
                          {business?.Combinator}
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
