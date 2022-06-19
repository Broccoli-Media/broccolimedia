import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import Logo from './partials/Logo';

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool
}

const defaultProps = {
	navPosition: '',
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false
}

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}) => {
	const { user } = useContext(AuthContext);

	const [isActive, setIsactive] = useState(false);

	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(() => {
		isActive && openMenu();
		document.addEventListener('keydown', keyPress);
		document.addEventListener('click', clickOutside);
		return () => {
			document.removeEventListener('keydown', keyPress);
			document.removeEventListener('click', clickOutside);
			closeMenu();
		};
	});

	const openMenu = () => {
		document.body.classList.add('off-nav-is-active');
		nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
		setIsactive(true);
	}

	const closeMenu = () => {
		document.body.classList.remove('off-nav-is-active');
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
	}

	const navigate = useNavigate()
	const { dispatch } = useContext(AuthContext);
	const signOut = () => {
		localStorage.clear();
		try{
			dispatch({ type: "SIGNOUT", payload: {} });
			navigate("/")
		} catch (err) {
			dispatch({ type: "SIGNIN_FAILURE", payload: err.response.data });
		}
		
	}

	const keyPress = (e) => {
		isActive && e.keyCode === 27 && closeMenu();
	}

	const clickOutside = (e) => {
		if (!nav.current) return
		if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
		closeMenu();
	}

	const classes = classNames(
		'site-header',
		bottomOuterDivider && 'has-bottom-divider',
		className
	);

	return (
		<header
			{...props}
			className={classes}
		>
			<div className="container">
				<div className={
					classNames(
						'site-header-inner',
						bottomDivider && 'has-bottom-divider'
					)}>
					<Logo />
					{!hideNav &&
						<>
							<button
								ref={hamburger}
								className="header-nav-toggle"
								onClick={isActive ? closeMenu : openMenu}
							>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav
								ref={nav}
								className={
									classNames(
										'header-nav',
										isActive && 'is-active'
									)}>
								<div className="header-nav-inner">
									<ul
										className="list-reset header-nav-right"
									>
										{user &&
											<li>
											<Link to="/profile" className="button button-golden button-wide-mobile button-golden " onClick={openMenu}>{user.displayname}</Link>
											</li>}
										{user ?
											(<li>
												<Link to="/" className="button button-wangwang button-wide-mobile button-wangwang " onClick={signOut}>Sign Out</Link>
											</li>) :
											(<li>
												<Link to="/signin" className="button button-wangwang button-wide-mobile button-wangwang " onClick={openMenu}>Sign In</Link>
											</li>)}

									</ul>
								</div>
							</nav>
						</>}
				</div>
			</div>
		</header>
	);
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
