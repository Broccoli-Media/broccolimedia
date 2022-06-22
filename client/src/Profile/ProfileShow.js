import React, { useState } from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import axios from '../Mainpage/utils/Axios';
// Page components
import Cover from './Cover';
import SidebarShow from './Sidebar/SidebarShow';
import { theme } from '../Assets/scss/settings/profile/extendTheme';
// Page settings
import Header from "../Mainpage/components/layout/Header";
import Footer from "../Mainpage/components/layout/Footer"

export default function ProfileShow() {
    const suburl = useParams();
    const username = suburl.username;
    const [show, setShow] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`/user/${username}`);
        setShow(res.data);
    }

    fetchData();

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Cover />
            <Container display={{ base: 'block', md: 'flex' }} maxW="1240px">
                <SidebarShow user={show} />
            </Container>
            <Footer />
        </ChakraProvider>
    )
}