import React from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import useFetch from '../Mainpage/components/hooks/UseFetch';
// Page components
import Cover from './Cover';
import SidebarShow from './Sidebar/SidebarShow';
import { theme } from '../Assets/scss/settings/profile/extendTheme';
// Page settings
import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"

export default function ProfileShow() {
    // const project = ProjectList.find(show => show.check === `${id}`);
    const suburl = useParams();
    const username = suburl.username;

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