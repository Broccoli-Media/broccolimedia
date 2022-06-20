import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Notifications from './Notifications';
import AddUser from './AddUser';
import Account from './Account';
import Settings from './Settings';
import {Update, Add, Save} from './Actions';
// import CompanySettings from './CompanySettings';


const Content = (user) => {
	const tabs = ['Account', 'Settings', 'Add User', 'Notifications'];
	const cur_user = user.user;
	return (
		<Box
			as="main"
			flex={5}
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
				<TabList px={3}>
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

				<TabPanels px={2} mt={3}>
					<TabPanel>
						<Account user={cur_user} />
					</TabPanel>
					<TabPanel>
						<Settings user={cur_user} />
						<Update />
					</TabPanel>
					<TabPanel>
						<AddUser user={cur_user} />
						<Add />
					</TabPanel>
					{/* <TabPanel>
						<CompanySettings />
					</TabPanel> */}
					<TabPanel>
						<Notifications user={cur_user} />
						<Save />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default Content
