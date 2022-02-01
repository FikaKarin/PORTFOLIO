import "./Main.css";
import Profile from "../src/Profile.png";

//Main-komponent med bild och text
const Main = () => {
  return (
    <div className="main-content">
      <center>
        <div className="Main-container">
          <br></br>
          <h1>
            <img src={Profile} alt="Profile" />
            <br></br>
            <br></br>
            <h4 style={{ fontSize: 20 }}>
              {" "}
              | Hej |<br></br>
            </h4>
            <h4 style={{ fontSize: 20 }}>Jag heter Karin Lundqvist och är</h4>
            <h2>FRONT END DEVELOPER</h2>
            <br></br>
            <h4>
              | DANSARE | | KOREOGRAF |<br></br>
            </h4>
          </h1>
        </div>
      </center>
      
    </div>
  );
};

export default Main;
