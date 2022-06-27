import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
// Import main page and important settings
import BroccoliMedia from './BroccoliMedia.js';
import { AuthContextProvider } from "./Mainpage/context/AuthContext.js";
import { SearchContextProvider } from "./Mainpage/context/SearchContext.js";
// Scss System
import './Assets/scss/style.scss';
// Service Worker
// import * as serviceWorker from './serviceWorker';
const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<SearchContextProvider>
				<Router history={history}>
					<BroccoliMedia />
				</Router>
			</SearchContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();