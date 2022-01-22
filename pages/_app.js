import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContext from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
    return (
        <AuthContext>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </AuthContext>
    )
}

export default MyApp
