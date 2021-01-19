import React,{useForm} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Login_jumbo(){
    return(
     <div id="login_jumbo" class="jumbotron col-md-6">
        <h2 id = "login_page" class="text-center">LOGIN</h2>
        <div class="card mt-5">
            <div class="card-body">
                
            <form id ="login_form" class = "form-group mt-4" method = "post" action = "pages/login_request_page.php" >
                    <label class="form-control">Username</label>
                    <input id="username" name="username" class="form-control" type="text" required/>
                    <label class="form-control mt-2" >Password</label>
                    <input id="password" name="password" class="form-control" type="password" required/>
                    <button type="submit" class="btn mt-3 submit_btn submit_btn">Login</button>
                    <p class="mt-3">To Sign up click <a href="#login_jumbo" id="sign_up_click" class="font-weight-bold">here</a></p>
            </form>
                
            </div>
        </div>
     </div>

        
    );
}

export default Login_jumbo;

