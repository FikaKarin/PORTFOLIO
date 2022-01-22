import Card from './components/Card.jsx';
import './components/Portfolio.css';

const information = {
  title: 'Contact me',
  text: 'Skoluppgift. Grupparbete i Javascript 2. SPA (Single Page Application).',
  
}

const information2 = {
  title: 'Flaymarket',
  text: 'Skoluppgift. Gruppprojekt i HTML/CSS',
  
}




const Portfolio = () => {
  return (<div className="portfolio-container">
    <Card title={information.title} text={information.text} />

    <Card title={information2.title} text={information2.text} />

  </div>)
}
    

export default Portfolio;
