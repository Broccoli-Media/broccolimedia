import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
// Necessary Components
import useFetch from "../../utils/UseFetch.js";
import { Avatar, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

const propTypes = { ...SectionTilesProps.types }
const defaultProps = { ...SectionTilesProps.defaults }
const Testimonial = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
}) => {

	const outerClasses = classNames(
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'We are here all the time',
		paragraph: 'Our company will provides you with premium services all the time',
	};

	// const { data } = useFetch(`https://broccolimedia.herokuapp.com/user/alladmin/`);
	// console.log(data)
	// const CEO = (data.filter(({ userTitle }) => { return userTitle === "CEO"; }))[0];
	// const CTO = (data.filter(({ userTitle }) => { return userTitle === "CTO"; }))[0];
	// const Cofunder = (data.filter(({ userTitle }) => { return userTitle === "Co-Funder"; }))[0];


	// CEO
	const { isCEOOpen, onCEOOpen, onCEOClose } = useDisclosure();
	const CEOOverlay = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const [CEOoverlay, setCEOOverlay] = useState(<CEOOverlay />);
	// CTO
	const { isCTOOpen, onCTOOpen, onCTOClose } = useDisclosure();
	const CTOOverlay = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const [CTOoverlay, setCTOOverlay] = useState(<CTOOverlay />);
	// CO-Funder
	const { isCofunderOpen, onCofunderOpen, onCofunderClose } = useDisclosure();
	const CofunderOverlay = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const [Cofunderoverlay, setCofunderOverlay] = useState(<CofunderOverlay />);

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>

						<div className="tiles-item reveal-from-right" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<span className="testimonial-item-name text-color-high">Co-Funder &amp; CEO</span>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://www.linkedin.com/in/jackson-feng-b31557239">BM Jackson Feng</a>
									</span>
								</div>
								{/* <Avatar
									size="md"
									name={CEO.displayName}
									cursor="pointer"
									onClick={() => {
										setCEOOverlay(<CEOOverlay />)
										onCEOOpen()
									}}
									src={CEO.img} /> */}
								<p className="text-sm mb-0">
									— Our clients will be offerd the best services wherever you are, and always be
									our priority to serve.
								</p>
							</div>
						</div>
						{/* <Modal isCentered isOpen={isCEOOpen} onClose={onCEOClose}>
							{CEOoverlay}
							<ModalContent>
								<ModalHeader>{CEO.displayName}</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Image boxSize='80%' src={CEO.img} alt={CEO.username} />
								</ModalBody>
								<ModalFooter>
									<Button onClick={onCEOClose}>Close</Button>
								</ModalFooter>
							</ModalContent>
						</Modal> */}

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<span className="testimonial-item-name text-color-high">Co-Funder &amp; CTO</span>
								<div className="testimonial-item-footer text-xs mt-16 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://fusheng.info">BM Jeremy Huang</a>
									</span>
								</div>
								{/* <Avatar
									size="md"
									name={CTO.displayName}
									cursor="pointer"
									onClick={() => {
										setCTOOverlay(<CTOOverlay />)
										onCTOOpen()
									}}
									src={CTO.img} /> */}
								<p className="text-sm mb-0">
									— Privacy is always the priority to us, we will secure all personal data under
									all circumstatnces.
								</p>
							</div>
						</div>
						{/* <Modal isCentered isOpen={isCTOOpen} onClose={onCTOClose}>
							{CTOoverlay}
							<ModalContent>
								<ModalHeader>{CTO.displayName}</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Image boxSize='80%' src={CTO.img} alt={CTO.username} />
								</ModalBody>
								<ModalFooter>
									<Button onClick={onCTOClose}>Close</Button>
								</ModalFooter>
							</ModalContent>
						</Modal> */}

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<span className="testimonial-item-name text-color-high">Co-Funder</span>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://www.linkedin.com/in/chenjui-weng-68874623a/">BM Edmond Weng</a>
									</span>
								</div>
								{/* <Avatar
									size="md"
									name={Cofunder.displayName}
									cursor="pointer"
									onClick={() => {
										setCofunderOverlay(<CofunderOverlay />)
										onCofunderOpen()
									}}
									src={Cofunder.img} /> */}
								<p className="text-sm mb-0">
									— All our users are valualbe, you deserve the best.
								</p>
							</div>
						</div>
						{/* <Modal isCentered isOpen={isCofunderOpen} onClose={onCofunderClose}>
							{Cofunderoverlay}
							<ModalContent>
								<ModalHeader>{Cofunder.displayName}</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Image boxSize='80%' src={Cofunder.img} alt={Cofunder.username} />
								</ModalBody>
								<ModalFooter>
									<Button onClick={onCofunderClose}>Close</Button>
								</ModalFooter>
							</ModalContent>
						</Modal> */}
					</div>
				</div>
			</div>
		</section>
	);
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;