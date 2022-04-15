import React,{useState, useEffect} from 'react';
import Joke from './Joke';


const RandomJoke = () => {

  const[joke,setJoke]=useState({})

  const fetchData = () =>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      return response.json()
    })
    .then (data => {
      setJoke(data)
    })
  }

    useEffect(() => {
      fetchData()
    }, [])

    return(
      <div>
        <Joke joke={joke} />

      </div>
    )
 
}

export default RandomJoke