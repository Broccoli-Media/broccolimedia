import React from 'react';
import { Box, SkeletonText, Heading } from '@chakra-ui/react';

export default function UserPost(props) {
	// const user = props.user;
	const isLoading = props.isLoading;

	return (
		<>
			{!isLoading ?
				<Heading py={6} as='h3' size='md' color="blue.600">No posts at the moment</Heading>
				:
				<Box>
					<SkeletonText startColor='blue.200' endColor='green.600' mt='4' height='70px' />
					<SkeletonText startColor='blue.200' endColor='green.600' mt='8' height='70px' />
					<SkeletonText startColor='blue.200' endColor='green.600' mt='8' height='70px' />
				</Box>
			}
		</>
	)
};