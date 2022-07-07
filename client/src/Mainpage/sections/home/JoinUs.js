import React from 'react';
import classNames from 'classnames';
import { Link } from '@chakra-ui/react';
// Import Necessary Components
import { SectionSplitProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';
import Image from '../../components/elements/Image.js';

const propTypes = { ...SectionSplitProps.types }
const defaultProps = { ...SectionSplitProps.defaults }
const JoinUs = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, invertMobile, invertDesktop, alignTop, imageFill, ...props
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
		'features-split-inner section-inner pt-0',
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
		title: 'Embrace The Future',
		paragraph: 'We make possibilities, we don\'t miss any chance'
	};

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={splitClasses}>
						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
								<h3 className="text-color-secondary fw-600 tt-u mt-0 mb-12">
									Start from Everywhere
								</h3>
								<p className="m-0">
									Social Media are on everyone's lips right now and the number of users
									has increased rapidly in just a decade. Broccoli Media offers the option to
									promote clients' products or service in this environment. Can be accessed to
									advertising space on relevant media such as Youtube, Tiktok, Instagram, Little Red Book,
									and other famous social media, and work directly with Broccoli Media cooperative partners,
									which are the numberous content creators.
								</p>
								<br />

								<Link href='/about' className="button button-wangwang button-wide-mobile"> More BM </Link>
								{' '}
								<Link href='/signup' className="button button-wangwang button-wide-mobile"> Join Here </Link>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={'/assets/images/enjoy.png'}
									alt="Features split 01"
									width={350}
									height={350} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

JoinUs.propTypes = propTypes;
JoinUs.defaultProps = defaultProps;
export default JoinUs;