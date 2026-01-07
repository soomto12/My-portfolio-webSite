import theme_pattern from "../assets/theme_pattern.svg"
import profil_img from "../assets/about_profile.svg"
import "./about.css"
const About = ()=>{
    return(
<>
<div className="about">
    <div className="about-title">
        <h1> About me</h1>
        <img src={theme_pattern}/>

    </div>
    <div className="about-section">
       
<div className="about-left">
<img src={profil_img}/>
</div>

<div className="about-right">
    <div className="about-para">
        <p> I am an experience fullstack Developer with over 5 year of experience</p>
        <p> My passion for web development and coding in general </p>

    </div>
    <div className="about-skills">
        <div className="about-skills">
            <p> HTML AND CSS</p>
            <p> REACT JS</p>
            <p> JAVASCRIPT</p>
            <p> NODE JS</p>
            <p> NEXT JS</p>
            <p> MONGODB</p>
            <p> POSTGRESS SQL</p>

        </div>
        
    </div>
    

</div>




    </div>
    <div className="about-achievements">
<div className="about-achievement">
    <h1>
10+
    </h1>
    <p> YEARS OF EXPERIENCE</p>

</div>
<div className="about-achievement">
    <h1>
90+
    </h1>
    <p> PROJECT COMPLETED</p>

</div>
    </div>
</div>
</>
    )
}

export default About