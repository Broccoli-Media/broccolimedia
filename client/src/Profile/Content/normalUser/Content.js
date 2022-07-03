import React, { useState } from 'react';
import { Box, Button, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
// Import sections
import Account from '../Account.js';
import Settings from '../Settings.js';
import Notifications from '../Notifications.js';

export default function Content(user, isLoading) {
	const cur_user = user.user;
	const [showUpdate, setShowUpdate] = useState(false);
	const tabs = (!showUpdate) ? ['Account', 'Notifications'] : ['Settings', 'Notifications'];

	return (
		<>
			{isLoading ?
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
							{!showUpdate && <TabPanel>
								<Account user={cur_user} />
								<Box mt={5} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
									<Button onClick={() => { setShowUpdate(!showUpdate) }}>Edit</Button>
								</Box>
							</TabPanel>}
							{showUpdate && <TabPanel>
								<Settings user={cur_user} />
								<Box mt={5} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
									<Button ml={0} onClick={() => { setShowUpdate(!showUpdate) }}>Cancel</Button>
								</Box>
							</TabPanel>}
							<TabPanel>
								<Notifications user={cur_user} />
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
					<Skeleton startColor='blue.200' endColor='green.600' height='100%' width='100%' />
				</Box>)}
		</>
	)
};