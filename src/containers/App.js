import React, {Component} from 'react';
// import '../main.a3f694c0.css';
import ImgContainer from './ImgContainer';
import ContactSection from '../components/contactPage/ContactSection'; 
import Footer from '../components/footer/Footer';
import AboutSection from '../components/about/AboutSection';
import IconSection from './IconSection';
import NavbarTachyons from '../components/navbar/Navbar';
import 'tachyons'

class App extends Component {
	constructor(){
		super();
		this.state={
			showNav: false
		}
	}

	navButtonClick = () => {
		this.setState({showNav: !this.state.showNav});
	}

	render(){
		return(
			<div>
				<NavbarTachyons/>
				<ImgContainer/>
				<AboutSection />
				<IconSection/>
				<ContactSection/>
				<Footer/>
			</div>

			)
	}
  
}

export default App;
