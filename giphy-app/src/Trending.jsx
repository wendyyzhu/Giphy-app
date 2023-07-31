import { useEffect, useState } from "react"
import './Trending.css'

export default function Trending(){

  const [trendyGif, setTrendyGif] = useState([])
  const [limit, setLimit] = useState(3)
  

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NOT_SECRET_CODE;
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`;

    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setTrendyGif(data.data))
    .catch((error) => console.error('Error fetching trendy GIFs:', error));
  }, [limit]);

  function handleLimit(e) {
    setLimit(e.target.value)
  }

  return (
    <div className="trending-container">
      <h2>Trendy Gif</h2>
      <div className="limit-controls">
        <label>Choose the number of Trendy GIFs:</label>
        <input
        type="number"
        value={limit}
        onChange={handleLimit}
        min="1"
        max="20"
        />
        <h3>Top {limit} Today</h3>
      </div>

      <div className="gif-container">
      {trendyGif.map((gif, index) => (
          <div key={gif.id} className={`gif-box ${index < 3 ? 'top-trending' : ''}`}>
          {index < 3 && (
            <div className="top-trending-tag">
              👑 Top {index + 1}
            </div>
          )}
          <img src={gif.images.fixed_height.url} alt="Trendy Gif" className="gif-image" />
          <p>{gif.title}</p>
        </div>
        ))}
      </div>
    </div>
  )
}