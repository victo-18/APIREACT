import React, { useEffect, useState } from "react";
import axios from "axios";

import RickyMorty from "./RickyMorty.jsx";
import Poke from "./Poke.jsx";

import './Main.css';

function Main (){

  const [url,setUrl]=useState("https://rickandmortyapi.com/api/");
  const [pokeUrl,setPokeUrl]=useState("https://pokeapi.co/api/v2/pokemon/");

  const [characters,setCharacters] = useState([]);
  const [pokes,setPokes] = useState([]);

  const [random, setRandom] = useState({});
  const [pokeRandom, setPokeRandom] = useState(null);
  
  const getData = async (url, type) => {
    try {
      const response = await axios.get(url + type, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Access-Control-Allow-Origin': `${url}`
        }
      });
      console.log(response.data.results);
      setCharacters(response.data.results || []);
    } catch (error) {
      console.error(error);
    }
  }

  const getPokeData = async (pokeUrl, type) => {
    try {
      const poke_response = await axios.get(pokeUrl + type, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Access-Control-Allow-Origin': `${pokeUrl}`
        }
      });
      console.log(poke_response.data.results);
      setPokes(poke_response.data.results || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(url, "character");
  }, [url]);

  useEffect(() => {
    getPokeData(pokeUrl, "");
  }, [pokeUrl]);
  
  const randomCharacter = () => {
    const index = Math.floor(Math.random() * (characters.length - 0 + 1)) + 0;
    const character = characters.find(it => it.id === index);
    
    console.log("characters,",characters);
    if(character) setRandom(character);
  }

  const pokeRandomCharacter = async () => {
    const indexP = Math.floor(Math.random() * (pokes.length - 0 + 1)) + 0;
    const poke = pokes[indexP];
    console.log("poke,",poke);
    console.log("pokessssssssssssss,",pokes);

    try {
      const poke_response = await axios.get(poke.url , {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Access-Control-Allow-Origin': `${poke.url}`
        }
      });
      setPokeRandom(poke_response.data);
      console.log("response,",poke_response);
      console.log("random,",pokeRandom);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div class="original">
        <div class="API_1">
        {<Poke pokeRandom={pokeRandom} />}
        </div>
          
        <div class="buttons">
            <ul>
                <b href="#" class="nav-link_2">
                    <button type="button" class="btn btn-dark" onClick={randomCharacter}>API #2:</button>
                </b>
            </ul>
                <a href="#" class="nav-link_2">
                    <button type="button" class="btn btn-dark" onClick={pokeRandomCharacter}>API #1:</button>
                </a>
        </div>

        <div class="API_2"> 
          {<RickyMorty random={random}/>}
        </div>

      </div>
      {/*
      <div className="test_jest">
        <div className="text_jest">
          <h3 className="poke">pidgeotto</h3>
          <h3>...JEST TESTING...</h3>
          <h3 className="rick_morty">Annie</h3>
        </div>
      </div>*/}
    </>
  );
}

export default Main;
