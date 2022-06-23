import React, { useState } from 'react';
import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Settings from './Settings';
import Notifications from './Notifications';
import Account from './Account';

const Content = (user) => {
	const cur_user = user.user;
	const [showUpdate, setShowUpdate] = useState(false);

	const tabs = (!showUpdate) ? ['Account', 'Notifications'] : ['Settings', 'Notifications'];

	return (
		<Box
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
		</Box>
	)
};

export default Content
