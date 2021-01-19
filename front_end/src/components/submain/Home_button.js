import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Home_button(){
    return(
        <div class="col-md-4 mt-5">
				<h3 class="font-weight-normal text-center"><a href=""><Link to = "/">HOME</Link></a></h3>
				<div class="alert alert-primary alert_msg mt-5 alert_msg_holder" >
					<p align ="center" class="alert_text_inner">"By click here,
                    you can reload 
                    the main page"</p>
				</div>
				
			</div>
    );
}

export default Home_button;