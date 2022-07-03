import React, { useState } from "react";
import {
	Avatar, Heading, Text, VStack, ModalOverlay, useDisclosure, Modal, ModalContent,
	ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image
} from '@chakra-ui/react';

function PersonalShow(props) {
	const user = props.user;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const Overlay = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const [overlay, setOverlay] = useState(<Overlay />);

	return (
		<VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">

			<Avatar
				size="2xl"
				name={user.displayName}
				cursor="pointer"
				onClick={() => {
					setOverlay(<Overlay />)
					onOpen()
				}}
				src={user.img}
			/>

			<VStack spacing={2}>
				<Heading as="h3" fontSize="lg" color="brand.dark">
					{user.displayName}
				</Heading>
				<Text color="blue.200" fontSize="lg" fontWeight={"80px"}>
					{user.userTitle}
				</Text>
				<Text color="brand.gray" fontSize="md">
					{user.livingCity}
				</Text>
			</VStack>

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