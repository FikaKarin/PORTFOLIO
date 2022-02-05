import "./About.css";
import AboutYoung from "../src/AboutYoung.jpg";

const About = () => {
  return (
    <div className="About-container">
      <center>
        <h4>
          <center>
            <img src={AboutYoung} alt="young" />
          </center>
          <br></br>
          1987 Föddes jag i Mellerud Dalsland. <br></br>
          Mitt hem var alltid fyllt av musik, film, diverse sy- och byggprojekt och flerstämmig ful-sång. Mamma Lisa var violinist och musiklärare, syster Anna sångerska och cellist,
          bror Salim slagverkare och morfar Åke var kantor. Som 15 åring flyttade jag hemifrån för att utbilda mig till professionell dansare
          och har sedan dess blivit kvar i storstaden.
          <br></br>
          <br></br>
          Programmering kom till mig som ett "Sliding Door"-moment.
          Jag har alltid haft en Matrix-dröm om att vara en cool kodare som
          räddar världen men gick på myten om att man tvungen att vara ett geni
          på matematik.<br></br>
          Turen kom när 2 av mina närmsta vänner såg mig, i flera år, söka efter ett nytt yrke, en
          ny inriktning i livet. Det hela började blygsamt med
          Googles app Grasshopper (JavaScript). som jobbar som
          systemutvecklare, såg att mitt intresse växte och hjälpte mig vidare
          och visade mig basic Java och C#. Ett halvår senare var jag säker på att det var Front End som jag tycklte var roligast. Jag hade tagit
          några kurser online, kompletteringskurs i Programmering 1
          och kommit in på YH.
          <br></br>
          Idag studerar jag på KYH, Front end-utveckling med god ämnesspridning
          så att jag har en bred grund att stå på inför arbetslivet.
          Utbildningen utgår ifrån JS och därför ser jag gärna att jag får
          bredda mina kunskaper i det och CSS den första tiden efter utbildning.{" "}
          <br></br>
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
