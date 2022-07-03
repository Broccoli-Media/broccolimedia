import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover.js';
import SidebarShow from './Sidebar/visitor/SidebarShow.js';
import Header from "../Mainpage/components/layout/Header.js";
import Footer from "../Mainpage/components/layout/Footer.js";
import { theme } from '../Assets/scss/settings/profile/extendTheme.js';
// Necessary Components
import useFetch from "../Mainpage/utils/UseFetch.js";
import ContentShow from './Content/visitor/ContentShow.js';

export default function ProfileShow() {
    const location = useLocation();
    const username = location.pathname.split("/")[2];
    const { data, loading } = useFetch(`https://broccolimedia.herokuapp.com/user?username=${username}`);

    return (
        <>
            <Header navPosition="right" className="reveal-from-bottom" />
            <ChakraProvider theme={theme}>
                <Cover />
                <Container display={{ base: 'block', md: 'flex' }} maxW="1240px">
                    <SidebarShow user={data} isLoading={loading} />
                    <ContentShow user={data} isLoading={loading} />
                </Container>
                <Footer />
            </ChakraProvider>
        </>

    )
}