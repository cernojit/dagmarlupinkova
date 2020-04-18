import React from 'react'

const AboutSection = () => {
	return(
		<div className="section-container border-section-container" id="info">
    <div className="container">
      <div className="row">
        <div className="col-md-7 ">
          <div className="text-center">
              <img src="./img-02.jpg" alt="portrait" style={{position: 'left', width: '100%', paddingTop: '40px'}}/>
          </div>
		    </div>

	      <div className="col-md-5">
					<h2>O mě</h2>
					<div>
						<p>Samostatná advokátka vykonávající generální advokátní praxi od 1.1.2000 
						se zaměřením zejména na právo rodinné, občanské, právní vztahy 
						k nemovitostem včetně sepisování smluv a zajištění advokátních úschov, 
						insolvenční právo a trestní právo</p>
					</div>
					<div>
						<p>Absolventka Karlovy Univerzity v Praze.</p>
        	</div>  
        	<div>
						<p>Do prosince 2018 členka <b>Unie rodinných advokátů.</b></p>
        	</div> 
        	<div>
						<p>V seznamu advokátů u Čerské advokátní komory zapsána pod ev.č. 08621.</p>
        	</div> 
        	<div>
						<p>Odměna za právní služby - <b>smluvená nebo dle právního tarifu.</b></p>
        	</div>   
        </div>      
      </div>
    </div>
		</div>
		)


}

export default AboutSection;