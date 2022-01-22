import { useRouter } from "next/router"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { Box, Flex, Button, Text, Spacer, useDisclosure } from "@chakra-ui/react"
import { BiFilter } from "react-icons/bi"
import Listings from "../containers/Listings"
import { fetchData } from "../utils/fetch"
import Filter from "../components/Filter"
import { useEffect, useState } from "react"


const Search = ({ data }) => {
    const { query, pathname, push } = useRouter()
    const { isOpen, onToggle } = useDisclosure()

    const [filter, setFilter] = useState({
        purpose: '',
        sort: '',
        rentFrequency: '',
        priceMin: '',
        priceMax: '',
        room: '',
        baths: '',
        categoryExternalID: ''
    })

    const onChange = (item, value) => {
        setFilter(prev => ({...prev, [item]: value}))
        fetchData()
    }

    const fetchFilter = () => {
        const keys = Object.keys(filter)
        
        keys.forEach(key => {
            if(filter[key] !== ""){
                query[key] = filter[key]
            }
        })

        push({ pathname, query })
    }


    return (
        <Layout>
            <Filter filter={filter} isOpen={isOpen} onToggle={onToggle}/>
            <Box>
                <Container>
                    <Flex p={5} px={4} justifyContent='flex-between'>
                        <Text fontSize="3xl" color="gray.600" fontWeight='500'>Properties</Text>
                        <Spacer />
                        <Button variant="outline" onClick={onToggle}>
                            <Flex color="blue.500" alignItems="center" fontSize="xl">
                                <BiFilter />
                                <Text ml={2} fontSize="sm">Filter</Text>
                            </Flex>
                        </Button>
                    </Flex>
                </Container>
            </Box>

            <Box mt={3} w="100%">
                <Listings 
                    list={data}
                />
            </Box>
        </Layout>
    )
}

export const getServerSideProps = async ({ query }) => {
    const filters = {
        purpose: query.purpose || 'for-rent',
        sort: query.sort || 'price-desc',
        rentFrequency: query.rentFrequency || 'yearly',
        priceMin: query.priceMin || '0',
        priceMax: query.priceMax || '1000000',
        room: query.room || '2',
        baths: query.baths || '2',
        categoryExternalID: query.categoryExternalID || '4'
    }

    const data = await fetchData(`/properties/list?locationExternalIDs=5002,6020&categoryExternalID=${filters.categoryExternalID}&purpose=${filters.purpose}&sort=${filters.sort}&roomsMin=${filters.room}&bathsMin=${filters.baths}&rentFrequency=${filters.rentFrequency}&priceMin=${filters.priceMin}&priceMax=${filters.priceMax}&hitsPerPage=21`)
    console.log('====================================');
    console.log({data});
    console.log('====================================');
    return {
        props: {    
            data: data?.hits,
        }
    }
}

export default Search