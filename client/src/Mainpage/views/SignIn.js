import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, CircularProgress, FormLabel, Input, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
// import important components 
import { AuthContext } from "../context/AuthContext.js";
import { SectionProps } from '../utils/SectionProps.js';
// import other sections
import Footer from '../components/layout/Footer.js';
import FormHeader from '../components/elements/FormHeader.js';
import Header from "../components/layout/Header.js";

const propTypes = { ...SectionProps.types };
const defaultProps = { ...SectionProps.defaults };
const SignIn = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props }) => {

    const outerClasses = classNames(
        'signin section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );
    const innerClasses = classNames(
        'signin-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
    const { user, dispatch, error } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [theuser, settheuser] = useState(false);
    const [pass, setpass] = useState(false);
    const navigate = useNavigate();

    // Functions
    const handleClick = async () => {
        dispatch({ type: "SIGNIN_START" });
        try {
            setLoading(true);
            const res = await axios.post('https://broccolimedia.herokuapp.com/auth/signin',
                {
                    username: formik.values.username,
                    password: formik.values.password
                });
            dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.details });
            setLoading(false);
            navigate("/")
        } catch (err) {
            dispatch({ type: "SIGNIN_FAILURE", payload: err.response.data });
            setLoading(false);
            navigate("/signin")
        }
    };

    const check = (e) => {
        e.preventDefault()
        const usercheck = (formik.values.username === "");
        const passcheck = (formik.values.password === "");
        if (usercheck && passcheck) {
            settheuser(true);
            setpass(true);
            return;
        } else if (usercheck && !passcheck) {
            settheuser(true);
            setpass(false);
            return;
        } else if (!usercheck && passcheck) {
            settheuser(false);
            setpass(true);
            return;
        } else {
            settheuser(false);
            setpass(false);
            handleClick();
        }
    }

    const handleKeypress = useCallback((event) => {
        if (event.key === 'Enter') {
            check(event);
        }
    })

    const SignInSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username cannot be empty'),
        password: Yup.string()
            .required('Password cannot be empty'),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: SignInSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });



    useEffect(() => {
        if (user) { navigate(`/profile/in/${user.username}`); }

        window.addEventListener("keydown", handleKeypress);
        return () => {
            window.removeEventListener("keydown", handleKeypress);
        };

    }, [handleKeypress, navigate, user]);

    return (
        <>
            <Header signin={true} navPosition="right" className="reveal-from-bottom" />
            <br />
            <br />
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container-sm">
                    <div className={innerClasses}>
                        <div className="signin-content">
                            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                                <span className="Sim">
                                    <b>BM</b>
                                </span>
                                <span className="Full">&nbsp; Broccoli Media</span>
                            </h1>
                            <div className="container-xs">
                                <div className="m-0 mb-48 reveal-from-bottom" data-reveal-delay="600">
                                    <FormHeader className="headerTitle" title="Sign In" />
                                    {loading ?
                                        <CircularProgress mb={30} size='160px' isIndeterminate color='green.600' />
                                        :
                                        (<>
                                            <VStack>
                                                <FormLabel>Username</FormLabel>
                                                <Input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    onKeyUp={handleKeypress}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.username}
                                                />
                                                {theuser && <FormLabel>Username is required</FormLabel>}
                                            </VStack>
                                            <br />
                                            <VStack>
                                                <FormLabel>Password</FormLabel>
                                                <Input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onKeyUp={handleKeypress}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.password}
                                                />
                                                {pass && <FormLabel>Password is required</FormLabel>}
                                            </VStack>
                                        </>)}
                                    <br />
                                    {loading ?
                                        (<Button type="submit" className="button button-dark" tag="a" disabled={loading}>
                                            Almost there
                                        </Button>)
                                        :
                                        (<Button type="submit" className="button button-golden" tag="a" onClick={check}>
                                            Start Here
                                        </Button>)}
                                    <br />
                                    <br />
                                    <VStack>
                                        {error && <FormLabel>{error.message}</FormLabel>}
                                    </VStack>
                                    <VStack>
                                        <FormLabel>Not yet have account ? <Link to="/signup">SignUp</Link></FormLabel>
                                    </VStack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>

    );
}
SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;
export default SignIn;