import Layout from "../components/Layout"
import { fetchData } from '../utils/fetch'
import { Box } from "@chakra-ui/react"
import Banner from "../components/Banner"
import Listings from "../containers/Listings"

import rentPic from "../assets/rent.jpg"
import salePic from "../assets/sale.jpg"


export default function Home ({ onSale, onRent }){

    return (
        <Layout>
            <Box>
                <Banner 
                    purpose="rent a home"
                    image={rentPic}
                    title1="Rental Home for"
                    title2="Everyone"
                    desc1="Explore Apartments, Villas, Homes"
                    desc2="and more"
                    link="/rentals"

                />
                <Listings
                    list={onRent}
                />
                <Banner 
                    purpose="buy a home"
                    image={salePic}
                    title1="Find, Buy and own your"
                    title2="Dream Home"
                    desc1="Explore Apartments, Villas, Homes"
                    desc2="and more"
                    link="/rentals"

                />
                <Listings 
                    list={onSale}
                />
            </Box>
        </Layout>
    )
}


export const getStaticProps = async () => {
    const onSale = await fetchData('/properties/list?locationExternalIDs=5002,6020&purpose=for-sale&hitsPerPage=9')
    const onRent = await fetchData('/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=9')

    return {
        props: {
            onSale: onSale?.hits,
            onRent: onRent?.hits
        }
    }
}
