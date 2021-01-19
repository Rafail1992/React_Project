import React,{useForm} from 'react';
import '../../App.css';
import {useState} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';



function Login_jumbo(){
    
    const [mystate,setNext] = useState('block');
    const [mystate_1,setNext_1] = useState('none');
    
    const toggler = () =>{
        if(mystate == "block"){
            setNext('none');
            setNext_1('block');
        }
        else{
            setNext('block');
            setNext_1('none');
        }
       //alert(mystate);
    }

    const toggler_2 = () =>{
        if(mystate_1 == "block"){
            setNext_1('none');
            setNext('block');
        }
        else{
            setNext_1('block');
            setNext('none');
        }
       //alert(mystate_1);
    }
    
    return(
<div class="jumbotron col-md-6">
     <div id="login_jumbo" class="jumbotron col-md-12" style={{display:mystate}}>
        <h2 id = "login_page" class="text-center">LOGIN</h2>
        <div class="card mt-5">
            <div class="card-body">
                
            <form id ="login_form" class = "form-group mt-4" method = "post" action = "pages/login_request_page.php" >
                    <label class="form-control">Username</label>
                    <input id="username" name="username" class="form-control" type="text" required/>
                    <label class="form-control mt-2" >Password</label>
                    <input id="password" name="password" class="form-control" type="password" required/>
                    <button type="submit" class="btn mt-3 submit_btn submit_btn">Login</button>
                    <p class="mt-3">To Sign up click <a  onClick = {() =>toggler()} href="#login_jumbo" id="sign_up_click" class="font-weight-bold">here</a></p>
            </form>
                
            </div>
        </div>
     </div>
     <div id="signup_jumbo" class="jumbotron col-md-12 " style ={{display:mystate_1}}>
     <h2 id = "login_page" class="text-center">SIGN UP</h2>
     <div class="card mt-5">
         <div class="card-body">

         <form id ="login_form"class = "form-group" method = "post" action ="pages/signup_request_page.php">
                 <label class="form-control">Username</label>
                 <input id="username" name="username" class="form-control" type="text" required/>
                 
                 <label class="form-control mt-2" >Password</label>
                 <input id="password" name="password" class="form-control" type="password" required/>
                 
                 <label class="form-control mt-2" >Confirm Password</label>
                 <input id="password_confirm" name="password_confirm" class="form-control" type="password" required/>
                 
                 <label class="form-control mt-2" >Email</label>
                 <input id="email" name="email" class="form-control" type="email" required/>
                 
                 <div class=" form-check mt-2">
                 <label class = "form-control-label">
                      <input class=" form-check-input " type="checkbox" checked required/>I accept the <a id = "terms" class="font-weight-bold" href = "pages/terms_page.php" >Terms</a> of Use &amp; Privacy Policy</label>
                 </div>
                 <button type="submit" class="btn mt-3">Sign up</button>
                 <p class="mt-3">To Log in click <a onClick = {() => toggler_2()} href="#signup_jumbo" id="log_in_click" class="font-weight-bold">here</a></p>
             </form>
             
         </div>
     </div>
 </div>
 </div>
        
    );
}

export default Login_jumbo;

