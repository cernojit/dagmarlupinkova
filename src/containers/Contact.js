import React from 'react';
import FormContainer from './FormContainer';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map'

const Contact = () => {
	return(
		<div className="section-container " id="kontakt">
	    <div className="container">
	      <div className="row">
	        <div className="col-xs-12">
    	      <h2>Kontakt</h2>
          	<Map/>
	        </div>
	        <div className="col-xs-12">
	        <div className="row">
	        	<FormContainer/>
	        	<ContactInfo/>
	        </div>
				 </div>
		   </div>
	    </div>
		</div>
	)
}

export default Contact;