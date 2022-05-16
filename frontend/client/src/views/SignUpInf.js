/* eslint-disable jsx-a11y/iframe-has-title */
// import React, { useRef, useState } from 'react';
import React from 'react';
// import { useFormik } from 'formik';
import { Link as Go } from 'react-router-dom';
// import * as Yup from 'yup';
import { Box } from '@mui/material';
// import { Box, Button, Checkbox, Container, FormHelperText, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Input from "../components/elements/Input"
// import Select from "../components/elements/Select"

export default function SignUpInf() {

    return (
        <div>
            <Go className='button-block' to='/'>
                <ArrowBackIcon />
            </Go>
            <iframe title='Individual Form' src="https://docs.google.com/forms/d/e/1FAIpQLScK8TAOebQY9DVfuEUV60krgYO_yr97Ud29I1Zx6ztqr62jPg/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            {/* <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <iframe title='Individual Form' src="https://docs.google.com/forms/d/e/1FAIpQLScK8TAOebQY9DVfuEUV60krgYO_yr97Ud29I1Zx6ztqr62jPg/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Box> */}
        </div>

    );
    // const [emailerror, setEmailError] = useState('')

    // const signUp = () => {

    // }

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         policy: false
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup
    //             .string()
    //             .email(
    //                 'Must be a valid email')
    //             .max(255)
    //             .required(
    //                 'Email is required'),
    //         password: Yup
    //             .string()
    //             .max(255)
    //             .required(
    //                 'Password is required'),
    //         policy: Yup
    //             .boolean()
    //             .oneOf(
    //                 [true],
    //                 'This field must be checked'
    //             )
    //     }),
    // });

    // return (
    //     <>
    //         <Box
    //             component="main"
    //             sx={{
    //                 alignItems: 'center',
    //                 display: 'flex',
    //                 flexGrow: 1,
    //                 minHeight: '100%'
    //             }}
    //         >

    //             <Container maxWidth="sm">

    //                 <Go to='/'>
    //                     <ArrowBackIcon />
    //                 </Go>

    //                 <form>
    //                     <fieldset>
    //                         <div className="mb-16">
    //                             <Input
    //                                 type="text"
    //                                 placeholder="Your name on passport"
    //                                 label="Full name"
    //                             />
    //                         </div>
    //                         {/* <div className="mb-16">
    //                             <Input
    //                                 type="text"
    //                                 placeholder="Username"
    //                                 value="Cruip"
    //                                 label="Username"
    //                                 required />
    //                         </div> */}
    //                         <div className="mb-16">
    //                             <Input
    //                                 type="email"
    //                                 placeholder="Your Email"
    //                                 label="Email"
    //                                 required />
    //                         </div>
    //                         <div className="mb-16">
    //                             <Select label="Favourite color">
    //                                 <option hidden>Current Status</option>
    //                                 <option>Student</option>
    //                                 <option>Looking for full-time job</option>
    //                                 <option>Already have job</option>
    //                             </Select>
    //                         </div>
    //                         {/* <div className="mb-16">
    //                             <Input
    //                                 type="textarea"
    //                                 placeholder="Tell us if you would like to "
    //                                 label="Message" />
    //                         </div> */}
    //                         <div className="mt-24">
    //                             <div className="button-group">
    //                                 <Button onClick={''} color="primary">Submit</Button>
    //                                 <a href='/' className="button-link text-xs">Cancel</a>
    //                             </div>
    //                         </div>
    //                     </fieldset>
    //                 </form>
    //             </Container>
    //         </Box>
    //     </>
    // );
};