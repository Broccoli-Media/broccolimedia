
import { Avatar, Heading, Text, VStack } from '@chakra-ui/react'

function PersonalShow(user) {
	const cur_user = user.user;

	return (
		<VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
			<Avatar
				size="2xl"
				name={user.username}
				// cursor="pointer"
				src={cur_user.img}
			>
			</Avatar>

			<VStack spacing={1}>
				<Heading as="h3" fontSize="xl" color="brand.dark">
					{cur_user.username}
				</Heading>
				<Text color="brand.gray" fontSize="xl">
					{cur_user.userTitle}
				</Text>
			</VStack>
		</VStack>
	)
}

export default PersonalShow;
