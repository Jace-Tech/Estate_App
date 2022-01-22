import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer';
import Header from './Header';



const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate App</title>
            </Head>

            <Box>
                <header>
                    <Header />
                </header>

                <main>
                    { children }
                </main>

                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
        
    )
};

export default Layout;
