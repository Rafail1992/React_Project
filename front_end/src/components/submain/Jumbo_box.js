import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Jumbotron(props){
    return(
        <div class="jumbotron col-md-6">
			<h2 id = "contact_page"class="text-center">CONTACT</h2>
            <div class="row mt-5">

                 <div class="col-6 card ">
					
					<a href = {"tel:"+props.tel} class="ml-auto mr-auto mt-4"><img src="images/phone-1439839_640.png" width="100" /></a>

					<div class="card-body">
						<h6 class="text-center mt-1">Tel. Number</h6>
						<p class="text-center">+30 6955047835</p>
						<a href={"tel:"+props.tel}><button id="tel_btn" type="button" class="btn " >Call me</button></a>
					</div>
				</div>

                <div class="col-6 card">
					
					<a href={"mailto:"+props.email}  class="ml-auto mr-auto mt-4"><img src="images/mail-1454731_640.png" width="100" alt ="email" /></a>
					
				  <div class="card-body">
						<h6 class="text-center mt-1">Email</h6>
						<p class="text-center">rafaildardagiannopoulos@gmail.com</p>
						<a href = {"mailto:"+props.email}><button  id="email_btn" name="email_btn" type="button" class="btn" >Send email</button></a>
				  </div>
				</div>

			</div>
        </div>

        
    );
}

export default Jumbotron;