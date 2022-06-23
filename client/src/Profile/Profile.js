import React, { useContext } from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover';
import Content from './Content/Content';
import ContentAdmin from './Content/ContentAdmin';
import Sidebar from './Sidebar/Sidebar';
import { theme } from '../Assets/scss/settings/profile/extendTheme';
// Page settings
import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"
// Necessary components
import { AuthContext } from "../Mainpage/context/AuthContext.js";

export default function Profile() {
    const { user } = useContext(AuthContext);
    const Admin = (user.Admin === true) ? true : false;

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
                <Sidebar user={user} />
                {(!Admin && <Content user={user} />) ||
                (Admin && <ContentAdmin user={user} />)}
            </Container>
            <Footer />
        </ChakraProvider>
    )
}