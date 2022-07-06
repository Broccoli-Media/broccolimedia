import { FormControl, FormLabel, Grid, Text } from '@chakra-ui/react';

export default function Account(user) {
	const cur_user = user.user;
	return (
		<Grid
			style={{ resize: "both" }}
			templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
			gap={6}
		>
			<FormControl id="firstName">
				<FormLabel>Full Name</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{cur_user.firstName} {cur_user.lastName}
				</Text>
			</FormControl>
			<FormControl id="displayname">
				<FormLabel>Display Name</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{cur_user.displayName}
				</Text>
			</FormControl>
			<FormControl id="phoneNumber">
				<FormLabel>Phone Number</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{cur_user.phone}
				</Text>
			</FormControl>
			<FormControl id="emailAddress">
				<FormLabel>Email Address</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{cur_user.email}
				</Text>
			</FormControl>
			{/* <FormControl id="city">
				<FormLabel>Your Living City</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{cur_user.livingCity}
				</Text>
			</FormControl> */}
			<FormControl id="revenue">
				<FormLabel>On Revenue</FormLabel>
				<Text color="brand.dark" fontSize="lg">
					{(cur_user.onRevenue && "Yes") || ((!cur_user.onRevenue) && "No")}
				</Text>
			</FormControl>
			{/* <FormControl id="revenue">
				<FormLabel>On Revenue</FormLabel>
				<Select focusBorderColor="brand.blue">
					<option value={cur_user.onRevenue}>Yes</option>
					<option value={!cur_user.onRevenue && "No"}>No</option>
				</Select>
			</FormControl> */}
		</Grid>
	)
}