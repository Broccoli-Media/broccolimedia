import React from 'react';
import classNames from 'classnames';
import Marquee from 'react-fast-marquee';
import { Image } from '@chakra-ui/react';
// Import Basic Components
import { SectionTilesProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';

const propTypes = { ...SectionTilesProps.types }
const defaultProps = { ...SectionTilesProps.defaults }
const CompanyPartners = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
}) => {

	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		// hasBgColor && 'has-bg-color',
		// invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	// const tilesClasses = classNames(
	// 	'tiles-wrap center-content',
	// 	pushLeft && 'push-left'
	// );

	const sectionHeader = {
		title: 'Being Trusted By Companies',
		paragraph: 'All of our valuable partners will help the world become better'
	};

	const companies = [
		{ id: 1, img: '/assets/images/austchina.jpg' },
		{ id: 2, img: '/assets/images/gaosheng.jpg' },
		{ id: 3, img: '/assets/images/haicheng.jpg' },
		{ id: 4, img: '/assets/images/jinshi.jpg' },
		{ id: 5, img: '/assets/images/masterlanzhou.jpg' },
		{ id: 6, img: '/assets/images/pia.jpg' },
		{ id: 7, img: '/assets/images/tianfu.jpg' },
		{ id: 8, img: '/assets/images/unitop.jpg' },
	]

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses} >
					<SectionHeader data={sectionHeader} className="center-content" />
					<div data-reveal-delay="200">
						<Marquee speed={120} pauseOnHover gradient={false}>
							{companies.map(({ id, img }) => (
								<Image key={id} boxSize='45px' margin={'auto 40px'} src={img} width="80%" />
							))}
						</Marquee>
						<br />
						<Marquee speed={120} pauseOnHover gradient={false} direction={'right'}>
							{companies.map(({ id, img }) => (
								<Image key={id} boxSize='45px' margin={'auto 40px'} src={img} width="80%" />
							))}
						</Marquee>
					</div>
				</div>
			</div>
		</section>
	);
}

CompanyPartners.propTypes = propTypes;
CompanyPartners.defaultProps = defaultProps;

export default CompanyPartners;