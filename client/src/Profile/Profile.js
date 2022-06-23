import React from 'react';
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

export default function Profile(props) {
    const isLoading = props.isLoading;
    const user = props.user;
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