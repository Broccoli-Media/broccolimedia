import React from 'react';
import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
// Import sections
import DataShow from './DataShow.js';
import PersonalShow from './PersonalShow.js';

export default function SidebarShow(props) {
	const user = props.user;
	const isLoading = props.isLoading;

	return (
		<>
			{!isLoading ?
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