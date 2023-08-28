import React from "react";
import Header from "./Header";
import "./Navbar.css";
import "./About.css";

export default function About() {
  return (
    <div className="header">
      <Header />
      <div className="about">
        <p>About Us </p>
        <div>
          Far far away, behind the word mountains, far from the countries
          Vokalia and <br /> Consonantia, there live the blind texts.
        </div>
      </div>

      <div className="section section2">
        <div className="sub-section2">
        <h4>ABOUT US</h4>
        <p className="heading">Explore All Corners of The World With Us</p>
        <p className="details">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br /> <br />
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button type="button" class="btn btn-warning">Read more</button>
        </div>
        <div className="sub-section2" id="second">
          <div className="image-section2">
            <img src="https://preview.colorlib.com/theme/passport/images/about_1.jpg" alt="" />
          </div>
          <div className="image-section2">
            <img className="second-img" src="https://preview.colorlib.com/theme/passport/images/about_2.jpg" alt="" />
          </div>
        </div>
     </div> 

    </div>
  );
}
