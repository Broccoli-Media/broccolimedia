import { Box } from '@chakra-ui/react'

import Actions from './Actions'
import Data from './Data'
import Personal from './Personal'

function Sidebar(user) {
	const cur_user = user.user;
	return (
		<Box
			as="aside"
			flex={1}
			mr={{ base: 0, md: 5 }}
			mb={{ base: 5, md: 0 }}
			bg="white"
			rounded="md"
			borderWidth={1}
			borderColor="brand.light"
			style={{ transform: 'translateY(-100px)' }}
		>
			<Personal user={cur_user} />
			<Data user={cur_user} />
			<Actions user={cur_user} />
		</Box>
	)
}

export default Sidebar
