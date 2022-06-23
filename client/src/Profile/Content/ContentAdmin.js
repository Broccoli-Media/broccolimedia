import React, { useState } from 'react';
import { Box, Button, Skeleton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Notifications from './Notifications';
import AddUser from './AddUser';
import Account from './Account';
import Settings from './Settings';

const Content = (user, isLoading) => {
	const cur_user = user.user;
	const [showUpdate, setShowUpdate] = useState(false);
	const tabs = (!showUpdate) ? ['Account', 'Add User', 'Notifications'] : ['Settings', 'Add User', 'Notifications'];

	return (
		<>
			{isLoading ?
				(<Box
					flex={5}
					w='100%'
					d="flex"
					flexDir="column"
					alignItems="center"
					justifyContent="space-around"
					pt={5}
					bg="white"
					rounded="md"
					borderWidth={1}
					borderColor="gray.200"
					style={{ transform: 'translateY(-100px)' }}
				>
					<Tabs>
						<TabList px={1}>
							{tabs.map(tab => (
								<Tab
									style={{ resize: "both" }}
									fontSize="sm"
									key={tab}
									mx={3}
									my={0}
									px={0}
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

						<TabPanels px={2} mt={3}>
							{!showUpdate && <TabPanel>
								<Account user={cur_user} />
								<Box mt={5} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
									<Button onClick={() => { setShowUpdate(!showUpdate) }}>Edit</Button>
								</Box>
							</TabPanel>}
							{showUpdate && <TabPanel>
								<Settings user={cur_user} />
								<Box mt={3} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
									<Button ml={0} onClick={() => { setShowUpdate(!showUpdate) }}>Cancel</Button>
								</Box>
							</TabPanel>}
							<TabPanel>
								<AddUser user={cur_user} />
							</TabPanel>
							<TabPanel>
								<Notifications user={cur_user} />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>)
				:
				(<Box
					flex={5}
					w='100%'
					d="flex"
					flexDir="column"
					alignItems="center"
					justifyContent="space-around"
					pt={5}
					bg="white"
					rounded="md"
					borderWidth={1}
					borderColor="gray.200"
					style={{ transform: 'translateY(-100px)' }}
				>
					<Skeleton height='100%' width='100%' />
				</Box>)
			}
		</>

	)
}

export default Content
