import React from 'react';
import { Button, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
// Import page components
// import intro from '../../Assets/videos/Broccolimedia Intro.mp4';
import Hero from '../../sections/home/Hero.js';

export default function SignupInf() {
    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("Username required"),
        password: Yup.string()
            .required("Password required")
            .min(8, "Password is too short"),
        email: Yup.string().email("invalid email").required("email required"),
    })

    return (
        <>
            <Hero />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.resetForm();
                }}
            >
                {formik => (
                    <VStack
                        as="form"
                        mx="auto"
                        // w={{ base: "90%", md: 500 }}
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                    >
                        <Heading>Sign Up</Heading>

                        {/* <TextField name="username" placeholder="enter username" />
                        <TextField name="email" placeholder="enter email" type="email" /> */}

                        {/* <TextField
                            name="password"
                            type="password"
                            placeholder="enter password"
                        /> */}
                        <FormLabel />
                        <Input name="username"  />

                        <Button className='button button-wangwang'>
                            Sign Up
                        </Button>
                    </VStack>
                )}
            </Formik>
        </>

    );
}