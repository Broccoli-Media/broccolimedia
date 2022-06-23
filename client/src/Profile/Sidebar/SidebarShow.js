import React from 'react'
import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react'

import DataShow from './DataShow'
import PersonalShow from './PersonalShow'

function SidebarShow(props) {
	const isLoading = props.isLoading;
	const user = props.user;

	return (
		<>{!isLoading ?
			(<Box
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
				<PersonalShow user={user} isLoading={isLoading} />
				<DataShow user={user} />
			</Box>)
			:
			(<Box
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
				<SkeletonCircle mt='4' ml={'auto'} mr={'auto'} size='200' />
				<Skeleton mt='8' height='400px' />
			</Box>)
		}
		</>

	)
}

export default SidebarShow;
