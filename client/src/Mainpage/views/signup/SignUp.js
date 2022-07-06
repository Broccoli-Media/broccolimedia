import React, { useState } from "react";
import classNames from 'classnames';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
// import important components 
import { SectionProps } from '../../utils/SectionProps.js';
// import other sections
import Footer from '../../components/layout/Footer.js';
import FormHeader from '../../components/elements/FormHeader.js';
import Header from "../../components/layout/Header.js";
import { Link } from "react-router-dom";

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

	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<>
			<Header signup={true} navPosition="right" className="reveal-from-bottom" />
			<br />
			<br />
			<section
				{...props}
				className={outerClasses}
			>
				<div className="container-sm">
					<div className={innerClasses}>
						<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
							<span className="Sim">
								<b>BM</b>
							</span>
							<span className="Full">&nbsp; Broccoli Media</span>
						</h1>
						<div className="container-xs">
							<div className="m-0 mb-48 reveal-from-bottom" data-reveal-delay="600">
								<FormHeader className="headerTitle" title="Sign Up" />
								<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel1bh-content"
										id="panel1bh-header"
									>
										<Typography sx={{ width: '33%', flexShrink: 0 }}>
											General Rules
										</Typography>
										<Typography sx={{ color: 'text.secondary' }}>For all users</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											We are not able to provide normal visitor with a dashboard and a personal profile based on company policy.
											You can still look around and join our big falimy later.
										</Typography>
										<Link to="/"><Button>Back to Main Page</Button></Link>
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel2bh-content"
										id="panel2bh-header"
									>
										<Typography sx={{ width: '33%', flexShrink: 0 }}>Company</Typography>
										<Typography sx={{ color: 'text.secondary' }}>
											For Company Owners
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Will need to contact us for quick reviewing to confirm your compoany.
										</Typography>
										<Button disabled> Not yet open to register</Button>
										{/* <Link to="/signup/com"><Button>Enter basic details </Button></Link> */}
									</AccordionDetails>
								</Accordion>
								<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel3bh-content"
										id="panel3bh-header"
									>
										<Typography sx={{ width: '33%', flexShrink: 0 }}>
											Influencer
										</Typography>
										<Typography sx={{ color: 'text.secondary' }}>
											For Individual Influencer
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Choose your work type and check if you want to start on revenue mode.
										</Typography>
										{/* <Link to="/signup/inf"><Button>Join BM family</Button></Link> */}
										<Button disabled> Not yet open to register</Button>
									</AccordionDetails>
								</Accordion>
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