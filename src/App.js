import React, {useState, useEffect} from 'react'

const Pokemon = (props) => {
    const [pokeName, setPokeName] = useState([])

    useEffect(() => {
      console.log("hello")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
          return response.json()
        })
        .then(response => {
          setPokeName({
            name: response.results
          })
        })
    }, [])

    return (
      <div>
        {pokeName.name ? pokeName.name.map((item, index) => {
          return (<div key={index}>{item.name}</div>)
        }):null}
      </div>
    )
}

export default Pokemon;
