import React from 'react';
import picFamily from '../img/family.svg';
import picObcanske from '../img/obcanske_pravo.svg';
import picNemovitosti from '../img/house.svg';
import picInsolvence from '../img/money.svg';
import picTrestni from '../img/auction.svg'


const IconSection = () => {
   const iconClass = "flex-ns content-center-ns justify-center-ns flex content-center justify-center";
   const iconStyle = "w-20-m w-50-ns w-30"

	return(
		<div className="icon-container b--solid ba ph6-ns pa6" style={{backgroundImage: "linear-gradient(90deg,#f2f2f2 0,#e6e6e6)"}}>
         <div className="v-mid center cf ph5-ns ">
         	<div className="fl w-100 w-20-ns w-100-m pa2 pt5-s pb3-m pb3 iconbar" >
               <div className={iconClass}>
                  <img className={iconStyle} alt='rodinné právo' src={picFamily}/>
               </div>
               <div className={iconClass}>
                  <p className="center icons">Rodinné právo</p>               
               </div>
         	</div>

         	<div className="fl w-100 w-20-ns w-100-m pa2 pb3-m pb3 iconbar" >
               <div className={iconClass}>
                  <img className={iconStyle} alt='občanské právo' src={picObcanske}/>
               </div>
               <div className={iconClass}>
                  <p className="center icons">Občanské právo</p>
            	</div>
            </div>

         	<div className="fl w-100 w-20-ns w-100-m pa2 pb3-m pb3 iconbar" >
               <div className={iconClass}>
                  <img className={iconStyle} alt='právo nemovitosti' src={picNemovitosti}/>
               </div>
               <div className={iconClass}>
                  <p className="center icons">Právo nemovitosti</p>
            	</div>
            </div>

         	<div className="fl w-100 w-20-ns w-100-m pa2 pb3-m pb3 iconbar" >
               <div className={iconClass}>
                  <img className={iconStyle} alt='insolvence' src={picInsolvence}/>
               </div>
               <div className={iconClass}>
                  <p className="center icons">Insolvence</p>
            	</div>
            </div>

         	<div className="fl w-100 w-20-ns w-100-m pa2 pb0-m pb5-s iconbar" >
               <div className={iconClass}>
                  <img className={iconStyle} alt='trestní právo' src={picTrestni}/>
               </div>
               <div className={iconClass}>
                  <p className="center icons">Trestní právo</p>
            	</div>
            </div>
	     </div>
   	</div>
		)
}

export default IconSection;