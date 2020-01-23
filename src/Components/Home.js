import React from 'react'
import blogger1 from './blogger1.jfif'
 function Home(){
     return(
         <div align="center">
            <h2>Welcome To The Blogger's Application!!!</h2>
            <div className="offset-md-12 pb4">
            <img src={blogger1} width="350" length="350" className="img-rounded"/>
            </div>
         </div>
     )
 }

 export default Home