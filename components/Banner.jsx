import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react'

const Banner = ({ image, purpose, title1, title2, desc1, desc2, link }) => {
    return (
        <Flex py={10} bg="gray.100" flexWrap="wrap" alignItems="center" justifyContent="center">
            { image ? (
                <Image 
                    src={image}
                    width={500}
                    height={300}
                    alt={`Banner`}
                />
            ) : (
                <Flex alignItems="center" justifyContent="center">
                    <Spinner color="primary" />
                </Flex>
            )}
            
            <Box maxWidth={500} p={5} flex={1}>
                <Text fontSize="md" fontWeight="500" textTransform="uppercase" color="gray.500">{purpose}</Text>
                <Text fontSize="2xl" mt={3} fontWeight="700" color="gray.800">{title1} <br /> {title2}</Text>
                <Text fontSize="md" mt={3} fontWeight="400" color="gray.500">{desc1} <br /> {desc2}</Text>

                <Box mt={4}>
                    <Button fontSize="md" color="primary" bg="gray.300" size="lg">
                        <Link href={link}>See More</Link>
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
};

export default Banner;
