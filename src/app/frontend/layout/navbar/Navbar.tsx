import React from "react";
import { NavLink } from "./navlink";
import { 
    Box,
    Heading,
    Text,
    HStack,
    Flex,
    Card,
    Icon
} from "@chakra-ui/react";
import Link from "next/link";
import { title } from "process";
import path from "path";


const NavData = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "NEW & FEATURED",
    path: "/newfeatured"
  },
  {
    title: "MEN",
    path: "/men",
  },
  {
    title: "WOMAN",
    path: "/woman",
  },
  {
    title: "KID",
    path: "/kid",
  },
  {
    title: "SALE",
    path: "/sale"
  }
];

export const Navbar = () => {
    return (
      <>
        <Flex as="nav" padding="1rem" bg="gray.100" boxShadow="md" justifyContent="space-between" alignItems="center">
          <Box>
            <Link href="/">
              <Text fontSize="2xl" fontWeight="bold" color="teal.500">
                Logo
              </Text>
            </Link>
          </Box>
          <Flex as="ul">
            {NavData.map((navItem, index) => (
              <NavLink key={index} href={navItem.path} title={navItem.title} />
            ))}
          </Flex>
          
        </Flex>
      </>
    );
}
   