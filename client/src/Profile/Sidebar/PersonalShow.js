import React, { useState } from "react";
import {
	Avatar, Heading, Text, VStack, ModalOverlay, useDisclosure, Modal, ModalContent,
	ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image, SkeletonCircle
} from '@chakra-ui/react'

function PersonalShow(user, isLoading) {
	const cur_user = user.user;
	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />)

	return (
		<VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
			{isLoading ? (
				<>
					<Avatar
						size="2xl"
						name={user.displayname}
						cursor="pointer"
						onClick={() => {
							setOverlay(<OverlayOne />)
							onOpen()
						}}
						src={cur_user.img}
					>
					</Avatar>

					<VStack spacing={2}>
						<Heading as="h3" fontSize="xl" color="brand.dark">
							{cur_user.displayname}
						</Heading>
						<Text color="brand.gray" fontSize="xl">
							{cur_user.userTitle}
						</Text>
					</VStack>
				</>)
				:
				(<SkeletonCircle size='160' />)
			}

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>{cur_user.displayname}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Image boxSize='80%' src={cur_user.img} alt={cur_user.username} />
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
