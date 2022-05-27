import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
	element: Element,
	layout: Layout,
	...rest
}) => {

	Layout = (Layout === undefined) ? props => <>{props.children}</> : Layout;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Element {...props} />
				</Layout>
			)} />
	);
}

export default AppRoute;