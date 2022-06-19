import { Box, Text, VStack } from '@chakra-ui/react'

function Data( user, rank ) {

	const list = [
		{
			id: 1,
			name: 'Total Followers',
			value: user.totalfollowers,
			color: 'yellow',
		},
		{
			id: 2,
			name: 'Collaborated Companies',
			value: user.collaboratedcompanies,
			color: 'yellow',
		},
		{
			id: 3,
			name: 'Current Peer Ranking',
			value: rank.current,
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
					<Text color="brand.dark">{item.name}</Text>
					<Text color={`brand.${item.color}`} fontWeight="bold">
						{item.value}
					</Text>
				</Box>
			))}
		</VStack>
	)
}

export default Data
