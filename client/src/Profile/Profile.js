import React from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover.js';
import Content from './Content/Content.js';
import Sidebar from './Sidebar/Sidebar.js';
import ContentAdmin from './Content/ContentAdmin.js';
import { theme } from '../Assets/scss/settings/profile/extendTheme.js';
// Page settings
import Header from "../Mainpage/components/layout/Header.js";
import Footer from "../Mainpage/components/layout/Footer.js";

export default function Profile(props) {
    const user = props.user;
    const isLoading = props.isLoading;
    const Admin = (user.Admin === true) ? true : false;

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
                <Sidebar user={user} isLoading={isLoading} />
                {(!Admin && <Content user={user} isLoading={isLoading} />) ||
                    (Admin && <ContentAdmin user={user} isLoading={isLoading} />)}
            </Container>
            <Footer />
        </ChakraProvider>
    )
}