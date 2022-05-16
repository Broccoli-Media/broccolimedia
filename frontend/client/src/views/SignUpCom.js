// import React, { useRef } from 'react';
import React from 'react';
// import { useFormik } from 'formik';
import { Link as Go } from 'react-router-dom';
// import * as Yup from 'yup';
import { Box } from '@mui/material';
// import { Box, Button, Checkbox, Container, FormHelperText, Link, TextField, Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function SignUpCom () {

    return (
        <div>
            <Go className='button-block' to='/'>
                <ArrowBackIcon />
            </Go>
            <iframe title='Company Form' src="https://docs.google.com/forms/d/e/1FAIpQLScIviRapTn3LBBOQ1-oBQ8IfYeZxVjg02lrLEfmmkQkwQ_lHQ/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            {/* <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <iframe title='Company Form' src="https://docs.google.com/forms/d/e/1FAIpQLScIviRapTn3LBBOQ1-oBQ8IfYeZxVjg02lrLEfmmkQkwQ_lHQ/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Box> */}
        </div>
    );

    // const signUp = () =>{

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

    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);

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
                
    //             {/* <Container maxWidth="sm">
    //                 <form onSubmit={formik.handleSubmit}>
    //                     <Box sx={{ my: 3 }}>
    //                         <Typography
    //                             color="textPrimary"
    //                             variant="h4"
    //                         >
    //                             Create a new account
    //                         </Typography>
    //                         <Typography
    //                             color="textSecondary"
    //                             gutterBottom
    //                             variant="body2"
    //                         >
    //                             Use your email to create a new account
    //                         </Typography>
    //                     </Box>
    //                     <TextField
    //                         error={Boolean(formik.touched.email && formik.errors.email)}
    //                         fullWidth
    //                         helperText={formik.touched.email && formik.errors.email}
    //                         label="Email Address"
    //                         margin="normal"
    //                         name="email"
    //                         onBlur={formik.handleBlur}
    //                         onChange={formik.handleChange}
    //                         type="email"
    //                         value={formik.values.email}
    //                         variant="outlined"
    //                         ref={emailRef}
    //                     />
    //                     <TextField
    //                         error={Boolean(formik.touched.password && formik.errors.password)}
    //                         fullWidth
    //                         helperText={formik.touched.password && formik.errors.password}
    //                         label="Password"
    //                         margin="normal"
    //                         name="password"
    //                         onBlur={formik.handleBlur}
    //                         onChange={formik.handleChange}
    //                         type="password"
    //                         value={formik.values.password}
    //                         variant="outlined"
    //                         ref={passwordRef}
    //                     />
    //                     <Box
    //                         sx={{
    //                             alignItems: 'center',
    //                             display: 'flex',
    //                             ml: -1
    //                         }}
    //                     >
    //                         <Checkbox
    //                             checked={formik.values.policy}
    //                             name="policy"
    //                             onChange={formik.handleChange}
    //                         />
    //                         <Typography
    //                             color="textSecondary"
    //                             variant="body2"
    //                         >
    //                             I have read the
    //                             {' '}
    //                             <Go
    //                                 to="#"
    //                                 passHref
    //                             >
    //                                 <Link
    //                                     color="primary"
    //                                     underline="always"
    //                                     variant="subtitle2"
    //                                 >
    //                                     Terms and Conditions
    //                                 </Link>
    //                             </Go>
    //                         </Typography>
    //                     </Box>
    //                     {Boolean(formik.touched.policy && formik.errors.policy) && (
    //                         <FormHelperText error>
    //                             {formik.errors.policy}
    //                         </FormHelperText>
    //                     )}
    //                     <Box sx={{ py: 2 }}>
    //                         <Button
    //                             color="primary"
    //                             disabled={formik.isSubmitting}
    //                             fullWidth
    //                             size="large"
    //                             type="submit"
    //                             variant="contained"
    //                             onClick={signUp}
    //                         >
    //                             Sign Up Now
    //                         </Button>
    //                     </Box>
    //                     <Typography
    //                         color="textSecondary"
    //                         variant="body2"
    //                     >
    //                         Have an account?
    //                         {' '}
    //                         <Go
    //                             href="/login"
    //                             passHref
    //                         >
    //                             <Link
    //                                 variant="subtitle2"
    //                                 underline="hover"
    //                             >
    //                                 Sign In
    //                             </Link>
    //                         </Go>
    //                     </Typography>
    //                 </form>
    //             </Container> */}
    //         </Box>
    //     </>
    // );
};