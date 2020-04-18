import React from 'react'

const NavbarMenu = (props) => {
	return(
		<div className="collapse navbar-collapse" id="navbar-collapse-uarr">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#home" title="domů" className="active" >Domů</a></li>
        <li><a href="#info" title="info"  > Informace</a></li>
        <li><a href="#kontakt" title="kontakt" >Kontakt</a></li>          
      </ul>
    </div>
	)
}

export default NavbarMenu;