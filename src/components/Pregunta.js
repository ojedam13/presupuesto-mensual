import React, { Fragment, useState } from 'react';



const Pregunta = () => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //Funcion q lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    } 
    
    //submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar

        //Si se pasa la validacion
    }
    
    return ( 
        <Fragment>
            <h2>Presupuesto</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>

    );
}
 
export default Pregunta;