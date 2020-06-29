import React, {Component} from 'react';
import './form.css'

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				fname: '', 
				email: '', 
				message: ''				
			},
	  	checkBox: false,
	  	valid: false
		}
	}

	handleInput = (event) => {
		const pattern = /\S+@\S+\.\S+/;
		const {field} = {...this.state};
		const {name,value} = event.target;
		field[name] = value;
		if(value === ''){
			document.getElementById([name]).classList.add('wrongInput');
			this.setState({valid: false})
		} else if(name==="email" && !this.state.field[name].match(pattern)){
			document.getElementById([name]).classList.add('wrongInput');
			this.setState({valid: false})
 		} else {
			document.getElementById([name]).classList.remove('wrongInput');
			this.setState({valid: true})
		}		
		this.setState({field: field});
	}

	handleChange = () => {
		this.setState({checkBox: true})
	}

	validate = () => {
		Object.entries(this.state.field).forEach(([key, value]) => {
				if (value === ''){
					this.setState({valid: false})
					document.getElementById([key]).classList.add('wrongInput');
				}
			})
	}

	onButtonClick = (event) => {
		event.preventDefault();
		this.validate();
		if(this.state.valid && !this.state.checkBox){
			document.getElementById('hidden-after').className+="hidden";
    	document.getElementById('hidden-before').className -="hidden";
			fetch('http://localhost:3000/send', {
		  		method: 'post',
		  		headers: {'Content-Type': 'application/json'},
		  		body: JSON.stringify({
		  			fname: this.state.field.fname,
		  			email: this.state.field.email,
		  			message: this.state.field.message
		  		})
		  	})
		  	.then(response => response.json())
		  	.then(console.log('Email should be sent'))
		  	.then(this.handleClearForm())
		  	.catch(err => console.log(err))
		} else if(!this.state.valid){
			document.getElementById('alert').className-="hidden";			
		} else {
			document.getElementById('hidden-after').classList.add(" hidden");
    	document.getElementById('hidden-before').className -="hidden";
    	this.handleClearForm();
		}
	}

	handleClearForm = () => {
		this.setState({
  		field: {
			fname: '', 
			email: '', 
			message: ''
			},
  		checkBox: false
		})
	}

	render(){
    return (
    	<form className="w-100" >
	        <h3>Máte Dotaz?</h3>
        	<fieldset id="hidden-after" className="ba b--transparent ph0 mh0 ">
        		<div className="mt3">
							<input 
								className="pa3 input-reset ba hover-black border-box b--black-20 br2 w-100" 
								id="fname"
								type="name" 
								name="fname"  
								placeholder="Jméno a Příjmení"
								onChange={this.handleInput}
								/>
						</div>
						<div className="mt3">
	        		<input 
	        			className="pa3 input-reset ba hover-black border-box b--black-20 br1 w-100" 
	        			id="email"
	        			type="email" 
	        			name="email"  
	        			placeholder="Email"
								onChange={this.handleInput}
	        			/>
	        	</div>
	        	<div className="mt3">
	        	  <textarea 
	        	  	id="message" 
	        	  	className="pa3 db border-box hover-black w-100 ba b--black-20 br2 mb3" 
	        	  	name="message" 
	        	  	placeholder="Napište Vaší zprávu"
								onChange={this.handleInput}
								>
							</textarea>
	        	</div>
	        	<div className="mt0 hidden" id="alert">
	        		<label className="pa0  ma0 lh-copy f6 pointer">
	        			Vyplňte všechna pole
	        		</label>
	        	</div>
	        	<div className="mt3">
	        	 <label className="pa0 ma0 lh-copy f6 pointer hidden ">
	        	 	<input type="checkbox" onChange = {this.handleChange}/> Remember me
	        	 </label>
	        	</div>
	        	<div>
		        	<button 
				    		type="submit" 
				    		className="btn btn-lg btn-primary" 
				    		onClick={this.onButtonClick}
				    		>	Odeslat Dotaz
				    	</button>
				    </div>
      		</fieldset>
      		<div id="hidden-before" className="hidden">
						<div className="alert alert-success " role="alert">Vaše zpráva byla úspěšně odeslána
						</div>
      		</div>
      </form>
    )

  }
}


export default Form;