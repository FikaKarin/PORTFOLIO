
import './Main.css'
import mainPic from '../src/mainPic.png'
import MeNeon from '../src/MeNeon.jpg'


const Main = () => {


    return ( 
        <div className='main-content'>
           <img src={mainPic} alt="mainPic" />
           <div className='About-container'>
           <br></br>
               <center><h4>
               <center><img style={{width: 500}} src={MeNeon} alt="MeNeon" /></center><br></br>
              Hej!<br></br>
              Vad kul att du kikar in på min portfolio.<br></br>
              Den är just nu under uppbyggnad under tiden som jag studerar, men kika gärna runt och lär känna mig lite mer!
              <br></br>
              <br></br>
              /Karin
              </h4></center>
           </div>
           
        </div>
     );
}
 
export default Main;