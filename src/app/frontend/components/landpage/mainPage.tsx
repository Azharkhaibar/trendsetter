import React from "react";
import { Navbar } from "../../layout/navbar/Navbar";
import { 
    Box,
    Text,
    Heading,
    HStack,
    Image,
    Container
 } from "@chakra-ui/react";


export const MainPage: React.FC = () => {
    return(
        <>
        <Navbar />
        <Container>
            <Box>
                <Text>halo</Text>
            </Box>
        </Container>
        </>
    )
}