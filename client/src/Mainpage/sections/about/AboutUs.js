import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Grid, Paper } from "@mui/material";
// Import Neccesary Components
import { SectionTilesProps } from '../../utils/SectionProps.js';
import SectionHeader from './partials/SectionHeader.js';

const propTypes = { ...SectionTilesProps.types };
const defaultProps = { ...SectionTilesProps.defaults };
let caseTimer, readTimer, userTimer, cliTimer;

const AboutUs = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props
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
		title: 'Who is BM',
		paragraph: 'Know more about Broccoli Media and have a great time with us'
	};

	const [countCase, setCase] = useState(0);
	const [countRead, setRead] = useState(0);
	const [countUser, setUsers] = useState(0);
	const [countCli, setCli] = useState(0);
	let totalRead, showRead, amountWord;
	const cases = 30, read = 50000, users = 20, clients = 10;

	if (read < 1000) {
		totalRead = 1;
		amountWord = ""
	} else if (1000 <= read && read < 1000000) {
		totalRead = 1000;
		amountWord = "K";
	} else if (1000000 <= read && read < 1000000000) {
		totalRead = 1000000;
		amountWord = "M"
	}

	useEffect(() => {
		clearInterval(caseTimer)
		clearInterval(readTimer)
		clearInterval(userTimer)
		clearInterval(cliTimer)

		caseTimer = setInterval(() => {
			if (countCase > cases) {
				clearInterval(caseTimer)
				setCase(cases)
				return
			} else if (countCase === cases) {
				clearInterval(caseTimer)
				return
			}
			setCase(prev => prev + 1)

		}, 10)
		readTimer = setInterval(() => {
			if (countRead > read) {
				clearInterval(readTimer)
				setRead(read)
				return
			} else if (countRead === read) {
				clearInterval(readTimer)
				return
			}
			setRead(prev => prev + 500)

		}, 10)
		userTimer = setInterval(() => {
			if (countUser > users) {
				clearInterval(userTimer)
				setUsers(users)
				return
			} else if (countUser === users) {
				clearInterval(userTimer)
				return
			}
			setUsers(prev => prev + 1)

		}, 10)
		cliTimer = setInterval(() => {
			if (countCli > clients) {
				clearInterval(cliTimer)
				setCli(clients)
				return
			} else if (countCli === clients) {
				clearInterval(cliTimer)
				return
			}
			setCli(prev => prev + 1)

		}, 10)

		return () => {
			clearInterval(caseTimer)
			clearInterval(readTimer)
			clearInterval(userTimer)
			clearInterval(cliTimer)
		}
	}, [countCase, countRead, countUser, countCli])

	showRead = Math.round((countRead / totalRead));

	const stats = [
		{ id: 1, label: "Cases", stat: `${countCase}+` },
		{ id: 2, label: "Reading Numbers", stat: `${showRead}${amountWord}+` },
		{ id: 3, label: "Happy Users", stat: `${countUser}+` },
		{ id: 4, label: "Happy Clients", stat: `${countCli}+` }
	]

	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						{/* Company Introduction */}
						<h4 style={{ paddingTop: 0, marginTop: 0, margin: "auto", color: "#E9E9FF" }}>
							Broccoli Media is a management-oriented platform, providing clients with connection to individual users.
						</h4>
						<h4 style={{ marginTop: 10, color: "#E9E9FF" }}>
							Broccoli Media is offering to users for great oppotunities promoting clients' products and/or services with reasonable pay,
							also, clients make payment to certain level users, which meet the promotion performance requirements.
						</h4>

						<Grid container spacing={12} mb={5}>
							{/* Statistics Display */}
							<Grid item xs={12}>
								<Grid container justifyContent="center" spacing={6}>
									{stats.map(({ id, label, stat }) => (
										<Grid key={id} item>
											<Paper
												sx={{
													height: 220,
													width: 200,
													backgroundColor: "#234761",
												}}
											>
												<h2 style={{ color: "#E9E9FF", paddingTop: 45 }}>{stat}</h2>
												<p style={{ color: "#E9E9FF", paddingTop: 10 }}>{label}</p>
											</Paper>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
}

AboutUs.propTypes = propTypes;
AboutUs.defaultProps = defaultProps;

export default AboutUs;