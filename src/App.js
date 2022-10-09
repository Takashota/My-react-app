import logo from './logo.svg';
import './App.css';
import Records from './records.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function App() {

  return (
    <div className="App">
      <body>
        <section class="HeaderSection">
          <div className="ProfileBtn">
            <button type="button" class="btn btn-dark">Profile</button>
          </div>
          <div className="LinkAbout">
            <button type="button" class="btn btn-link">About</button>
          </div>
          <div className="LinkBicycle">
            <button type="button" class="btn btn-link">Bicycle</button>
          </div>
        </section>

        
          { Records.map( record => {
              return(
                <footer className="box">
                  { record.title }
                </footer>
              )
            })
          }
        

        <div className="CenterTopPicture">
          <img src="./img/ImageOfLaptop.png" alt="CenterTopPicture"></img>
        </div>
        <div className="AboutArticle">
         About
        </div>
        <div className="BicycleArticle">
         Bicycle 
        </div>
        <div className="CopyRight">
         CopyRight 
        </div>
      </body> 
    </div>
  );
}

export default App;
