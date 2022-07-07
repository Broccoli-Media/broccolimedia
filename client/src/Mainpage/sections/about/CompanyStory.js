import React, { useState } from 'react';
import classNames from 'classnames';
import { Box, Stepper, Step, StepContent, Button, Typography, Link } from "@mui/material";
// Import Neccesary Components
import { SectionTilesProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';

const propTypes = { ...SectionTilesProps.types }
const defaultProps = { ...SectionTilesProps.defaults }
const CompanyStory = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
}) => {

	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'The Story',
		paragraph: 'The long road of success for Broccoli Media'
	};

	const steps = [
		{
			label: 'The Beginning',
			des1: `Bridging global enterprises / brands and online celebrities / influencers is a challenge to world corporation, especially the local market. As a result, there should be a stable platform to integrate all the resources.`,
			des2: `Jackson and Edmond started to work in numbers of social media with substantial creators who wants to collaborate domestic and overseas companies.`,
			img: '',
		},
		{
			label: 'Making Solutions',
			des1: `To achieve the goal, Broccoli Media born in Melbourne to make it happen, established with effective communication links between our clients and individual users.`,
			des2: `Next, the fantastic platform completed in 2022, which was developed by another partner, Jeremy.`,
			img: '',
		},
		{
			label: 'Work Together Grow Bigger',
			des1: `As an early-stage start-up, it is the perfect timing to join the family and make it bigger, then grow with Broccoli Media to be a super star in the future.`,
			des2: `It is hard to walk on one foot, so cooperate with us and other people here to go faster, further, and better.`,
			img: '',
		},
	];

	const [activeStep, setActiveStep] = useState(0);
	const handleReset = () => { setActiveStep(0); };
	const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
	const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<Box>
							<Stepper activeStep={activeStep} orientation="vertical">
								{steps.map((step, index) => (
									<Step key={step.label}>
										<h3 style={{ color: "#b2c2ce" }}>{step.label}</h3>
										<StepContent>
											<Typography mb={3}>{step.des1}</Typography>
											<Typography mb={3}>{step.des2}</Typography>
											<Box sx={{ mb: 2 }}>
												<div>
													{activeStep === steps.length - 1 && (
														<Link href='/signup'>
															<Button
																onClick={handleBack}
																sx={{ mt: 1, mr: 1, color: "#E9E9FF", backgroundColor: "#107257" }}
																className="button-sm"
															>
																Join Us
															</Button>
														</Link>
													)}
													{activeStep < steps.length - 1 && (
														<Button
															variant="contained"
															onClick={handleNext}
															sx={{ mt: 1, mr: 1, backgroundColor: "#107257" }}
															className="button-sm"
														>
															Next
														</Button>
													)}
													{activeStep === steps.length - 1 && (
														<Button
															onClick={handleReset}
															sx={{ mt: 1, mr: 1, color: "#ACADFF" }}
															className="button-sm"
														>
															Start again
														</Button>
													)}
													{activeStep > 0 && (
														<Button
															onClick={handleBack}
															sx={{ mt: 1, mr: 1, color: "#56ddb7" }}
															className="button-sm"
														>
															{(index > 0 && index <= 2) ? 'Back' : null}
														</Button>
													)}
												</div>
											</Box>
										</StepContent>
									</Step>
								))}
							</Stepper>
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