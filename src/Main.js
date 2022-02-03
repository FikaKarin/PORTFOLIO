import "./Main.css";
import Profile from "../src/Profile.png";
import About from "../src/About";
import Portfolio from "../src/Portfolio"
import Contact from './components/Contact'

//Main-komponent med bild och text
const Main = () => {
  return (
    <div className="main-content">
      
        <div className="Main-container">

          
          <div className="About1">
            <img src={Profile} alt="Profile" />
            <br></br>
            <br></br>
           
           
            <h2>FRONT END DEVELOPER</h2>
            <br></br>
           
            </div>

            <div className="About2">
            
            <h1>BAKGRUND:</h1><br></br>
            Dansare & Koreograf<br></br>
            Lärare<br></br>
            Scentekniker<br></br>
            Office Manager<br></br>
            Lagerarbetare<br></br>
            Barista<br></br>

            </div>
            <div className="About4">
            
            <h1>STYRKOR:</h1><br></br>
            Alltid i tid<br></br>
            Protagonist<br></br>
            Problemlösare<br></br>
            Snabb<br></br>
            Värdesätter trivsel<br></br>
            Gillar att utvecklas<br></br>
            Idéspruta<br></br>

            </div>

            <div className="About3">
            <h1>UTVECKLING:</h1><br></br>
            Mitt intresse för design gör att jag vill fortsätta utvecklas i CSS och animering.
            Jag vill sätta en egen prägel och personlighet till det arbetet jag utför. Fortbildning är därför något som jag värdesätter högt så att jag inte bara är konkurenskraftig utan också kan bredda mina verktyg för att skapa så unika hemsidor och appar som möjligt.
            <br></br>
            <br></br>

            
            </div>
            
        </div>

        
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="About-title"><h2>ABOUT</h2></div>
            <About />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="Portfolio-title"><h2>PORTFOLIO</h2></div>
            <Portfolio />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Contact />
    </div>
  );
};

export default Main;
