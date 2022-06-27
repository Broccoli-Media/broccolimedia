import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover.js';
import SidebarShow from './Sidebar/SidebarShow.js';
import Header from "../Mainpage/components/layout/Header.js";
import Footer from "../Mainpage/components/layout/Footer.js";
import { theme } from '../Assets/scss/settings/profile/extendTheme.js';
// Necessary Components
import useFetch from "../Mainpage/utils/UseFetch.js";

export default function ProfileShow() {
    const subUrl = useParams();
    const username = subUrl.username;
    const { data, loading } = useFetch(`https://broccolimedia.herokuapp.com/user/${username}`);


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