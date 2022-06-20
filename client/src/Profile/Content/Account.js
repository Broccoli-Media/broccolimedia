import { FormControl, FormLabel, Grid, Text } from '@chakra-ui/react'


function Account(user) {
	const cur_user = user.user;
	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
			gap={6}
		>
			<FormControl id="firstName">
				<FormLabel>First Name</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{cur_user.firstname}
				</Text>
			</FormControl>
			<FormControl id="lastName">
				<FormLabel>Last Name</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{cur_user.lastname}
				</Text>
			</FormControl>
			<FormControl id="phoneNumber">
				<FormLabel>Phone Number</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{cur_user.phone}
				</Text>
			</FormControl>
			<FormControl id="emailAddress">
				<FormLabel>Email Address</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{cur_user.email}
				</Text>
			</FormControl>
			<FormControl id="city">
				<FormLabel>Your Living City</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{cur_user.livingcity}
				</Text>
			</FormControl>
			<FormControl id="revenue">
				<FormLabel>On Revenue</FormLabel>
				<Text color="brand.dark" fontSize="2xl">
					{(cur_user.onrevenue && "Yes") || ((!cur_user.onrevenue || cur_user === false) && "No")}
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

export default Account;
