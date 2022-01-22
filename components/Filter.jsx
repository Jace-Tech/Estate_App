import { Box, useDisclosure, Slide, Flex, IconButton, Spacer, Text, Select, Input, SimpleGrid, HStack } from '@chakra-ui/react'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import {baths, category, purpose, rent, rooms, sort } from "../utils/filters"

const Filter = ({ isOpen, onToggle }) => {

    return (
        <Slide in={ isOpen } style={{zIndex: 1500}}>
            <Box position="fixed" right="0" top="0" boxShadow="xl" bg="white" p={5} width={{sm: "90%", md: "70%", lg: "35%"}} h="100vh" zIndex={1500}>
                <Flex alignItems="center" justifyContent="flex-end" pb={2} borderBottom="1px" borderBottomColor="gray.200">
                    <Text fontSize="xl" fontWeight="500" color="gray.600" textTransform="capitalize"> filters </Text>
                    <Spacer />
                    <IconButton size="sm" onClick={ onToggle } icon={<IoClose fontSize="large" color="#777" />} variant='ghost'></IconButton>
                </Flex>

                <Box my={5} mt={8}>
                    <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">Price</Text>
                    <HStack columns={2} gap={3}>
                        <Box>
                            <Input type="number" placeholder='Min' />
                        </Box>

                        <Box>
                            <Input type="number" placeholder='Max' />
                        </Box>
                    </HStack>
                </Box>

                <Box my={5}>
                    <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">Sort</Text>
                    <Box>
                        <Select fontSize="sm" color="gray.500">
                            <option value="">Sort</option>
                            { 
                                sort.map(({name, value}, index) => (
                                    <option value={value} key={`${name}${index}`}> { name }</option>
                                ))
                            }
                        </Select>
                    </Box>
                </Box>

                <Box my={5}>
                    <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">purpose</Text>
                    <Box>
                        <Select fontSize="sm" textTransform="capitalize" color="gray.500">
                            <option value="">purpose</option>
                            { 
                                purpose.map(({name, value}, index) => (
                                    <option value={value} key={`${name}${index}`}> { name }</option>
                                ))
                            }
                        </Select>
                    </Box>
                </Box>


                <Box my={5}>
                    <SimpleGrid columns={2} spacing={5}>
                        <Box>
                            <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">rooms</Text>
                            <Box>
                                <Input width="100%" type="number" placeholder='Min' />
                            </Box>
                        </Box>

                        <Box>
                            <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">bathrooms</Text>
                            <Box>
                                <Input width="100%" type="number" placeholder='Min' />
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>

                <Box my={5}>
                    <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">rent frequency</Text>
                    <Box>
                        <Input width="100%" type="number" placeholder='Min' />
                    </Box>
                </Box>

                <Box my={5}>
                    <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">Category</Text>
                    <Box>
                        <Input width="100%" type="number" placeholder='Min' />
                    </Box>
                </Box>
            </Box>
        </Slide>
    );
};

export default Filter;

