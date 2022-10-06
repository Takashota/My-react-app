import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <body>
        <section class="HeaderSection">
          <div class="ProfileBtn">
            <button type="button" class="btn btn-dark">Profile</button>
          </div>
          <div class="LinkAbout">
            <button type="button" class="btn btn-link">About</button>
          </div>
          <div class="LinkBicycle">
            <button type="button" class="btn btn-link">Bicycle</button>
          </div>
        </section>
        <div class="CenterTopPicture">
          <img src="" alt="CenterTopPicture"></img>
        </div>
        <div class="AboutArticle">
         About 
        </div>
        <div class="BicycleArticle">
         Bicycle 
        </div>
        <div class="CopyRight">
         CopyRight 
        </div>
      </body> 
    </div>
  );
}

export default App;
