import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home_button(){
    return(
     <div className="col-md-6 mt-5">
				<h3 className="font-weight-normal text-center"><a href="">HOME</a></h3>
				<div className="alert alert-primary alert_msg mt-5 alert_msg_holder" >
					<p align ="center" className="alert_text_inner">"By click here, you can reload the main page"</p>
				</div>
				
	</div>
    );
}

export default Home_button;