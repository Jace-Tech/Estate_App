import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { GoVerified } from 'react-icons/go'
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import millify from 'millify'

import pic from "../assets/rent.jpg"

const Property = ({ externalID, title, coverPhoto, area, isVerified, rooms, baths, rentFrequency, agency, price  }) => {
    return (
        <Box m={4} cursor="pointer">
            <Link href={`/property/${externalID}`} passHref width="330px" min-height="300px">
                <Box>
                    <Image 
                        src={coverPhoto ? coverPhoto?.url : pic}
                        width={330}
                        height={230}
                        alt=""
                    />
                    <Box mt={2}> 
                        <Flex alignItems="center" justifyContent="space-between">
                            <Flex alignItems="center">
                                <Box pr={3} color="green.400">{ isVerified && <GoVerified /> }</Box>
                                <Flex alignItems="center">
                                    <Text fontWeight="bold" fontSize="lg">NGN {millify(price)}</Text>
                                    <Text fontWeight="400" fontSize="md" color="gray.400">{rentFrequency && `/${rentFrequency}`} </Text>
                                </Flex>
                            </Flex>

                            <Box> 
                                <Avatar size="md" src={agency?.logo?.url } />
                            </Box>
                        </Flex>

                        <Flex alignItems="center" justifyContent="space-between" w={250} color="blue.400">
                            {rooms} <FaBed /> | {baths} <FaBath /> | { millify(area) } sqft <BsGridFill />
                        </Flex>
                        <Text fontSize="md" mt={2}>
                            {title.length > 40 ? `${title.substring(0, 30)}... ` : title}
                        </Text>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default Property;
  