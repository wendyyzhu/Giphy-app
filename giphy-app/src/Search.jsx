import "./Search.css";
import { useState, useEffect } from "react";

export default function Search() {
  const api_key = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(1);
  const [data, setData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleResultChange = (e) => {
    setResult(parseInt(e.target.value));
    setButtonClick(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClick(true);
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=${result}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .then(() => setButtonClick(false));
  }, [result, buttonClick]);

  return (
    
    <div className="search-wrapper">
      <h2>find a gif </h2>
      <form className="search-form">
        <label>
          <input
            value={search}
            onChange={handleChange}
            className="input"
            type="text"
          />
        </label>
        <br />
        <span className="result-text">limit to:</span>

        <select
          className="number-of-results"
          onChange={handleResultChange}
          value={result}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <br />

        <button className="search-button" onClick={handleSubmit}  type="submit">
          find 🔍
        </button>
      </form>
<div className="display-search-gif">
      {data.map((gif) => (
        <img
        key={gif.id}
        src={gif.images.fixed_height.url}
        alt={gif.slug} />
      ))}
      </div>
    </div>
  );
} 
