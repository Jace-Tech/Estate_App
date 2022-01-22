import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Text } from "@chakra-ui/react"
import Link from 'next/link';
import { FcMenu, FcHome, FcSearch } from "react-icons/fc"
import Container from './Container';

const Header = () => {
    return (
        <Box borderBottom="1px" borderColor="gray.100">
            <Container>
                <Flex p="5">
                    <Box fontSize="3xl" color="blue.500" fontWeight="bold">
                        <Link href="/">EsRent</Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Menu>
                            <MenuButton as={IconButton} fontSize="2xl" icon={<FcMenu />} variant="ghost" />
                            <MenuList>
                                <MenuItem>
                                    <Link href="/" passHref>
                                        <Flex alignItems="center" color="blue.400">
                                            <FcHome />
                                            <Text ml={4} fontSize="sm"> Home </Text>
                                        </Flex>
                                    </Link>
                                </MenuItem>

                                <Link href="/search" passHref>
                                    <MenuItem>
                                        <Flex alignItems="center" color="blue.400">
                                            <FcSearch />
                                            <Text ml={4} fontSize="sm"> All properties </Text>
                                        </Flex>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </Box>
        
    );
};

export default Header;
