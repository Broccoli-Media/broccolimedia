import React from 'react';
import { Box, Image } from '@chakra-ui/react';		

export default function Cover() {
	return (
		<Box h={60} overflow="hidden">
			<Image
				width={"full"}
				height={"full"}
				objectFit="cover"
				src={'https://i.imgur.com/ziqVsze.jpg'}
				alt="Broccoli Media Profile Cover"
			/>
		</Box>
	)
}