import ProfilePic from "../assets/profile_img.svg"
import "./hero.css"

const Hero = ()=>{
    return(
    
 <div className="hero">
<img src={ProfilePic} alt="" />
<h1> <span>I`m Somto, </span>  fullstack developer based in Nigeria</h1>
<p> I am a fullstack devloper with from Lagos, Nigeria  with  4 years experience</p>
< div className="hero-action">
    
    <div className="hero-resume">My resume</div>
<div className="hero-connect">connect with me</div>
        </div>
        <div/>
         </div>
       
      
    )
}
export default Hero