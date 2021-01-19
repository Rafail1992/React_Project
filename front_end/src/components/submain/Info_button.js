import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Info_button(){
    return(
        <div className="col-md-6 mt-5">
			  <h3 className="font-weight-normal text-center"><a href="cv_page.php">THE AUTHOR</a></h3>
			  <div className="alert alert-primary alert_msg mt-5 alert_msg_holder" >
					<p align ="center" className="alert_text_inner">"Check my CV and learn for me. "</p>
                    <br/>
				</div>
				
		</div>
    );
}

export default Info_button;