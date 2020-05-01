import React from 'react';
import picFamily from '../img/family.svg';
import picObcanske from '../img/obcanske_pravo.svg';
import picNemovitosti from '../img/house.svg';
import picInsolvence from '../img/money.svg';
import picTrestni from '../img/auction.svg';


const IconSection = () => {
	return(
		<div className="section-container border-section-container " style={{backgroundImage: "linear-gradient(90deg,#f2f2f2 0,#e6e6e6)"}}>
	    <div className="container" >
        <div className="row">
         <div className="col-xs-12 col-md-12 col-md-offset-1 text-center">
         	<div className="col-xs-12 col-md-2 iconbar" >
               <img alt='rodinné právo' src={picFamily} width="90px"/>
               <p className="text-center icons">Rodinné právo</p>
         	</div>
         	<div className="col-xs-12 col-md-2 iconbar" >
               <img alt='občanské právo' src={picObcanske}/>
               <p className="text-center icons">Občanské právo</p>
         	</div>
         	<div className="col-xs-12 col-md-2 iconbar" >
               <img alt='právo nemovitosti' src={picNemovitosti}/>
               <p className="text-center icons">Právo nemovitosti</p>
         	</div>
         	<div className="col-xs-12 col-md-2 iconbar" >
               <img alt='insolvence' src={picInsolvence}/>
               <p className="text-center icons">Insolvence</p>
         	</div>
         	<div className="col-xs-12 col-md-2 iconbar" >
               <img alt='trestní právo' src={picTrestni}/>
               <p className="text-center icons">Trestní právo</p>
         	</div>
	       </div>
	    	</div>
	    </div>
   	</div>
		)
}

export default IconSection;