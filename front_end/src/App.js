import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Routing, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Info from './components/Info';



function App() {
  return (
    <div className="App container-fluid">
      <Routing>
            <div class="row ">

{/*Top Header*/}

              <div id = "start" class="col-md-12 d-flex justify-content-center">
                  <a href = "" class="mt-2 justify-content-center">
						      <span class="badge"><h1 id="header_text" class="mt-3 align-text-bottom font-italic font-weight-bold"><Link to="/info">Rafail Dardagiannopoulos</Link></h1></span>
			            </a>
			        </div>
            </div>

{/*Bottom Header*/}

          <div id="second_nav" class="col-sm-12 ">

					  <nav class="navbar-expand-sm">

						  <ul class="navbar-nav mr-2 m-3 justify-content-center nav-tabs">
							  <li class="nav-item"><a href="" class="nav-link font-weight-bold text-shadows"><h4><Link to ="/">HOME</Link></h4></a></li>
                <li class="nav-item"><a href="" class="nav-link font-weight-bold"><h4><Link to = "/info">BIOGRAPHY</Link></h4></a></li>
					      <li class="nav-item"><a href="#login_page" class="nav-link font-weight-bold"><h4>LOGIN</h4></a></li>
					      <li class="nav-item"><a href="#contact_page" class="nav-link font-weight-bold"><h4>CONTACT</h4></a></li>
					    </ul>
			      </nav>

			  	</div>

           <Switch>
               <Route path ="/" exact component = {Main}/>
               <Route path = "/info" component ={Info}/>
           </Switch>
        </Routing>
    </div>
  );
}

export default App;
