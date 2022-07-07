import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Step, Stepper, StepLabel, StepContent, StepConnector, stepConnectorClasses, styled, Button, Paper } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
// Import page components
import Header from '../../components/layout/Header.js';
import Footer from '../../components/layout/Footer.js';

export default function SignupInf() {
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(0,110,244) 0%, rgb(0,110,244) 30%, rgb(0,55,120) 100%)',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(0,110,244) 0%, rgb(0,110,244) 30%, rgb(0,55,120) 100%)',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor: '#D2F9EE',
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: '#D2F9EE',
        zIndex: 1,
        color: '#b2c2ce',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundImage:
                'linear-gradient( 120deg, rgb(0,110,244) 0%, rgb(0,110,244) 30%, rgb(0,55,120) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            backgroundImage:
                'linear-gradient( 120deg, rgb(0,110,244) 0%, rgb(0,110,244) 30%, rgb(0,55,120) 100%)',
        }),
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;

        const icons = {
            1: <SettingsIcon />,
            2: <GroupAddIcon />,
            3: <VideoLabelIcon />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };
    const [activeStep, setActiveStep] = useState(0);
    const handleReset = () => { setActiveStep(0); };
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };

    const steps = [
        { label: 'Set up account', detail: (<FirstStep ac={activeStep} />) },
        { label: 'Fill the details', detail: (<></>) },
        { label: 'Submit', detail: (<></>) },
    ];

    return (
        <>
            <Header />
            <Box sx={{ width: '100%', marginTop: 15, marginBottom: 5 }}>
                <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                    {steps.map(({ label, detail }) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            <StepContent>
                                <FirstStep />
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Footer />
        </>
    );
}

function FirstStep(props) {
    return (
        <>

        </>
    )
}