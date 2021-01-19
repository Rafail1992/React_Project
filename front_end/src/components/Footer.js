import React from 'react';
import '../App.css';

function Footer(){
    return(
        /*--Add the copyrights of the page*/
            
     <div class="jumbotron-fluid ">
		<div class="row">
			<div class = "col-12 justify-content-end d-flex">
				<a href="#start">
					<button class="btn mr-3 btn-lg">
					
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
  
				</button>
				</a>
			</div>
			<div id="copyrights" className="copyright mt-3 col-12 mb-3">&copy;2021 - <strong>Rafail Dardagiannopoulos - Alexandreia, Greece</strong></div>
	    </div> 
    </div> 
    );
}

export default Footer;