import "./Main.css";
// import Profile from "../src/Profile.png";
import About from "../src/About";
import Portfolio from "../src/Portfolio"
import Contact from './components/Contact'

//Main-komponent med bild och text
const Main = () => {
  return (
    <div className="main-content">
      
        <div className="Main-container">

          
          <div className="About1">
            
          
            {/* <img src={Profile} alt="Profile" /> */}
            <br></br>

            <h2>FRONT END DEVELOPER</h2>
        
            <br></br>
           <p>Hej! <br></br> <h5>Välkommen till min portfolio. Denna React app är en skoluppgift i JS 2. Ha därför i åtanke att sidans design var en uppgift som skulle lösas på bästa sätt och inte nödvändigtvis representerar mig som färdigutbildad.<br></br>
           </h5></p>
            </div>

            <div className="About2">
            
            <h1>BAKGRUND:</h1><br></br>
            Dansare & Koreograf<br></br>
            <span style={{fontSize: 13, color: "blue"}}>Idol, Idrottsgalan, Humorgalan, Petra Mede Show, VK 2013/2014, Laleh, Cazzette, Carola, Madcon, RedFoo, Make  Up Store, SpecSavers m.fl.</span><br></br><br></br>
            Lärare<br></br>
            <span style={{fontSize: 13, color: "blue"}}>Dans & CirkusHögskolan, Balettakademien, Kulturama, House of Shapes, Step in Tyresö, DansCompagniet, DansCenter, Marikas, Kuhlers, SDA, Dansverket m.fl.</span><br></br><br></br>
            Scentekniker<br></br>
            <span style={{fontSize: 13, color: "blue"}}>Kungliga Operan</span><br></br><br></br>
            Office Manager<br></br>
            Lagerarbetare<br></br>
            Barista<br></br>

            </div>
            <div className="About4">
            
            <h1>STYRKOR:</h1><br></br>
            Alltid i tid<br></br><br></br>
            Protagonist<br></br><br></br>
            Problemlösare<br></br><br></br>
            Är bra på att hålla energi och tempo uppe hela vägen i mål.<br></br><br></br>
            Värdesätter trivsel<br></br><br></br>
            Gillar att utvecklas<br></br><br></br>
            Idéspruta<br></br>

            </div>

            <div className="About3">
            <h1>UTVECKLING:</h1><br></br>
            Jag vill fortsätta utvecklas i CSS och animering. Idag har jag bättre idéer än vad jag kan utföra, vilket gör mig driven att komma längre.
            Jag vill sätta en egen prägel och personlighet till det arbetet jag utför.<br></br><br></br> Fortbildning är därför något som jag värdesätter högt så att jag är konkurenskraftig och kan bredda mina verktyg för att skapa så unika lösningar som möjligt.
            <br></br>
            <br></br>

            </div>
            
            <div className="About5">
            
            <h1>FRITID:</h1><br></br>
            Loppisar och antikbutiker<br></br><br></br>
            Barndomsnostalgi<br></br><br></br>
            Gröna växter<br></br><br></br>
            Alla poddar och program med Hanna Hellquist<br></br><br></br>
            Stand Up<br></br><br></br>
            Kallbad & Bastu<br></br><br></br>
            Hemmafix<br></br>

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
