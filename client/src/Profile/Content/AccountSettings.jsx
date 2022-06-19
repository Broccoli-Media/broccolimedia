import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'


function AccountSettings(user) {

	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
			gap={6} f
		>
			<FormControl id="firstName">
				<FormLabel>First Name</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" placeholder={user.firstname} />
			</FormControl>
			<FormControl id="lastName">
				<FormLabel>Last Name</FormLabel>
				<Input focusBorderColor="brand.blue" type="text" placeholder={user.lastname} />
			</FormControl>
			<FormControl id="phoneNumber">
				<FormLabel>Phone Number</FormLabel>
				<Input
					focusBorderColor="brand.blue"
					type="tel"
					placeholder={user.phone}
				/>
			</FormControl>
			<FormControl id="emailAddress">
				<FormLabel>Email Address</FormLabel>
				<Input
					focusBorderColor="brand.blue"
					type="email"
					placeholder={user.email}
				/>
			</FormControl>
			<FormControl id="city">
				<FormLabel>Your Living City</FormLabel>
				<Input
					focusBorderColor="brand.blue"
					type="email"
					placeholder={user.livingcity}
				/>
			</FormControl>
			<FormControl id="revenue">
				<FormLabel>On Revenue</FormLabel>
				<Select focusBorderColor="brand.blue">
					<option value={user.onRevenue && "Yes"}>
						Yes
					</option>
					<option value={!user.onRevenue && "No"}>No</option>
				</Select>
			</FormControl>
		</Grid>
	)
}

export default AccountSettings
