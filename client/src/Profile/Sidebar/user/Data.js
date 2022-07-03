import { Box, Progress, Text, VStack } from '@chakra-ui/react';

function Data(props) {
	const rank = { current: undefined }
	const user = props.user;

	const ranking = (rank.current === undefined) ? 0 : rank.current;
	const followers = (user.totalfollowers === undefined) ? 0 : user.totalfollowers;
	const companies = (user.collaboratedcompaniesnumber === undefined) ? 0 : user.collaboratedcompaniesnumber;
	const curLevel = (user.level === undefined) ? 1 : user.level;

	const totalLevel = 20;

	const list = [
		{
			id: 1,
			name: 'Your Total Followers',
			value: followers,
			color: 'yellow',
		},
		{
			id: 2,
			name: 'Collaborated Companies',
			value: companies,
			color: 'yellow',
		},
		{
			id: 3,
			name: 'Your Current Peer Ranking',
			value: ranking,
			color: 'cadet',
		},
		{
			id: 4,
			name: `Your Current Level: ${curLevel}`,
			value: (curLevel / totalLevel) * 100,
			color: 'cadet',
		},
	]

	return (
		<VStack as="ul" spacing={0} listStyleType="none">
			{list.map(item => (
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
					<Text color="brand.dark" fontSize="md">{item.name} </Text>
					{(item.id !== 4) &&
						<Text color={`brand.${item.color}`} fontWeight="bold">
							{item.value}
						</Text>}
					{(item.id === 4) &&
						<Progress size='lg' colorScheme='yellow' hasStripe value={(curLevel / totalLevel) * 100} />
					}
				</Box>
			))}
		</VStack>
	)
}

export default Data
