import React from 'react';
import classNames from 'classnames';
// Import Neccesary Components
import { SectionTilesProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';
import Image from '../../components/elements/Image.js';

const propTypes = { ...SectionTilesProps.types }
const defaultProps = { ...SectionTilesProps.defaults }
const FeaturesTiles = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
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
		title: 'Opportunity Starts Here',
		paragraph: 'Let BM be your best friend and explore more possibility'
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

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={'https://i.imgur.com/07TtjJD.png'}
											alt="Features tile icon 01"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Simple Actions
									</h4>
									<p className="m-0 text-sm">
										Earning money in few steps with clear instructions
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={'https://i.imgur.com/xBmh2ge.png'}
											alt="Features tile icon 02"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Friendly Experts
									</h4>
									<p className="m-0 text-sm">
										Available to talk to staff easily with fully and instant support
									</p>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={'https://i.imgur.com/swzAtX2.png'}
											alt="Features tile icon 03"
											width={64}
											height={64} />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">
										Privacy Security
									</h4>
									<p className="m-0 text-sm">
										Privacy will be BM's priority and also be safely protected by government
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;