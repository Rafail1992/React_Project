import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Right_text_bar(){
    return(
        <div className = "col-md-6 pl-5 pr-5 mt-5" >
				
				<p align="justify">
					As I mentioned before, this page will help you simulate some XSS attacks and SQL injections.
                     After you log in, you can choose to solve some simple exercises. Of course, you can check for
                      tips or, if you can't find the answer, just press the solution button and check the correct
                      solution. By studying the solutions you will learn how to filter input data and keep your code safe.
				</p>
				
				<p align="justify">
					You can also check my profile and learn more about my studies and knowledge or contact me. Don't forget
                     to create an account before you log in.
				</p>
			</div>
    );
}

export default Right_text_bar;