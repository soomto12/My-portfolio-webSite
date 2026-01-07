import './navbar.css'
 import logo from "../assets/logo.svg"


 export function NavBar() {
    return(
        <div>

       
        <div className="navbar">
<img src={logo}/>
<ul className='nav-menu'>
    <li> home </li>
    <li> service</li>
    <li>about me</li>
    <li> Contact</li>
</ul>
 <div className='nav-connect'>

connect with me
        </div>

        </div>
       
         </div>
    )
    
}