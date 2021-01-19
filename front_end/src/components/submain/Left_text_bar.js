import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Left_text_bar(){
    return(
        <div className = "col-md-6 pl-5 pr-5 mt-5" >
				<p align="justify">
				    Welcome to my website. My name is Rafael Dardagiannopoulos and I am a web developer and security engineer.
                     I created this page using different programming languages. Some of them are CSS, JavaScript, HTML, PHP and SQL.
                      Of course, I used the Ajax technique and difference JavaScript libraries like jQuery.
				</p>
				
				<p align="justify">
					The goal of this website is to help everyone who starts with web development to understand and prevent some of
                     the most common vulnerabilities. Prevent an attack is not always an easy task. However, a web developer can always
                      learn some little and easy tricks to make their webpage safer. Protecting our page is always crucial.
				</p>
		</div>
    );
}

export default Left_text_bar;