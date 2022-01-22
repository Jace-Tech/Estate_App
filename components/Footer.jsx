import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Container from './Container';

const Footer = () => {
    return (
        <Box p={5}>
            <Container>
                <Text fontSize="sm" fontWeight="300" textAlign="center" color="gray.500"> &copy; EsRent, { new Date().getFullYear() } </Text>
            </Container>
        </Box>
    );
};

export default Footer;
