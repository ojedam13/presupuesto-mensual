import React, { useState } from 'react';

const Formulario = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos</h2>

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    classname='u-full-width'
                    placeholder='Ej. Compra'
                />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type='number'
                    classname='u-full-width'
                    placeholder='Ej. 500'
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
