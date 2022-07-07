import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = { ...SectionProps.types }
const defaultProps = { ...SectionProps.defaults }
const Hero = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props
}) => {

	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1 className="mt-0 mb-64 reveal-from-bottom" data-reveal-delay="200">
							<span className="Sim">
								<b>BM</b>
							</span>
							<span className="Full">&nbsp; Broccoli Media</span>
						</h1>
					</div>
					
					<video autoPlay="autoPlay" loop width="800" height="200" muted>
						<source src="/assets/video/adventure.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	);
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
export default Hero;