import {  useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import './ImgSlider.css'



function ImgSlider(){
   
let slideImgs=[
    {
        id:1,
        src: "./images/company-logo-1.png"
        
    },
    
    {   
        id:2,
         src:"./images/company-logo-2.png",
    },
    {   
        id:3,
         src:"./images/company-logo-3.png",

    },
        
    {   
        id:4,
        src:"./images/company-logo-4.png",

    },
   {    
        id:5,
        src:"./images/company-logo-5.png",

   } ,
    {   
        id:6,
         src:"./images/company-logo-6.png",

    }
]
   const [currentIndex,setCurrentIndex]=useState(0);

    let goToPrevious=()=>{
          
         const newIndex = currentIndex === 0 ? slideImgs.length -1: currentIndex -1
         setCurrentIndex(newIndex);
    }

   
    let goToNext =()=>{
        const newIndex = currentIndex === slideImgs.length -1 ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
        
    }
    
    let goIndex=(index)=>{
        setCurrentIndex(index)

    }
   
    
    return(
        <div className="slide-wrapper">
            <div className="slideimgbg">
             <div  onClick={goToPrevious}><IoIosArrowBack  className="button"  /></div>
            <div className="slideimg">
                <img src={slideImgs[currentIndex]} alt="" />
            </div>
            <div onClick={goToNext}><IoIosArrowForward className="button" /></div>
        </div>
        <div className="dot-slide">
            {slideImgs.map((slide,index)=>
                <div key={index}  className="dots"  onClick={()=>goIndex(slide.id)}><GoDotFill /></div>
                )}
        </div>
     </div>
       
    )
}

export default ImgSlider;