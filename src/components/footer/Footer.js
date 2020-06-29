import React from 'react';
import './footer.css';
import 'tachyons'

const Footer = () => {
	return (
		<footer>
      <div className="w-100 pa2 pa2-ns pb0-ns pb0 center bt pt-solid">
          <div className=" ph6-ns center">
              <p>
                <small>© Lupinkova | Website created by  
                  <a href="https://github.com/cernojit" className="link-like-text no-underline" title="Create website with free html template"> Jice and Domec
                  </a>
                </small>
              </p>
          </div>
      </div>
		</footer>
		)
} 

export default Footer;