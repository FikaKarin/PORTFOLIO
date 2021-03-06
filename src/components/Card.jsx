

//Container för repositories som hämtas via komp FetchApi
const Card = ({text, title, link }) => {
    return (
        <div className="card-container">
            <h2>{title}</h2>
            <p>{text}</p>
            <h3><a href={link.href} target="_blank" rel="noreferrer">{link.text}</a></h3>
        </div>
      
    );
  };
  
  export default Card;