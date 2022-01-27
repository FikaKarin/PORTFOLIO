import "./About.css";
import AboutYoung from "../src/AboutYoung.jpg";

const About = () => {
  return (
    <div className="About-container">
      <center>
          
        <h4>
        <center><img style={{marginBottom:14, borderRadius:10}} src={AboutYoung} alt="young" /></center>
          1987 Föddes jag i Mellerud Dalsland. <br></br>
          Jag var aldrig still men väldigt tyst som barn och mitt hem var alltid fyllt av musik. Pappa Gunnar skrev musik, mamma Lisa va violinist och musiklärare, syster Anna sångerska och cellist, bror Salim slagverkare och morfar Åke var kantor.
          Som 15 åring flyttade jag hemifrån för att utbilda mig till
          professionell dansare och har sedan dess blivit kvar i storstaden.
          <br></br>
          Livet har aldrig varit så bra som efter 30
          <br></br>
          Idag studerar jag på KYH, Front end-utveckling med god ämnesspridning så att jag har en bred grund att stå på inför arbetslivet. <br></br>
        
            <br></br>
         
          Jag söker LIA under november 2022 - april 2023 med möjlighet till
          anställning.
          <br></br>
        </h4>
      </center>
    </div>
  );
};

export default About;
