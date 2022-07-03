import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import Logo from './partials/Logo';

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool,
	signin: PropTypes.bool
}

const defaultProps = {
	navPosition: '',
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false,
	signin: true
}

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	signin,
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
		localStorage.removeItem('user');
		try {
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
									<span className="hamburger-inner" />
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
									{/* <ul className={
										classNames(
											'list-reset text-xs',
											navPosition && `header-nav-${navPosition}`
										)}>
										<li>
											<Link to="/about" onClick={closeMenu}>About</Link>
										</li>
									</ul> */}

									<ul className="list-reset header-nav-right">
										{!hideNav && isActive &&
											<>
												{user &&
													<li>
														<Link to={`/profile/in/${user.username}`} className="button button-golden button-wide-mobile button-sm">{user.displayName}</Link>
													</li>}
												<li>
													<Link to="/about"><Button className="button button-wangwang button-wide-mobile button-wangwang button-sm" >About Us</Button></Link>
												</li>
												{/* {!user && <>
													<li>
														<Link to="/signup/com"><Button className="button button-wangwang button-wide-mobile button-wangwang button-sm" >Register as Company</Button></Link>
													</li>
													<li>
														<Link to="/signup/inf"><Button mt={2} className="button button-wangwang button-wide-mobile button-wangwang button-sm" >Register as Influencer</Button></Link>
													</li>
												</>} */}
												{!user ?
													(!signin ? null : (
														<li>
															<Link mt={10} to="/signin" className="button button-golden button-wide-mobile button-golden button-sm">Sign In</Link>
														</li>))
													:
													<li>
														<Link mt={10} to="/" className="button button-golden golden-wide-mobile button-golden button-sm" onClick={signOut}>Sign Out</Link>
													</li>
												}

											</>
										}

										{!isActive && <Menu>
											{({ isOpen }) => (
												<>
													<MenuButton
														transition='all 0.2s'
														borderRadius='md'
														_hover={{ bg: 'gray.400' }}
														_expanded={{ bg: 'blue.400' }}
														_focus={{ boxShadow: 'outline' }}
														className="button button-wangwang button-wide-mobile button-sm"
													>
														{isOpen ? 'Welcome' : 'Here'}
													</MenuButton>
													<MenuList>
														{user && <Link to={`/profile/in/${user.username}`} ><MenuItem textColor={'deep-dark'} className="button button-golden button-wide-mobile button-golden button-sm">{user.displayName}</MenuItem></Link>}
														<MenuDivider />
														<Link to="/about"><MenuItem mt={10} textColor={'deep-dark'} className="button button-wangwang button-wide-mobile button-sm" >About Us</MenuItem></Link>
														<MenuDivider />
														{/* {!user &&
															<>

																<Link to="/signup/com"><MenuItem mt={10} textColor={'deep-dark'} className="button button-wangwang button-wide-mobile button-sm" >Register as Company</MenuItem></Link>
																<Link to="/signup/inf"><MenuItem mt={10} textColor={'deep-dark'} className="button button-wangwang button-wide-mobile button-sm" >Register as Influencer</MenuItem></Link>
															</>}
														<MenuDivider /> */}
														{user ?
															<Link to="/"><MenuItem textColor={'deep-dark'} className="button button-golden button-sm" onClick={signOut}>Sign Out</MenuItem></Link>
															:
															(!signin ?
																null
																:
																(<Link to="/signin"><MenuItem textColor={'deep-dark'} className="button button-golden button-sm">Sign In</MenuItem></Link>))
														}
													</MenuList>
												</>
											)}
										</Menu>}
										{/* <Link to="/registercompany"><MenuItem className="button button-wangwang button-wide-mobile button-wangwang">Register as Company</MenuItem></Link>
										<Link to="/registerinfluencer"><MenuItem className="button button-wangwang button-wide-mobile button-wangwang">Register as Influencer</MenuItem></Link> */}
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
