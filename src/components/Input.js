import React from 'react';

const Input = props => {
	return(
		<div className="form-group ">
	    <input 
				className={props.className}
				name={props.name}
	    	type={props.type}
	    	id={props.id} 
	    	placeholder={props.placeholder} 
	    	onChange={props.onChange} 
	    	value={props.value}
	    	required
	    />
     </div>
		)
}

export default Input;