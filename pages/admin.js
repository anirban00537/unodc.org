import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  ChakraProvider,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Drawer from "../components/admin/drawerCompany";
import db from "../firebase";

import AdminNav from "../components/admin/adminNavbar.jsx";

const Lending = () => {
  const [AllCompanies, setAllCompanies] = React.useState([]);
  const [business, setBusiness] = React.useState({});
  const [dependency, setDependency] = React.useState(5);
  const getAllLoansInfo = async () => {
    const loans = await db.collection("amlForms").get();
    setAllCompanies(loans.docs.map((doc) => doc.data()));
  };
  const deleteBusinessById = (id) => {
    db.collection("amlForms")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      })
      .then(async () => {
        const loans = await db.collection("amlForms").get();
        console.log(loans.docs.map((doc) => doc.data()));
        setAllCompanies(loans.docs.map((doc) => doc.data()));
        const random = Math.floor(Math.random() * 100);
        setDependency(random);
      });
  };
  useEffect(() => {
    getAllLoansInfo();
  }, [dependency]);
  return (
    <ChakraProvider>
      <AdminNav />
      <Text
        ml={5}
        mt={10}
        mb={10}
        fontWeight="bold"
        color={"gray.500"}
        fontSize="4xl"
      >
        {" "}
        Company application
      </Text>

      {AllCompanies.length === 0 ? (
        <Box
          height={["100vh", "100vh", "100vh", "100vh"]}
          minHeight="100vh"
        ></Box>
      ) : (
        <Box height={["100%", "100%", "100%", "100%"]} minHeight="100vh">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {AllCompanies.map((Company) => (
                <Tr key={Company.id}>
                  <Td>{Company?.name}</Td>
                  <Td> {Company?.address}</Td>
                  <Td>{Company?.email}</Td>
                  <Td>{Company?.phone}</Td>
                  <Td
                    onClick={() => {
                      console.log(Company);
                      setBusiness(Company);
                    }}
                  >
                    <Drawer business={business} />
                  </Td>
                  <Td
                    onClick={() => {
                      deleteBusinessById(Company.id);
                    }}
                  >
                    <Button variantColor="red" color={"gray.500"} fontSize="sm">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </ChakraProvider>
  );
};

export default Lending;
