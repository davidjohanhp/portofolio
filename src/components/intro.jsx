import React, {useEffect} from "react";
import Typical from "react-typical"
import introphoto from "../img/intro-photo.jpeg"

import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  'Back End Developer', 1000,
  'Front End Developer', 1000,
  'Mobile Developer', 1000,
];

class Intro extends React.Component {
  render() {
    AOS.init({
      duration: 1000
    });
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        {/* <div id="stars" />
        <div id="stars2" />
        <div id="stars3" /> */}

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-7 align-middle" data-AOS="fade-right">
                  <div>
                    <h1 className="intro-title mb-4">Hello, I am <span className="name_big">David</span></h1>
                    <p className="intro-subtitle">
                      <span className="text-slider-items"></span>
                      <strong className="text-slider">
                        <div>
                          <Typical wrapper="span" steps={steps} loop={Infinity} />
                        </div>
                      </strong>
                    </p>
                    <div className="d-flex justify-content-center">
                      <p className="">
                        <a className="btn button-work" href="#work" role="button">
                          Check Out My Work!
                        </a>
                      </p>
                    </div>
                    {/* <button href="#work">
                      Button
                    </button> */}
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block" data-AOS="fade-left"> {/* hides on mobile */}
                  <img src={introphoto} className="intro-photo rounded"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
