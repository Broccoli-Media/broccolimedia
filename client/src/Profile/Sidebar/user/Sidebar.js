import React from 'react';
import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
// Import sections
import Data from './Data.js';
import Personal from './Personal.js';
import { Public } from '../Actions.js';

export default function Sidebar(props) {
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
					<Personal user={user} isLoading={isLoading} />
					<Data user={user}/>
					<Public user={user} isLoading={isLoading} />
				</Box>) :
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
				</Box>)}
		</>
	)
}