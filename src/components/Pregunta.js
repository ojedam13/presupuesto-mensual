import React, { Fragment, useState } from 'react';
import Error from './Error';


const Pregunta = () => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion q lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    } 
    
    //submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }
        //Si se pasa la validacion
        guardarError(false);
    }
    
    return ( 
        <Fragment>
            <h2>Presupuesto</h2>
            {error ? <Error mensaje="Presupuesto Incorrecto" /> : null}

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