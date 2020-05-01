import React from 'react';
import NavbarButton from '../components/NavbarButton';
import NavbarMenu from '../components/NavbarMenu';

const Navbar = (props) => {
	return(
		<header className={props.className}>
		  <nav className="navbar navbar-fixed-top navbar-default">
		    <div className="container">
	      	<NavbarButton handleClick={props.handleClick}/>
	      	<NavbarMenu className={props.navClass}/>
		    </div>
	    </nav>
	  </header>
	)
}

export default Navbar;
