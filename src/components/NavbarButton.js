import React from 'react';
import Icon from '../img/nav_icon.svg'

const NavbarButton = ({ handleClick }) => {
	return(
		<div className="navbar-header">
			<button type="button" 
						className="navbar-toggle uarr collapsed" 
						data-toggle="collapse" 
						data-target="#navbar-collapse-uarr"
						onClick={handleClick}>
	      <span className="sr-only">Toggle navigation</span>
	      <span className="icon-bar"></span>
	      <span className="icon-bar"></span>
	      <span className="icon-bar"></span>
	    </button>
	    <div className="nav-icon ">
	    	<a className="navbar-brand" href="." title="Lupínková">
		        <img src={Icon} alt="icon"  className="navbar-logo-img"/>   
				</a>
				<a className="navbar-brand title" href="./">Lupínková</a>
			</div>
    </div>
	)
}

export default NavbarButton;