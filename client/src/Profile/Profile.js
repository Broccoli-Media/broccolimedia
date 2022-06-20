import React, { useContext } from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import Axios from '../Mainpage/utils/Axios';

import Cover from './Cover';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import { theme } from '../Assets/scss/settings/profile/extendTheme';

import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"

import { AuthContext } from "../Mainpage/context/AuthContext.js";

export default function Profile(showUser) {
    const suburl = useParams();
    const id = suburl.id;
    const res = Axios.get(`/user/${id}`);

    const { user } = useContext(AuthContext);

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
                <Sidebar user={user} />
                <Content user={user} />
            </Container>
            <Footer />
        </ChakraProvider>
    )
}