import React from "react"
// import {Link} from "react-router-dom"
import "../Css/About.css";
import "../Css/Profile.css";
import User from "../assets/user-profile.png";
import "../App.css"

function Navbar()
{
    const handleClick=(item)=>
    {
        const element=document.getElementById("item");

        if(element)
        {
            element.scrollIntoView({behavior:"smooth"});
        } 
    }
    return (
        <nav className="fixed-top navbar navbar-expand-lg d-flex align-items-center actual-nav">
          <div className="head">
          <a href="/">
            <div className="heading fs-4 mx-3 mx-md-3 float-start" style={{color: "white"}}>HACKMAN v7</div>
          </a>
          </div>
          <button className="navbar-toggler my-2 mx-3" style={{backgroundColor:"#D7BD7E"}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
            <ul className="list-unstyled d-flex flex-column align-items-center flex-md-row fs-4 gap-md-2 gap-lg-4 text-md-sm my-3 border-0 mt-4" style={{ fontFamily: "pixeloidsansbold" }}>
              <li className="mx-2 ">
                <a className="navbar-ul" href="/#land" onClick={() => handleClick("landing")}>Home</a>
              </li>
              <li className="mx-2">
                <a className="navbar-ul" href="/#about" onClick={() => handleClick("about")}>About</a>
              </li>
              {/* <li className="mx-2">
                <a className="navbar-ul" href="/#contact" onClick={() => handleClick("contact")}>Contact</a>
              </li> */}
              <li className="mx-2">
                <a className="navbar-ul" href="/#faqs" onClick={() => handleClick("faqs")}>Faqs</a>
              </li>
              <li className="mx-2">
                <a className="navbar-ul" href="/#schedule" onClick={() => handleClick("schedule")}>Schedule</a>
              </li>
              <li className="mx-2">
                <a className="navbar-ul" href="/registration" onClick={() => handleClick("registration")}>Register</a>
              </li> 
              <li className="mx-2">
                <a className="navbar-ul" href="/profile" onClick={() => handleClick("profile")}>
                  <img className="profilee" src={User} alt="profile-pic" style={{width:"45px", height: "45px"}} />
                </a>
              </li> 
            </ul>
          </div>
        </nav>
      );
      
}

export default Navbar;