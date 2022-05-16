import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
// import './App.css';
import './assets/scss/style.scss';

// Service Worker
// import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<SearchContextProvider>
				<Router history={history}>
					<App />
				</Router>
			</SearchContextProvider>
		</AuthContextProvider>
	</React.StrictMode>

);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
