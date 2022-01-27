import "./About.css";
import AboutYoung from "../src/AboutYoung.jpg";

const About = () => {
  return (
    <div className="About-container">
      <center>
          
        <h4>
        <center><img style={{marginTop: 0, marginBottom:14, borderRadius:10}} src={AboutYoung} alt="young" /></center>
          1987 Föddes jag i Mellerud Dalsland. <br></br>
          Som 15 åring flyttade jag hemifrån för att utbilda mig till
          professionell dansare och har sedan dess blivit kvar i storstaden.
          <br></br>
          <br></br>
          Idag studerar jag på KYH, Front end-utveckling med god ämnesspridning
          så att jag har en bred grund att stå på inför arbetslivet. <br></br>
          Vi studerar:<br></br>
          <br></br>
          <span style={{ fontSize: 19 }}>
            JavaScript 1, 2 och 3<br></br>
            UX och grafiska verktyg,<br></br>
            Backendutveckling<br></br>
            HTML/CSS och agila arbetsmetoder med examen maj 2023.<br></br>
            <br></br>
          </span>
          Jag söker LIA under november 2022 - april 2023 med möjlighet till
          anställning.
          <br></br>
        </h4>
      </center>
    </div>
  );
};

export default About;
