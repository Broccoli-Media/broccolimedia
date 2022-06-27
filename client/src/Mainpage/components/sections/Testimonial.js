import React, { Suspense, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
// Necessary Components
import useFetch from "../../utils/UseFetch.js";
import {
	Avatar, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent,
	ModalFooter, ModalHeader, ModalOverlay, useDisclosure, SkeletonCircle
} from '@chakra-ui/react';
import axios from 'axios';

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
								<div className="testimonial-item-footer text-xs mt-10 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://www.linkedin.com/in/jackson-feng-b31557239">BM Jackson Feng</a>
									</span>
								</div>
								<Suspense fallback={<SkeletonCircle />}>
									<Avatar
										mt={"10"}
										mb={"10"}
										size="md"
										name={'BM Jackson Feng'}
										// cursor="pointer"
										// onClick={() => {
										// 	setCTOOverlay(<CTOOverlay />)
										// 	onCTOOpen()
										// }}
										src={'https://res.cloudinary.com/broccoli-media/image/upload/v1653613774/upload/ffdeisr8fqolp1am5cjd.jpg'}
									/>
								</Suspense>
								<p className="text-sm mb-0">
									— Our clients will be offerd the best services wherever you are, and always be
									our priority to serve.
								</p>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<span className="testimonial-item-name text-color-high">Co-Funder &amp; CTO</span>
								<div className="testimonial-item-footer text-xs mt-10 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://fusheng.info">BM Jeremy Huang</a>
									</span>
								</div>

								<Avatar
									mt={"10"}
									mb={"10"}
									size="sm"
									name={"BM Jeremy Huang"}
									// cursor="pointer"
									// onClick={() => {
									// 	setCTOOverlay(<CTOOverlay />)
									// 	onCTOOpen()
									// }}
									src={"https://i.imgur.com/ZS2SfLR.jpg?1"}
								/>

								<p className="text-sm mb-0">
									— Privacy is always the priority to us, we will secure all personal data under
									all circumstatnces.
								</p>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<span className="testimonial-item-name text-color-high">Co-Funder</span>
								<div className="testimonial-item-footer text-xs mt-10 mb-0 has-top-divider">
									<span className="testimonial-item-link">
										<a href="https://www.linkedin.com/in/chenjui-weng-68874623a/">BM Edmond Weng</a>
									</span>
								</div>
								<Avatar
									mt={"10"}
									mb={"10"}
									size="md"
									name={"BM Edmond Weng"}
									// cursor="pointer"
									// onClick={() => {
									// 	setCofunderOverlay(<CofunderOverlay />)
									// 	onCofunderOpen()
									// }}
									src={"https://i.imgur.com/msQjc8N.png?2"} />
								<p className="text-sm mb-0">
									— All our users are valualbe, you deserve the best.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;