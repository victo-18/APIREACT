import React from "react";
const RickyMorty=({random})=>{
    return(
        <>
            <div className="top-content">
                {
                    random &&
                    <>
                        <h2> {random.id}.{random.name}</h2>
                    </>
                }
            </div>

            <div className="up-content">
            {
                random &&
                <>
                    <img src={random.image} alt=""/>
                </>
            }
            </div>

            <div className="down-content">
            {
                random &&
                <>
                    <h3>Gender:<p class="API_2_Parrafo">{random.gender}</p></h3>
                    <h3>Type:<p class="API_2_Parrafo">{random.type}</p></h3>
                    <h3>Species:<p class="API_2_Parrafo">{random.species}</p></h3>
                    <h3>status:<p class="API_2_Parrafo">{random.status}</p></h3>
                </>
          }
            </div> 
        </>
    )
}
export default RickyMorty;