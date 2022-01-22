import './Card.css'

const Card = ({text, title, url}) => {
    return (
        <div className="card-container">
            <img src={url}></img>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
      
    );
  };
  
  export default Card;