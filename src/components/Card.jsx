import './Card.css';

const Card = ({text, title, link }) => {
    return (
        <div className="card-container">
            <div className="card-text"></div>
            <h2>{title}</h2>
            <p>{text}</p>
            <h3><a href={link.href} target="_blank" rel="noreferrer">{link.text}</a></h3>

        </div>
      
    );
  };
  
  export default Card;