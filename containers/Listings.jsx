import { Box,  Flex } from '@chakra-ui/react'
import React from 'react'
import Container from '../components/Container';
import Property from '../components/Property'

const Listings = ({ list }) => {
    return (
        <Box p={5} w="full">
            <Container>
                <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
                    { 
                        list && list?.map(( items, _) => (
                            <Property {...items} key={items.id} />
                        )) 
                    }
                </Flex>
            </Container>
        </Box>
    )
};

export default Listings;
