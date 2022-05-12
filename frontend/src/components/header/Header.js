import React from "react";
import Snap from "../videos/snap_finger.mp4";
import './Header.css'

export default function Header() {
	return (
		<div className="Wrapper">
			<video autoPlay loop muted>
				<source src={Snap} type="video/mp4" />
			</video>
			<div className="Center-text">
				<h1>
					<span className="Sim">
						<b>BM</b>
					</span>
					<span className="Full">Broccoli Media</span>
				</h1>
			</div>
		</div>
	);
}
