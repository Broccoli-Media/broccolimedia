import { useState, useRef } from 'react';
import {
	Avatar, AvatarBadge, Badge, Heading, HStack, Link, Modal, ModalBody, ModalCloseButton,
	ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack
} from '@chakra-ui/react';

function Personal(props) {
	const user = props.user;
	const [showUpdate, setUpdate] = useState(false);
	const [userProfile, setUserProfile] = useState(null);

	const profileImage = useRef(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const openChooseImage = () => { profileImage.current.click(); }

	const changeProfileImage = event => {
		const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
		const selected = event.target.files[0];
		event.target.value = null;
		if ((selected === null) || (selected === undefined)) return;

		if (selected && ALLOWED_TYPES.includes(selected.type)) {
			setUpdate(true);
			let reader = new FileReader()
			reader.onloadend = () => setUserProfile(reader.result)
			return reader.readAsDataURL(selected)
		}
		onOpen();
	}

	const cancelUpdate = (e) => {
		setUpdate(false);
		setUserProfile(null);
	}

	return (
		<VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">

			<Avatar
				size="2xl"
				name={user.username}
				cursor="pointer"
				onClick={openChooseImage}
				src={userProfile ? userProfile : user.img}
			>
				<AvatarBadge bg="brand.blue" boxSize="1em">
					<svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
						/>
					</svg>
				</AvatarBadge>
			</Avatar>
			<input
				hidden
				type="file"
				ref={profileImage}
				onChange={changeProfileImage}
			/>
			{showUpdate ?
				<>
					<Link className='button button-wangwang button-sm'>Update Profile Image</Link>
					<Link className='button button-wangwang button-sm' onClick={cancelUpdate}>Cancel Update</Link>
				</>
				:
				null}
			<VStack spacing={1}>
				{/* <Heading as="h3" fontSize="xl" color="brand.dark">
					{user.username}
				</Heading> */}
				<Heading as="h3" color="brand.dark" fontSize="md">
					{user.userTitle}
				</Heading>
				<Text color="brand.gray" fontSize="sm">
					{user.livingCity}
				</Text>
			</VStack>
			<Modal isOpen={(isOpen && !showUpdate)} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Something went wrong</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>File not supported!</Text>
						<HStack mt={1}>
							<Text color="brand.cadet" fontSize="sm">
								Supported types:
							</Text>
							<Badge colorScheme="green">PNG</Badge>
							<Badge colorScheme="green">JPG</Badge>
							<Badge colorScheme="green">JPEG</Badge>
						</HStack>
					</ModalBody>
				</ModalContent>
			</Modal>
			<Modal isOpen={(isOpen)} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Something went wrong</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>File not supported!</Text>
						<HStack mt={1}>
							<Text color="brand.cadet" fontSize="sm">
								Supported types:
							</Text>
							<Badge colorScheme="green">PNG</Badge>
							<Badge colorScheme="green">JPG</Badge>
							<Badge colorScheme="green">JPEG</Badge>
						</HStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</VStack>
	)
}

export default Personal;