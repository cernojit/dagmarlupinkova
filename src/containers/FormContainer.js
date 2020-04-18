import React, {Component} from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';


// import axios from 'axios'

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				fname: '', 
				email: '', 
				message: ''				
			},
	  	checkBox: false
		}

		this.handleInput = this.handleInput.bind(this);	
		this.submitHandler = this.submitHandler.bind(this);
		this.checkBoxCheck = this.checkBoxCheck.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this)
  }

	handleInput(event){
		const {field} = {...this.state}
		const currentstate = field;
		const {name, value} = event.target ;
		currentstate[name] = value;
		this.setState({field: currentstate});
	}

	checkBoxCheck(event){
		if(event.target.checked){
			this.setState({checkBox: true})
		} else {
			this.setState({checkBox: false})
		}
	}

	handleClearForm(){
		this.setState({
  		field: {
			fname: '', 
			email: '', 
			message: ''
			},
  		checkBox: false
		})
	}

	submitHandler(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    var isValid = true;
    const elements = document.getElementsByClassName('form-control');
    Object.values(elements).forEach(obj => {
    	if(!obj.validity.valid){
    		isValid = false
    	}
    })

    if(isValid && !this.state.checkBox){
    	document.getElementById('hidden-after').className+="hidden";
    	document.getElementById('hidden-before').className -="hidden";
    	// sending email here
		// const templateId = 'template_EwQhSiZR';
		// this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    	alert('email sent!')
    	this.handleClearForm();
    } else if (isValid && this.state.checkBox){
    	document.getElementById('hidden-after').className+="hidden";
    	document.getElementById('hidden-before').className -="hidden";
    	this.handleClearForm();
    } else {
    	alert('message not sent')
    }

  };

  sendFeedback (templateId, variables) {
		window.emailjs.send(
  	'cernojit_gmail_com', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


  render(){
    return (
    	<form className="needs-validation" noValidate onSubmit={this.submitHandler}>
    	<div className='col-md-7'>
			 <div className="template-example">
	        <h3>Máte Dotaz?</h3>
        	<div id="hidden-after" className="">
	        	<Input 
	        		type={"text"}
	        		name={"fname"}
	        		id={"inputName"}
	        		placeholder={"Jméno a příjmení"}
	        		onChange={this.handleInput}
	        		value={this.state.field.name}
	        		className={'form-control'}
	        		ref={this.textInput}

	        		/>
	        	<Input 
	        		type={"email"}
	        		name={"email"}
	        		id={"inputEmail"}
	        		placeholder={"Email"}
	        		pattern={/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
	        		onChange={this.handleInput}
	        		value={this.state.field.email}
	        		className={'form-control'}	        		
	        		/>
	        	<TextArea 
	        		className={'form-control'}
	        		placeholder={"Napište Vaší zprávu"}
	        		name={"message"}
	        		value={this.state.field.message}
	        		handleChange={this.handleInput}
	        		/>
	        	<CheckBox
	        		name={'checkBox'}
	        		value={this.state.checkBox}
	        		handleChange={this.checkBoxCheck}
	        		/>
	        	<Button
	        		/>
      		</div>
      		<div id="hidden-before" className="hidden">
						<div className="alert alert-success " role="alert">Vaše zpráva byla úspěšně odeslána
						</div>
      		</div>
				</div>
      </div>
      </form>
    )

  }
}

export default FormContainer;