import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@chakra-ui/react";
import classNames from 'classnames';
// import important components 
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";
import { SectionProps } from '../utils/SectionProps.js';
// import other sections
import Input from "../components/elements/Input.js";
import Footer from '../components/layout/Footer.js';
import Button from '../components/elements/Button.js';
import FormHeader from '../components/elements/FormHeader.js';

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
    const [credentials, setCredentials] = useState({ username: undefined, password: undefined, });
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    // Functions
    const handleChange = (e) => { setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value })); };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "SIGNIN_START" });
        try {
            const res = await axios.post('https://broccolimedia.herokuapp.com/auth/signin', credentials);
            dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "SIGNIN_FAILURE", payload: err.response.data });
            navigate("/signin")
        }
    };

    const handleKeypress = (e) => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    };
    useEffect(() => {
        if (user) {
            navigate(`/profile/in/${user.username}`);
        }
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
                            {/* <h3 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                Enjoy BM wherever you are
                            </h3> */}
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
                                    <br />
                                    <br />

                                    <Button className="button button-golden button-wide-mobile" tag="a" disabled={loading} onClick={handleClick}>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                {error && <Alert>{error.message}</Alert>}
            </div>
            <Footer />
        </section>
    );
}
SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;
export default SignIn;