import React from 'react';
import '../App.css';
import Left_text_bar from './submain/Left_text_bar';
import Right_text_bar from './submain/Right_text_bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home_button from './submain/Home_button';


function Main(){
    return(
        <div id="main" class="row">
            <div class="col-md-12 mt-5">
				<h1 id = "text_title" class="text-center">About this Site</h1>
			</div>
            <Left_text_bar/>
            <Right_text_bar/>
            <Home_button/>
        </div>
    );
}

export default Main;