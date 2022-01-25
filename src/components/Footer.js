import { Button, Row, Col, Container } from "react-bootstrap";
import './Footer.css';

const FooterInfo = {
  name: 'Karin Lundqvist',
  email: 'mailtolundqvist@gmail.com',
  phone: '0730 - 91 33 62'
}


const Footer = () => {
  return (<div className="footer">
     <p>{}</p> <p>{FooterInfo.email}</p> <p>{FooterInfo.phone}</p>

  </div>)
}
    

export default Footer;

