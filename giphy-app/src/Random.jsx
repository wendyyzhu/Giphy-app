import { useEffect, useState } from "react"
import './Random.css'

export default function Random(){

  const [giph, setGiph] = useState([])
  const [giph1, setGiph1] = useState([])
  const [giph2, setGiph2] = useState([])
  const [random, setRandom] = useState(false)

  useEffect(() => {
    let api_key = process.env.REACT_APP_NOT_SECRET_CODE
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    fetch(url)
      .then(res => res.json())
      .then(data => setGiph(data.data.images.original.url))
  }, [random])

  useEffect(() => {
    let api_key = process.env.REACT_APP_NOT_SECRET_CODE
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    fetch(url)
      .then(res => res.json())
      .then(data => setGiph1(data.data.images.original.url))
  }, [random])

  useEffect(() => {
    let api_key = process.env.REACT_APP_NOT_SECRET_CODE
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    fetch(url)
      .then(res => res.json())
      .then(data => setGiph2(data.data.images.original.url))
  }, [random])
  
  function handleClick() {
    setRandom(!random)
  }

  return (
    <div className="random-giphs">
      <h2>RANDOMS</h2>
      <button className="random-btn" onClick={handleClick}>SHOW ME MORE!</button>
      <div>
        <a href={giph} target="_blank"><img src={giph}/></a>
        <a href={giph1} target="_blank"><img src={giph1}/></a>
        <a href={giph2} target="_blank"><img src={giph2}/></a>
      </div>
    </div>
  )
}
