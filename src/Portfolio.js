
import './components/Portfolio.css';
import FetchApi from './FetchApi';

// const information = {
//   title: 'Fire Sauce',
//   text: 'Skoluppgift. Grupparbete i Javascript 2. SPA (Single Page Application). eCom för starka såser.',
//   link: {text:'Go to Fire Sauce repo', href: 'https://github.com/BigBits8/JS2Grupparbete'}
// }

// const information2 = {
//   title: 'Flaymarket',
//   text: 'Skoluppgift. Gruppprojekt i HTML/CSS, Flaymarket säljer vapen till dataspalet CS. Komplett med varukorg, produktlista, kontakt m.m.',
//   link: {text:'Go to FlayMarket repo', href: 'https://github.com/tovebr/flaymarket'}
//   }




const Portfolio = () => {
  return (
  <div className="portfolio-container">
    {/* <Card title={information.title} text={information.text} link={information.link}/>

    <Card title={information2.title} text={information2.text} link={information2.link}/> */}

    <FetchApi />


  </div>)
}
    

export default Portfolio;
