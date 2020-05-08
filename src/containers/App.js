import React, {Component} from 'react';
import '../index.css';
import '../main.a3f694c0.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import Contact from './Contact';
import Footer from './Footer';
import AboutSection from './AboutSection';
import IconSection from './IconSection';

// import axios from 'axios'

class App extends Component {
	constructor(){
		super();
		this.state={
			show: true,
			scrollPos: 0,
			showNav: false
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.navButtonClick = this.navButtonClick.bind(this);
	}

	

	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll(){
		const {scrollPos} = this.state;
		this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos  || window.scrollY === 0
    });
    if(!this.state.show){
    	this.setState({showNav: false})
    }
	}

	navButtonClick(){
		this.setState({showNav: !this.state.showNav});
	}

	render(){
		return(
			<div>
				<Navbar 
					className={this.state.show ? "" : "hidden"}
					navClass={!this.state.showNav ? "collapse navbar-collapse" : "collapse navbar-collapse in"} 
					handleClick={this.navButtonClick}
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
