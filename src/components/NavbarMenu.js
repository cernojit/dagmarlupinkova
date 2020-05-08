import React from 'react';

const NavbarMenu = (props) => {
	return(
		<div className={props.className} id="navbar-collapse-uarr">
	      <ul className="nav navbar-nav navbar-right">
	        <li><a href="/dagmarlupinkova/#home" title="" className="active ">Domů</a></li>
	        <li><a href="/dagmarlupinkova/#info" title=""> Informace</a></li>
	        <li><a href="#kontakt" title="" >Kontakt</a></li>          
	      </ul>
    </div>
	)
}

export default NavbarMenu;