import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'


function AddUser() {
	
	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
			gap={6}
		>
			<FormControl id="firstName">
				<FormLabel>First Name</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" />
			</FormControl>
			<FormControl id="lastName">
				<FormLabel>Last Name</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" />
			</FormControl>
			<FormControl id="username">
				<FormLabel>UserName</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" />
			</FormControl>
			<FormControl id="phoneNumber">
				<FormLabel>Phone Number</FormLabel>
				<Input focusBorderColor="brand.blue" type="tel" />
			</FormControl>
			<FormControl id="emailAddress">
				<FormLabel>Email Address</FormLabel>
				<Input focusBorderColor="brand.blue" type="email" />
			</FormControl>
			<FormControl id="city">
				<FormLabel>Living City</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" />
			</FormControl>
			<FormControl id="revenue">
				<FormLabel>On Revenue</FormLabel>
				<Select focusBorderColor="brand.blue">
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</Select>
			</FormControl>
		</Grid>
	)
}

export default AddUser;
