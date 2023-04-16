import React from "react";

const Poke=({pokeRandom})=>{

    return (
        <>
            <div className="top-content">
                {
                    pokeRandom &&
                    <>
                        <h2> {pokeRandom.id}.{pokeRandom.name}</h2>
                    </>
                }
            </div>
            <div className="up-content">
            {
                pokeRandom &&
                <>
                  <img src={pokeRandom.sprites.other.dream_world.front_default} alt=""/>
                    {/*<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeRandom.id}.svg`} alt="" />*/}
                </>
            }
            </div>

            <div className="down-content_Poke">
            {
                pokeRandom &&
                <>  
                    {
                        pokeRandom.abilities.map(datoso=>{
                            return(
                                    <>
                                        <h3>Abilities:
                                            <p class="API_1_Parrafo">{datoso.ability.name}</p>
                                        </h3>
                                    </>
                                )
                            })
                    }
                        <h3>Species: <p class="API_1_Parrafo">{pokeRandom.species.name}</p></h3>

                    {
                        pokeRandom.types.map(datoso=>{
                            return(
                                    <>
                                        <h3>Types:
                                            <p class="API_1_Parrafo">{datoso.type.name}</p>
                                        </h3>
                                    </>
                                )
                            })
                    }
                </>
            }
            </div> 
        </>
    )
}
export default Poke;