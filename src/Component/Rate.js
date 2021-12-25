import ReactStars from "react-rating-stars-component";
import React from "react";

 function Rate({rate}){
    // const ratingChanged = (rat) => {
    //     setRate(rat)
    //     console.log(rat)
    //   };
       
      return(
        <ReactStars
          count={5}
          value={rate}
          size={24}
          activeColor="#ffd700"
          disabled ={true}
        
          
        />
       
      
      )  
 }

 export default Rate
