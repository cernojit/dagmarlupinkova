import React from 'react';

const NavbarMenu = (props) => {
	return(
		<div className={props.className} id="navbar-collapse-uarr">
	      <ul className="nav navbar-nav navbar-right">
	        <li><a href="./#home" rel="noreferrer" title="" className="active ">Domů</a></li>
	        <li><a href="./#info" rel="noreferrer" title=""> Informace</a></li>
	        <li><a href="./#kontakt" rel="noreferrer" title="" >Kontakt</a></li>          
	      </ul>
    </div>
	)
}

export default NavbarMenu;