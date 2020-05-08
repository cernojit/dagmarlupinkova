import React from 'react';
import Bg from '../img/ImgContainer.png';

const ImgContainer = () => {
	return(
		<div className="white-text-container background-image-container" style={{backgroundImage: `url(${Bg})`}} id ={"home"}>
		    <div className="opacity"></div>
		    <div className="container">
		        <div className="row">
		            <div className="col-md-12 ">
			            	<div>
			            		<h2>Advokátka</h2>
			            	</div>
			                <h1>Mgr. Dagmar Lupínková</h1>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			                    et dolore magna aliqua.  
			                </p>
			                <a href="#kontakt" title="" className="btn btn-lg btn-primary">Kontaktovat</a>
		            </div>
		        </div>
		    </div>
		</div>
		)

}

export default ImgContainer;