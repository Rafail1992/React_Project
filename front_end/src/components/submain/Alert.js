import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Alert(){
    return(
        <div id="pop_up_help" class="alert alert-primary alert_msg mt-5 alert_msg_holder alert-dismissable " style = "width:500px;" >

            <button id = "pop_up_close" type="button" class="close" >&times;</button>
            <br/>
            <p id = "warning_msg" align ="center" class="alert_text_inner pl-5 pr-5" style = " text-align:justify;"></p>
        </div>
    );
}

export default Alert;