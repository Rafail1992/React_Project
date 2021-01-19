import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Left_text_bar from './submain/Left_text_bar';
import Right_text_bar from './submain/Right_text_bar';
import Info_button from './submain/Info_button';
import Home_button from './submain/Home_button';
import Jumbotron from './submain/Jumbo_box';
import Login_jumbo from './submain/Login_jumbo_box';
import Carousel from './submain/Carousel';



function Main(){

    
    return(
        
        <div id="main" className="row">
            <Carousel/>
            <div className="col-md-12 mt-5">
				<h1 id = "text_title" className="text-center">About this Site</h1>
			</div>
            
            <Left_text_bar/>
            <Right_text_bar/>
            <Home_button/>
            <Info_button/>
            <Jumbotron email = {'rafaildardagiannopooulos@gmail.com'} tel = {'+30 6955047835'}/>
            <Login_jumbo/>
            
        </div>
    );
}

export default Main;