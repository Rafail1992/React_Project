import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img_1 from '../../images/contact_1280_480.png';
import img_2 from '../../images/document_1280_480.png';
import img_3 from '../../images/hacker_1280_480.png';

import '../../App.css';

function Carousel(){
    let window_width = window.screen.width;
    
    const [oldclass_1,setClass_1] = useState("active");
    const [oldclass_2,setClass_2] = useState("");
    const [oldclass_3,setClass_3] = useState("");
    const [pic,setPic] = useState(img_3);

    const next = () =>{
         if(pic == img_3){
             setPic(img_2);
             setClass_1("");
             setClass_2("active");
             setClass_3("");
             

         }
         else if(pic == img_2){
            setPic(img_1);
            setClass_1("");
            setClass_2("");
            setClass_3("active");
        }
        else{
            setPic(img_3);
            setClass_1("active");
             setClass_2("");
             setClass_3("");
        }
        return pic;
    }

    const prev = () =>{
        if(pic == img_3){
            setPic(img_1);
            setClass_1("");
             setClass_2("");
             setClass_3("active");
             
        }
        else if(pic == img_1){
           setPic(img_2);
           setClass_1("");
             setClass_2("active");
             setClass_3("");
             
       }
       else{
           setPic(img_3);
           setClass_1("active");
             setClass_2("");
             setClass_3("");
             
       }
   }

   //window.addEventListener('load',function(){setInterval(next,1000)} ,false);
    


    return(
        <div className="col-12 p-2 w-10">
            <div id="myCarousel" className="carousel slide" dat-ride="carousel">
                <p>{window_width}</p>

                <ul className="carousel-indicators">

					<li id="one" data-target = "#myCarousel" data-slide-to ="0" className={oldclass_1} style ={{backgroundColor:'#DEB887', height:'5px'}}></li>
					<li id = "teo" data-target = "#myCarousel" data-slide-to ="1" className={oldclass_2} style ={{backgroundColor:'BurlyWood', height:'5px'}}></li>
					<li di = "three" data-target = "#myCarousel" data-slide-to ="2" className={oldclass_3} style ={{backgroundColor:'BurlyWood', height:'5px'}}></li>

				</ul>

                <div className="carousel-inner">
							
					<div className="carousel-item active">
						<img src={pic} alt="home_img" style = {{width:window_width}} className="img_carousel"/>
					</div>
							
					
						
				</div>

                <a className="carousel-control-prev" href="#myCarousel"  data-slide = "prev" onClick={() => prev()}>
					<span className="carousel-control-prev-icon"></span>
				</a>
				<a className="carousel-control-next" href="#myCarousel" data-slide= "next" onClick={() => next()}>
					<span className="carousel-control-next-icon text-danger"></span>
				</a>


            </div>
        </div>
    );
}

export default Carousel;