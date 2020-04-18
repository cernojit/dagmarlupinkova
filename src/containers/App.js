import React, {Component} from 'react';
import '../App.css';
// import '../bootstrap.css';
import '../main.a3f694c0.css';
import '../index.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import Contact from './Contact';
import Footer from './Footer';
import AboutSection from './AboutSection';
import IconSection from './IconSection'

// import axios from 'axios'

class App extends Component {
	constructor(){
		super();
		this.state={
			show: true,
			scrollPos: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("click", this.handleClick);

	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.handleScroll);
		window.removeEventListener("click", this.handleClick);

	}

	handleScroll(){
		const {scrollPos} = this.state;
		console.log(window.scrollY)
		this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos  || window.scrollY === 0
    });

	}

	render(){
		return(
			<div>
				<Navbar 
					className={this.state.show ? "" : "hidden"}
				/>
				<ImgContainer/>
				<AboutSection />
				<IconSection/>
				<Contact/>
				<Footer/>
			</div>
			)
	}
  
}

export default App;
