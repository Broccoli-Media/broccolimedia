import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, CircularProgressLabel, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
let folTimer;
let comTimer;
let showFol;
let showCom;
export default function PublicData(props) {
	const user = props.user;
	const [countFol, setFol] = useState(0);
	const [countCom, setCom] = useState(0);
	let totalFol, totalCom, intervalFol, intervalCom;
	const fol = user.totalfollowers;
	const coCom = user.collaboratedcompaniesnumber;

	if (fol < 1000) {
		totalFol = 1000;
		intervalFol = 10;
	} else if (1000 <= fol && fol < 10000) {
		totalFol = Math.ceil(fol / 1000) * 1000;
		intervalFol = 5;
	} else if (10000 <= fol && fol < 100000) {
		totalFol = Math.ceil(fol / 10000) * 10000;
		intervalFol = 1;
	} else if (100000 <= fol && fol < 1000000) {
		totalFol = Math.ceil(fol / 100000) * 100000;
		intervalFol = 0.6;
	}

	if (coCom < 50) {
		totalCom = 50;
		intervalCom = 20;
	} else if (50 <= coCom && coCom < 100) {
		totalCom = 100;
		intervalCom = 10;
	} else if (100 <= coCom && coCom < 1000) {
		totalCom = Math.ceil(fol / 100) * 100;
		intervalCom = 8;
	}

	useEffect(() => {
		clearInterval(folTimer)
		clearInterval(comTimer)

		folTimer = setInterval(() => {
			if (countFol > fol) {
				clearInterval(folTimer)
				setFol(fol)
				return
			} else if (countFol === fol) {
				clearInterval(folTimer)
				return
			}
			setFol(prev => prev + 30)

		}, intervalFol)
		comTimer = setInterval(() => {
			if (countCom >= coCom) {
				clearInterval(comTimer)
				setCom(coCom)
				return
			}
			setCom(prev => prev + 1)

		}, intervalCom)


		return () => {
			clearInterval(folTimer)
			clearInterval(comTimer)
		}
	}, [countFol, countCom, fol, coCom])

	showFol = Math.round((countFol / totalFol) * 100);
	showCom = Math.round((countCom / totalCom) * 100);

	return (
		<>
			<Wrap
				mt={0} mb={5} px={0} spacing='30px'
			>
				<WrapItem>
					<CircularProgress value={showFol} color='green.400' size='100px'>
						<CircularProgressLabel>{`${showFol}%`}</CircularProgressLabel>
					</CircularProgress>
				</WrapItem>
				<WrapItem>
					<Heading mt={7} mb={3} as='h3' size='md' color="blue.600">
						Total Followers :
					</Heading>
					<Heading mt={8} ml={3} as='h3' size='sm' color="green.600">
						{countFol}
					</Heading>
				</WrapItem>
			</Wrap>
			<Text color="blue.600">Next Level : {totalFol - countFol} followers needed</Text>

			<Wrap py={5} px={0} spacing='30px' borderTopWidth={1} borderColor="brand.light">
				<WrapItem>
					<CircularProgress value={showCom} color='green.400' size='100px'>
						<CircularProgressLabel>{`${showCom}%`}</CircularProgressLabel>
					</CircularProgress>
				</WrapItem>
				<WrapItem>
					<Heading mt={7} mb={3} as='h3' size='md' color="blue.600">
						Companies Partners :
					</Heading>
					<Heading mt={8} ml={3} as='h3' size='sm' color="green.600">
						{countCom}
					</Heading>
				</WrapItem>
				<WrapItem>
					
				</WrapItem>
			</Wrap>
			<Text color="blue.600">Next Level : {totalCom - countCom} Companies needed</Text>
			{/* <Wrap mt={1} mb={5} py={2} px={0} spacing='30px' borderTopWidth={1} borderColor="brand.light">
				<WrapItem>
					<CircularProgress value={showFol} color='green.400' size='100px'>
						<CircularProgressLabel>{`${showFol}%`}</CircularProgressLabel>
					</CircularProgress>
				</WrapItem>
				<WrapItem>
					<Heading mt={7} mb={3} as='h3' size='md' color="blue.600">
						Total Followers :
					</Heading>
					<Heading mt={8} ml={3} as='h3' size='sm' color="green.600">
						{fol}
					</Heading>
				</WrapItem>
				<WrapItem>
					<Text color="blue.600">Until Next Level : {totalFol - fol} followers needed</Text>
				</WrapItem>
			</Wrap> */}
		</>
	)
}