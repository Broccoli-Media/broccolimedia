import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Grid, Input, Select, ButtonGroup } from '@chakra-ui/react';
import { Formik } from "formik";
import * as Yup from "yup";
import {
	CheckboxContainer, CheckboxControl, CheckboxSingleControl, InputControl, NumberInputControl, PercentComplete,
	RadioGroupControl, ResetButton, SelectControl, SliderControl, SubmitButton, SwitchControl, TextareaControl
} from "formik-chakra-ui";
// import important components
import Axios from "../../Mainpage/utils/Axios";

export default function AddUser() {

	const initialValues = {
		firstName: "",
		lastName: "",
		username: "",
		displayname: "",
		password: "",
		email: "",
		socialMedia: [{ name: "facebook", link: "", followers: 0 }],
		workingType: ["text"],
		livingcity: "",
		phone: "",
	};
	const validationSchema = Yup.object({
		firstName: Yup.string().required(),
		lastName: Yup.string().required(),
		username: Yup.string().required(),
		password: Yup.string(),
		toppings: Yup.array().min(1),
		notes: Yup.string().required(),
		employedd: Yup.boolean().equals([true]),
		select: Yup.string().required(),
		foo: Yup.number(),
		bar: Yup.string(),

	});

	const [info, setInfo] = useState({});

	const onSubmit = (values) => {

	};
	const handleChange = (e) => {
		setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("upload_preset", "upload");
		try {

			console.log(info)
			await Axios.post('/user/:id', info);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{/* <Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			> */}
			<Grid
				templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
				gap={6}
			>
				{/* <FormControl id="firstName">
					<FormLabel>First Name</FormLabel>
					<Input onChange={handleChange} focusBorderColor="brand.blue" type="text" />
				</FormControl>
				<FormControl id="lastName">
					<FormLabel>Last Name</FormLabel>
					<Input onChange={handleChange} focusBorderColor="brand.blue" type="text" />
				</FormControl>
				<FormControl id="username">
					<FormLabel>UserName</FormLabel>
					<Input onChange={handleChange} focusBorderColor="brand.blue" type="text" />
				</FormControl>
				<FormControl id="phone">
					<FormLabel>Phone Number</FormLabel>
					<Input onChange={handleChange} focusBorderColor="brand.blue" type="tel" />
				</FormControl>
				<FormControl id="email">
					<FormLabel>Email Address</FormLabel>
					<Input onChange={handleChange} focusBorderColor="brand.blue" type="email" />
				</FormControl>
				<FormControl id="livingcity">
					<FormLabel>Living City</FormLabel>
					<Input id="city" onChange={handleChange} focusBorderColor="brand.blue" type="text" />
				</FormControl>
				<FormControl id="onrevenue">
					<FormLabel>On Revenue</FormLabel>
					<Select id="onrevenue" onChange={handleChange} focusBorderColor="brand.blue">
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</Select>
				</FormControl> */}


			</Grid>

			<Box mt={5} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
				{/* <ButtonGroup>
					<SubmitButton>Submit</SubmitButton>
					<ResetButton>Reset</ResetButton>
				</ButtonGroup> */}
				<Button onClick={() => { handleClick(); setInfo({}); }}>Add User</Button>
			</Box>
			{/* </Formik> */}
		</>

	)
}

// const initialValues = {
// 	firstName: "",
// 	lastName: "",
// 	age: 0,
// 	employed: false,
// 	favoriteColor: "",
// 	toppings: ["tuna"],
// 	notes: "",
// 	employedd: false,
// 	select: "",
// 	foo: 23,
// 	bar: "",
// 	password: ""
// };
// const validationSchema = Yup.object({
// 	firstName: Yup.string().required(),
// 	lastName: Yup.string().required(),
// 	age: Yup.number().required().min(18),
// 	employed: Yup.boolean().equals([true]),
// 	favoriteColor: Yup.string(),
// 	toppings: Yup.array().min(2),
// 	notes: Yup.string().required(),
// 	employedd: Yup.boolean().equals([true]),
// 	select: Yup.string().required(),
// 	foo: Yup.number(),
// 	bar: Yup.string(),
// 	password: Yup.string()
// });

// const Form = () => {
// 	const option1 = 10;
// 	return (
// 		<Formik
// 			initialValues={initialValues}
// 			onSubmit={onSubmit}
// 			validationSchema={validationSchema}
// 		>
// 			{({ handleSubmit, values, errors }) => (
// 				<Box
// 					borderWidth="1px"
// 					rounded="lg"
// 					shadow="1px 1px 3px rgba(0,0,0,0.3)"
// 					maxWidth={800}
// 					p={6}
// 					m="10px auto"
// 					as="form"
// 					onSubmit={handleSubmit as any}
// 				>
// 					<InputControl name="firstName" label="First Name" />
// 					<InputControl name="lastName" label="Last Name" />
// 					<NumberInputControl name="age" label="Last Name" />
// 					<CheckboxSingleControl name="employed">
// 						Employed
// 					</CheckboxSingleControl>
// 					<RadioGroupControl name="favoriteColor" label="Favorite Color">
// 						<Radio value="#ff0000">Red</Radio>
// 						<Radio value="#00ff00">Green</Radio>
// 						<Radio value="#0000ff">Blue</Radio>
// 					</RadioGroupControl>
// 					<CheckboxContainer name="toppings" label="Toppings">
// 						<CheckboxControl name="toppings" value="chicken">
// 							Chicken
// 						</CheckboxControl>
// 						<CheckboxControl name="toppings" value="ham">
// 							Ham
// 						</CheckboxControl>
// 						<CheckboxControl name="toppings" value="mushrooms">
// 							Mushrooms
// 						</CheckboxControl>
// 						<CheckboxControl name="toppings" value="cheese">
// 							Cheese
// 						</CheckboxControl>
// 						<CheckboxControl name="toppings" value="tuna">
// 							Tuna
// 						</CheckboxControl>
// 						<CheckboxControl name="toppings" value="pineapple">
// 							Pineapple
// 						</CheckboxControl>
// 					</CheckboxContainer>
// 					<TextareaControl name="notes" label="Notes" />
// 					<SwitchControl name="employedd" label="Employed" />
// 					<SelectControl
// 						name="select"
// 						selectProps={{ placeholder: "Select option" }}
// 					>
// 						<option value={option1}>Option 1</option>
// 						<option value="option2">Option 2</option>
// 						<option value="option3">Option 3</option>
// 					</SelectControl>
// 					<SliderControl name="foo" sliderProps={{ max: 40 }} />
// 					<InputControl
// 						name="password"
// 						inputProps={{ type: "password" }}
// 						label="Password"
// 					/>

// 					<PercentComplete />
// 					<ButtonGroup>
// 						<SubmitButton>Submit</SubmitButton>
// 						<ResetButton>Reset</ResetButton>
// 					</ButtonGroup>

// 					<Box as="pre" marginY={10}>
// 						{JSON.stringify(values, null, 2)}
// 						<br />
// 						{JSON.stringify(errors, null, 2)}
// 					</Box>
// 				</Box>
// 			)}
// 		</Formik>
// 	);
// };

// export default Form;

