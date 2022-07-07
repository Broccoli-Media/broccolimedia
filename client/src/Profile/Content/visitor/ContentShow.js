import React from 'react';
import { Box, SkeletonCircle, SkeletonText, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
// Import sections
import PublicData from './PublicData.js';
import UserPost from './UserPost.js';

export default function ContentShow(props) {
	const user = props.user;
	const isLoading = props.isLoading;
	const tabs = ['User Information', 'User Posts'];

	return (
		<>
			{!isLoading ?
				(<Box
					as="main"
					flex={3}
					d="flex"
					flexDir="column"
					justifyContent="space-between"
					pt={5}
					bg="white"
					rounded="md"
					borderWidth={1}
					borderColor="gray.200"
					style={{ transform: 'translateY(-100px)' }}
				>
					<Tabs>
						<TabList px={5}>
							{tabs.map(tab => (
								<Tab
									key={tab}
									mx={3}
									px={0}
									py={3}
									fontWeight="semibold"
									color="brand.cadet"
									borderBottomWidth={1}
									_active={{ bg: 'transparent' }}
									_selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
								>
									{tab}
								</Tab>
							))}
						</TabList>

						<TabPanels px={3} mt={5}>
							<TabPanel>
								<PublicData user={user} />
							</TabPanel>
							<TabPanel>
								<UserPost user={user} />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>)
				:
				(<Box
					as="main"
					flex={3}
					d="flex"
					flexDir="column"
					justifyContent="space-between"
					pt={5}
					bg="white"
					rounded="md"
					borderWidth={1}
					borderColor="gray.200"
					style={{ transform: 'translateY(-100px)' }}
				>	
					<Text ml={5} color={'blue.600'}>May need few more seconds on first loading</Text>
					<SkeletonCircle startColor='blue.200' endColor='green.600' mt='4' size='100' />
					<SkeletonText startColor='blue.200' endColor='green.600' mt='8' height='100px' />

					<SkeletonCircle startColor='blue.200' endColor='green.600'  size='100' />
					<SkeletonText startColor='blue.200' endColor='green.600' mt='8'  />
				</Box>)}
		</>
	)
};