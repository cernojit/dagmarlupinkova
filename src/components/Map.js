import React from 'react'

const Map = () => {
	return(
		<div id="map">
			<iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.475472837528!2d14.911459315831959!3d50.41361227947032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955bb4751bf4f%3A0x2347edc9238fe504!2sT%C3%A1borsk%C3%A1%20966%2C%20Mlad%C3%A1%20Boleslav%20III%2C%20293%2001%20Mlad%C3%A1%20Boleslav!5e0!3m2!1scs!2scz!4v1586938564104!5m2!1scs!2scz" }
				title="map"
				style={{
					width:"100%",
					height:"100%", 
					frameborder:"0" ,
					border:"0" ,
					allowfullscreen:"true" ,
					ariaHidden:"" ,
					tabindex:"0"
					}}
				>
			</iframe>
		</div>
		)
}

export default Map;