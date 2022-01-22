import { Button, Row, Col, Container } from "react-bootstrap";
import Card from './components/Card.jsx';
import './components/Portfolio.css';

const information = {
  title: 'Fire Sauce',
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
// <div className="Container">
      
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src="" />
    //           <Card.Body>
    //             <Card.Title>Fire Sauce</Card.Title>
    //             <Card.Text>
    //               Skoluppgift. Grupparbete i Javascript 2. SPA (Single Page Application).
    //             </Card.Text>
    //             <Button variant="primary" onClick={()=> window.open("https://github.com/BigBits8/JS2Grupparbete", "_blank")}> Fire Sauce repo</Button>
    //           </Card.Body>
    //         </Card>
        
       
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src="" />
    //           <Card.Body>
    //             <Card.Title>Flaymarket </Card.Title>
    //             <Card.Text>
    //              Skoluppgift. Gruppprojekt i HTML/CSS
    //             </Card.Text>
    //             <Button variant="primary" onClick={()=> window.open("https://github.com/tovebr/flaymarket", "_blank")}>FlayMarketrepo</Button>
    //           </Card.Body>
    //         </Card>
        
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src="" />
    //           <Card.Body>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="">Go somewhere</Button>
    //           </Card.Body>
    //         < Card />
        
    // </div>
