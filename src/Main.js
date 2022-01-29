
import './Main.css'
import mainPic from '../src/mainPic.png'


const Main = () => {


    return ( 
        <div className='main-content'>
           
           <center><img src={mainPic} alt="mainPic" /></center>
           
           
           <center><div className='Main-container'>
           <br></br>
              <h4>
               
              Hej!<br></br>
              Vad kul att du kikar in på min portfolio.<br></br>
              Den är just nu under uppbyggnad under tiden som jag studerar, men kika gärna runt och lär känna mig lite mer!
              <br></br>
              <br></br>
              /Karin
              <br></br>
              </h4>
              
           </div>
           </center>
        </div>
     );
}
 
export default Main;