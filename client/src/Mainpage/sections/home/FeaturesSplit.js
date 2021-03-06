import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';
import Image from '../../components/elements/Image.js';

const propTypes = {
	...SectionSplitProps.types
}

const defaultProps = {
	...SectionSplitProps.defaults
}

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
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
		title: 'Visualized Performance & Competitive Model',
		paragraph: 'Best platform for both companies and influencers'
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
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Simple &amp; Perfect
								</div>
								<h3 className="text-color-secondary fw-600 tt-u mt-0 mb-12">
									Personal Profile
								</h3>
								<p className="m-0">
									Share your profile and let others know about your great performance
								</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={'https://i.imgur.com/6v6wDOK.png'}
									alt="Features split 01"
									width={528}
									height={396} />
							</div>
						</div>
						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Super clear &amp; easy
								</div>
								<h3 className="text-color-secondary fw-600 tt-u mt-0 mb-12">
									Personal Dashboard
								</h3>
								<p className="m-0">
									Visulize profit and make everything possible
								</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={'https://i.imgur.com/iiaeUJz.png'}
									alt="Features split 01"
									width={300}
									height={100} />
							</div>
						</div>

						<div className="split-item">
							<div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Competitive &amp; Grow Faster
								</div>
								<h3 className="text-color-secondary fw-600 tt-u mt-0 mb-12">
									Peer Ranking
								</h3>
								<p className="m-0">
									Showing the most popular influencers are and learn from others to grow faster
								</p>
							</div>
							<div className={
								classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container=".split-item">
								<Image
									src={'https://i.imgur.com/dTqsVKt.png'}
									alt="Features split 02"
									width={528}
									height={396} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;