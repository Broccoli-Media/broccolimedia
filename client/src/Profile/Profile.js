import React, { useContext } from 'react';
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
// Necessary components
import { AuthContext } from "../Mainpage/context/AuthContext.js";

export default function Profile() {
    const { user, loading } = useContext(AuthContext);
    const Admin = (user.Admin === true) ? true : false;

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
                <Sidebar user={user} isLoading={loading} />
                {(!Admin && <Content user={user} isLoading={loading} />) ||
                    (Admin && <ContentAdmin user={user} isLoading={loading} />)}
            </Container>
            <Footer />
        </ChakraProvider>
    )
}