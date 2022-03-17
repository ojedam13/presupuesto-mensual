import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar

        //construir gasto


        //pasaar gasto al componente ppal


        //resetear el form
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    classname='u-full-width'
                    placeholder='Ej. Compra'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    classname='u-full-width'
                    placeholder='Ej. 500'
                    value={cantidad}
                    onChange={ e => guardarCantidad( parseInt (e.target.value,10) )}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
     );
}
 
export default Formulario;
