import { useState, useEffect } from "react";
import './components/Card.css';

function FetchApi() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/FikaKarin/repos")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return <div className="card"> {data && data.map((item) => <div key={item.id}>
            <div className="card-container">
            <h2>{item.name}</h2>
            <h4>{item.language}</h4>
            <p>{item.description}</p>
            <h3><a href={item.html_url} target="_blank" rel="noreferrer">Gå till repo</a></h3></div>

        
  </div>)}</div>;
}

export default FetchApi;
