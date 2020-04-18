import React from 'react'

const IconSection = () => {
	return(
		<div className="section-container border-section-container " style={{backgroundImage: "linear-gradient(90deg,#f2f2f2 0,#e6e6e6)"}}>
	    <div className="container" >
        <div className="row">
         <div className="col-xs-12 col-md-12 col-md-offset-1 text-center">
         	<div className="col-xs-12 col-md-2" style={{padding: '20px 0px 20px 0'}}>
         		<i className="fa fa-hand-lizard-o fa-5x" aria-hidden="true"></i>
         	</div>
         	<div className="col-xs-12 col-md-2" style={{padding: '20px 0px 20px 0'}}>
         		<i className="fa fa-bicycle fa-5x" aria-hidden="true"></i>
         	</div>
         	<div className="col-xs-12 col-md-2" style={{padding: '20px 0px 20px 0'}}>
         		<i className="fa fa-refresh fa-spin fa-fw fa-5x" aria-hidden="true"></i>
         	</div>
         	<div className="col-xs-12 col-md-2" style={{padding: '20px 0px 20px 0'}}>
         		<i className="fa fa-hand-scissors-o fa-5x" aria-hidden="true"></i>
         	</div>
         	<div className="col-xs-12 col-md-2" style={{padding: '20px 0px 20px 0'}}>
         		<i className="fa fa-hand-o-up fa-5x" aria-hidden="true"></i>
         	</div>
	       </div>
	    	</div>
	    </div>
   	</div>
		)
}

export default IconSection;