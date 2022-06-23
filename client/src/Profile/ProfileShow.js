import React from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover';
import SidebarShow from './Sidebar/SidebarShow';
import { theme } from '../Assets/scss/settings/profile/extendTheme';
// Page settings
import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"
// Necessary Components
import useFetch from "../Mainpage/utils/UseFetch"

export default function ProfileShow(props) {
    const curPathEle = window.location.pathname.split('/'); //yields: "/js" (where snippets run)
    const { data, loading } = useFetch(`https://broccolimedia.herokuapp.com/user/` + curPathEle[curPathEle.length - 1]);

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="1240px">
                <SidebarShow user={data} isLoading={loading} />
            </Container>
            <Footer />
        </ChakraProvider>
    )
}