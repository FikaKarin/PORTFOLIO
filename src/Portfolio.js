import Card from './components/Card.jsx';
import './components/Portfolio.css';

const information = {
  title: 'Fire Sauce',
  text: 'Skoluppgift. Grupparbete i Javascript 2. SPA (Single Page Application).',
  link: {text:'Go to Fire Sauce repo', href: 'https://github.com/BigBits8/JS2Grupparbete'}
}

const information2 = {
  title: 'Flaymarket',
  text: 'Skoluppgift. Gruppprojekt i HTML/CSS',
  link: {text:'Go to FlayMarket repo', href: 'https://github.com/tovebr/flaymarket'}
  }




const Portfolio = () => {
  return (
  <div className="portfolio-container">
    <Card title={information.title} text={information.text} link={information.link}/>

    <Card title={information2.title} text={information2.text} link={information2.link}/>

  </div>)
}
    

export default Portfolio;
