import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";

interface NavLinkProps {
    href: string,
    title: string
}

export const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    return (
        <>
            <Box as="li" listStyleType="none" marginRight="1.5rem">
                <Link href={href} passHref>
                    <Text as="a" fontSize="lg" fontWeight="bold" color="teal.500">
                        {title}
                    </Text>
                </Link>
            </Box>
        </>
    );
}