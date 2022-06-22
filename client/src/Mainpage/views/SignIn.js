import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../utils/Axios.js";
import classNames from 'classnames';
import { Alert } from "@chakra-ui/react";
// import important components 
import { AuthContext } from "../context/AuthContext.js";
import { SectionProps } from '../utils/SectionProps.js';
// import other sections
import FormHeader from '../components/elements/FormHeader'
import Button from '../components/elements/Button';
import Input from "../components/elements/Input";
import Footer from '../components/layout/Footer';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const SignIn = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

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

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const [nouser, setNouser] = useState(false);
    const [nopass, setpass] = useState(false);

    const config = {
        headers: {
            "Access-Control-Allow-Origin": 'https://broccolimedia.net/, http://localhost:3000',
            "Access-Control-Allow-Methods": 'GET,POST,DELETE,UPDATE,PUT,PATCH,OPTIONS',
            "Access-Control-Allow-Headers": "X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, application/json",
            "Access-Control-Allow-Credentials": true
        }
    };

    const handleClick = async (e) => {
        if ((credentials.username === undefined)) { setNouser(true); }
        if ((credentials.password === undefined)) { setpass(true); }
        e.preventDefault();
        if ((credentials.username !== undefined) && (credentials.password !== undefined)) {
            dispatch({ type: "SIGNIN_START" });
            try {
                const res = await Axios.post("/auth/signin", credentials, config);
                dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.details });
                navigate("/")
            } catch (err) {
                dispatch({ type: "SIGNIN_FAILURE", payload: err.response.data });
            }
        }
    };

    const handleKeypress = (e) => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    };

    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) { navigate("/profile") }
    });

    return (
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
                            <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Enjoy BM wherever you are
                            </h3>
                            <br />
                            <div className="m-0 mb-48 reveal-from-bottom" data-reveal-delay="600">
                                <div className="loginform">
                                    <FormHeader className="headerTitle" title="Sign In" />
                                    <Input
                                        id="username"
                                        type="text"
                                        className="row"
                                        onChange={handleChange}
                                        onKeyPress={handleKeypress}
                                        placeholder="Username"
                                    />
                                    {nouser && <Alert status='warning' className="headerTitle">
                                        Username cannot be empty
                                    </Alert>}
                                    { }
                                    <br />
                                    <br />
                                    <Input
                                        id="password"
                                        type="password"
                                        className="row"
                                        onChange={handleChange}
                                        onKeyPress={handleKeypress}
                                        placeholder="Password"
                                    />
                                    {nopass && <Alert status='warning' className="headerTitle">
                                        Password cannot be empty
                                    </Alert>}
                                    <br />
                                    <br />
                                    <Button disabled={loading} onClick={handleClick} tag="a" color="button-gold" wideMobile>
                                        Get Started
                                    </Button>
                                </div>

                            </div>
                            <br />
                            {/* <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                                <Button disabled={loading} onClick={handleClick} tag="a" color="button-gold" wideMobile>
                                    Get Started
                                </Button>
                            </div> */}

                        </div>
                    </div>
                </div>
                {error && <span>{error.message}</span>}
            </div>
            <Footer />
        </section>
    );
}

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;

export default SignIn;