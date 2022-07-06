import React, { useState } from 'react';
import classNames from 'classnames';
import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Link } from "@mui/material";
// Import Neccesary Components
import { SectionSplitProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';


const propTypes = {
	...SectionSplitProps.types
}

const defaultProps = {
	...SectionSplitProps.defaults
}

const CompanyStory = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, invertMobile, invertDesktop, alignTop, imageFill, ...props
}) => {

	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: 'About Broccoli Media',
		paragraph: 'The story behind the name'
	};

	const steps = [
		{
			label: 'The Beginning',
			des1: `To bridge global enterprises / brands and online celebrities / influencers, Broccoli Media born in Melbourne to make it happen`,
			des2: `Broccoli Media Team develop this platform to integrate all resources together, to attract substantial creators in the numbers of social media who wants to work with both domestic and overseas companies`,
			img: '',
		},
		{
			label: 'Making Solutions',
			des1: `For achieving the goal, each of team mambers has come up with several ideas, then decided to group a small team.`,
			des2: `Jackson and Edmond, the primary investors and Co-funders, created Broccoli Media in 2022`,
			img: '',
		},
		{
			label: 'Work Together Grow Bigger',
			des1: `Partner Jeremy joining later for develping the platform, then there are enough people to share the responsibility.`,
			des2: `As an early-stage startup, it is a perfect time to join Broccoli Media and grow with the family`,
			img: '',
		},
	];

	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
	const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
	const handleReset = () => { setActiveStep(0); };

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={splitClasses}>
						<Box justifyItems={"center"} max-width={'1000px'}>
							<Stepper activeStep={activeStep} orientation="vertical">
								{steps.map((step, index) => (
									<Step key={step.label}>
										{/* #D2F9EE */}
										<h4>{step.label}</h4>
										<StepContent>
											<Typography mb={3}>{step.des1}</Typography>
											<Typography mb={3}>{step.des2}</Typography>
											<Box sx={{ mb: 2 }}>
												<div>
													{activeStep < steps.length - 1 && (
														<Button
															variant="contained"
															onClick={handleNext}
															sx={{ mt: 1, mr: 1, backgroundColor: "#107257" }}
															className="button-sm"
														>
															Continue
														</Button>
													)}
													{activeStep === steps.length - 1 && (
														<Button
															variant="contained"
															onClick={handleReset}
															sx={{ mt: 1, mr: 1, backgroundColor: "#107257" }}
															className="button-sm"
														>
															Start again
														</Button>
													)}
													<Button
														onClick={handleBack}
														sx={{ mt: 1, mr: 1, color: "#56ddb7" }}
														className="button-sm"
													>
														{(index > 0 && index <= 2) ? 'Back' : null}
													</Button>
												</div>
											</Box>
										</StepContent>
									</Step>
								))}
							</Stepper>
							{/* {activeStep === steps.length && (
								<Paper square elevation={0} sx={{ p: 3, backgroundColor: "#003d53" }}>
									<Typography></Typography> 
									<Link onClick={handleReset} sx={{ mt: 1, mr: 1 }} className="button button-secondary button-wide-mobile button-sm">
										Read Story Again
									</Link>
								</Paper>
							)} */}
						</Box>
					</div>
				</div>
			</div>
		</section>
	);
}

CompanyStory.propTypes = propTypes;
CompanyStory.defaultProps = defaultProps;

export default CompanyStory;