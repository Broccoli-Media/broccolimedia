import React, { useState } from "react";
import {
	Avatar, Heading, Text, VStack, ModalOverlay, useDisclosure, Modal, ModalContent,
	ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image, SkeletonCircle
} from '@chakra-ui/react';

function PersonalShow(props) {
	const user = props.user;
	const isLoading = props.isLoading;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const [overlay, setOverlay] = useState(<OverlayOne />);

	return (
		<VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
			{!isLoading ? (
				<>
					<Avatar
						size="2xl"
						name={user.displayName}
						cursor="pointer"
						onClick={() => {
							setOverlay(<OverlayOne />)
							onOpen()
						}}
						src={user.img}
					>
					</Avatar>

					<VStack spacing={2}>
						<Heading as="h3" fontSize="xl" color="brand.dark">
							{user.displayName}
						</Heading>
						<Text color="brand.gray" fontSize="xl">
							{user.livingCity}
						</Text>
					</VStack>
				</>)
				:
				(<SkeletonCircle size='160' />)
			}
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>{user.displayName}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image boxSize='80%' src={user.img} alt={user.username} />
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</VStack>
	)
}
export default PersonalShow;