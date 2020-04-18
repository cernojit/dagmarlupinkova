import React from 'react'

const TextArea = props => {
	return(
		<div className="form-group">
      <textarea 
      	className={props.className} 
      	rows="2" 
      	type="text"
      	name={props.name}
      	value={props.value}
      	placeholder={props.placeholder}
      	onChange = {props.handleChange} 
      	required
      	>
      </textarea>
    </div>
   )
}

export default TextArea;