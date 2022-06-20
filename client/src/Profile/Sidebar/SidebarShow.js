import React from 'react'
import { Box } from '@chakra-ui/react'

import DataShow from './DataShow'
import PersonalShow from './PersonalShow'

function SidebarShow(user) {
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
			<PersonalShow user={cur_user} />
			<DataShow user={cur_user} />
		</Box>
	)
}

export default SidebarShow;
