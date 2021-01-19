import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Routing, Switch, Route, Link} from 'react-router-dom';

import Main from './Main';
import Info from './Info';




function Header() {
  return (
    <div className="Header container-fluid">

<Routing>
            <div className="row ">

{/*Top Header*/}

              <div id = "start" className="col-md-12 d-flex justify-content-center">
                  <a href = "" className="mt-2 justify-content-center">
						      <span className="badge"><h1 id="header_text" className="mt-3 align-text-bottom font-italic font-weight-bold"><Link to="/info">Rafail Dardagiannopoulos</Link></h1></span>
			            </a>
			        </div>
            </div>

{/*Bottom Header*/}

          <div id="second_nav" className="col-sm-12 ">

					  <nav className="navbar-expand-sm">

						  <ul className="navbar-nav mr-2 m-3 justify-content-center nav-tabs">
							  <li className="nav-item"><a href="" className="nav-link font-weight-bold text-shadows"><h4><Link to ="/">HOME</Link></h4></a></li>
                <li className="nav-item"><a href="" className="nav-link font-weight-bold"><h4><Link to = "/info">BIOGRAPHY</Link></h4></a></li>
					      <li className="nav-item"><a href="#login_page" className="nav-link font-weight-bold"><h4>LOGIN</h4></a></li>
					      <li className="nav-item"><a href="#contact_page" className="nav-link font-weight-bold"><h4>CONTACT</h4></a></li>
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

export default Header;
