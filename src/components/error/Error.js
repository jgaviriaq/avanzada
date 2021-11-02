import React from 'react';

function Error(mensaje){
    console.log(mensaje)
    return(
        <div className="card-panel red darken-4 error col 12">
            {mensaje}
        </div>
    )
}

export default Error;