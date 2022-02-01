import CV from '../src/JPG CV Portfolio.jpg'
import './CV.css'


//Komponent med CV-bild
const Cv = () => {
    return ( 
        <div className='cv-container'> 
            <center><img src={CV} alt="Cv"/></center>
        </div>
        
     );
}
 
export default Cv;