import React, { useRef, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';

// Views 
import Home from './views/Home';
import SignUpCom from './views/SignUpCom';
import SignUpInf from './views/SignUpInf';
import NotFound from './views/404';

const App = () => {

	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		document.body.classList.add('is-loaded')
		childRef.current.init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Routes>
					<Route exact path='/' element={<Home/>} />
					<Route exact path='/companyregister' element={<SignUpCom />} />
					<Route exact path='/influencerregister' element={<SignUpInf />} />


					{/* <Route exact */}
					{/* For wrong link to our website */}
					<Route path='*' element={<NotFound/>}  />
				</Routes>
			)} />
	);
}

export default App;