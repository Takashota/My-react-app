
import ReactDOM from 'react-dom';
import './App.css';
import Records from './records.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { render } from "react-dom";
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import ImageOfLaptop from './img/laptopPicture2.jpg';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  return (
    <div className="App">
      <body>
        <section class="HeaderSection">
          <div className="ProfileBtn">
            <button type="button" class="btn btn-dark">Profile</button>
          </div>
          <div className="LinkAbout">
            <a href="#LinkAbout" class="link-primary">About</a>
          </div>
          <div className="LinkBicycle">
            <a href="#LinkBicycle" class="link-primary">Bicycle</a>
          </div>
        </section>

        <nav class="TopPageNav">
          <div class="TopPageNav1">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div class="TopPageNav2">
            TopPageNav2
          </div>
          <div class="TopPageNav3">
            TopPageNav3 
          </div>
        </nav>

          { Records.map( record => {
              return(
                <footer className="box">
                  { record.title }
                </footer>
              )
            })
          }
        

        <div className="CenterTopPicture">
          <img className="CenterTopPictureImg" src={ImageOfLaptop} alt="CenterTopPicture"></img>
        </div>
        <div className="Articles">
          <div className="AboutArticle">
          <a id="LinkAbout">About</a>
          </div>
          <div className="BicycleArticle">
          <a id="LinkBicycle">Bicycle</a> 
          </div>
        </div>
        <div className="CopyRight">
         CopyRight 
        </div>
      </body> 
    </div>
  );
}

export default App;
