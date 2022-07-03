import { FormHelperText, FormControl, FormLabel, Switch, Button } from '@chakra-ui/react';

export default function Notifications() {
	return (
		<>
			<FormControl
				display="column"
				alignItems="center"
				justifyContent="space-between"
			>
				<FormHelperText>You'll be notified by email.</FormHelperText>
				<br />
				<FormLabel
					htmlFor="allEmails"
					mb={0}
					cursor="pointer"
					userSelect="none"
				>
					Receive All Notifications
				</FormLabel>
				<Switch size='md' id="allEmails" />
				<FormLabel
					htmlFor="jobEmails"
					mb={0}
					cursor="pointer"
					userSelect="none"
				>
					Receive Job Notifications
				</FormLabel>
				<Switch size='md' id="jobEmails" />
				<FormLabel
					htmlFor="revenueEmails"
					mb={0}
					cursor="pointer"
					userSelect="none"
				>
					Receive Revenue Notifications
				</FormLabel>
				<Switch size='md' id="revenueEmails" />
			</FormControl>
			<Button mt={5} py={5} px={0} >Save</Button>
		</>
	)
}