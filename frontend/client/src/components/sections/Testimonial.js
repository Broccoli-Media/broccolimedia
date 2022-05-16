import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
	...SectionTilesProps.types
}

const defaultProps = {
	...SectionTilesProps.defaults
}

const Testimonial = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
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
		paragraph: 'Our company will provides you with premium services all the time'
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
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— We will do our best for our client, wherever you are, you will always be
										our priority to support and have our instant services.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">CEO</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="https://www.linkedin.com/in/jackson-feng-b31557239">BM Jackson Feng</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— Your privacy is always the priority to us, we will secure all your personal data and keep
										them safe from any risks.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">CTO</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="https://jeremyhuang-portfolio.netlify.app/">Jeremy Huang</a>
									</span>
								</div>
							</div>
						</div>

						{/* <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">CFO</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}

					</div>
				</div>
			</div>
		</section>
	);
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;