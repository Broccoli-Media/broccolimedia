import React from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
// Page components
import Cover from './Cover';
import SidebarShow from './Sidebar/SidebarShow';
import { theme } from '../Assets/scss/settings/profile/extendTheme';
// Page settings
import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"

export default function ProfileShow(props) {
    const isLoading = props.isLoading;
    const user = props.user;

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="1240px">
                <SidebarShow user={user} isLoading={isLoading} />
            </Container>
            <Footer />
        </ChakraProvider>
    )
}