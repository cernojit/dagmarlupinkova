import React from 'react'

const NavbarButton = () => {
	return(
		<div className="navbar-header col-md-offset-3">
			<button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
	      <span className="sr-only">Toggle navigation</span>
	      <span className="icon-bar"></span>
	      <span className="icon-bar"></span>
	      <span className="icon-bar"></span>
	    </button>
	    <a className="navbar-brand " href="." title="Lupínková">
	        <i className="fa fa-university fa-2x" aria-hidden="true"></i>
	        Lupínková
	    </a>
    </div>
	)
}

export default NavbarButton;