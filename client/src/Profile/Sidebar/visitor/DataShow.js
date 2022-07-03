import { Box, Progress, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
let levelTimer;
let showLevel;
function DataShow(props) {
	const totalLevel = 20;
	const user = props.user;
	const rank = { current: undefined }
	const level = user.level;
	const [countFol, setFol] = useState(0);

	const ranking = (rank.current === undefined) ? 0 : rank.current;

	// const list = [
	// 	{
	// 		id: 1,
	// 		name: 'Ranking',
	// 		value: ranking,
	// 		color: 'cadet',
	// 	},
	// ]

	useEffect(() => {
		clearInterval(levelTimer)
		levelTimer = setInterval(() => {
			if (countFol === level) {
				clearInterval(levelTimer)
				return
			}
			setFol(prev => prev + 1)

		}, 50)

		return () => {
			clearInterval(levelTimer)
		}
	}, [countFol, level])

	showLevel = Math.round((countFol / totalLevel) * 100);

	return (
		<VStack as="ul" spacing={0} listStyleType="none">
			{/* {list.map(item => (
				<Box
					key={item.id}
					as="li"
					w="full"
					py={3}
					px={5}
					d="flex"
					alignItems="center"
					justifyContent="space-between"
					borderBottomWidth={1}
					borderColor="brand.light"
				>
					<Text color="brand.dark" fontSize="md">{item.name}:
						<Text color={`brand.${item.color}`} fontWeight="bold">
							{item.value}
						</Text>
					</Text>

				</Box>
			))} */}
			{user.Admin
				?
				null
				:
				<Box
					as="li"
					w="full"
					py={3}
					px={5}
					d="flex"
					alignItems="center"
					justifyContent="space-between"
					borderBottomWidth={1}
					borderColor="brand.light"
				>
					<Text color="brand.dark" fontSize="md">Rank: {ranking}</Text>
					<Progress size='sm' colorScheme='yellow' hasStripe value={ranking} />
				</Box>}
			<Box
				as="li"
				w="full"
				py={3}
				px={5}
				d="flex"
				alignItems="center"
				justifyContent="space-between"
				borderBottomWidth={1}
				borderColor="brand.light"
			>
				<Text color="brand.dark" fontSize="md">Level: {countFol}</Text>
				<Progress size='sm' colorScheme='blue' hasStripe value={showLevel} />
			</Box>
		</VStack>
	)
}

export default DataShow;
