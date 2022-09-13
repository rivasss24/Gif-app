import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

 
export const GifExpertApp = ({}) => {

    const [ categoria, setCategoria ] = useState([]);

  return(
        <>
        <h2 className='gif-expert-app'>GIF EXPERT APP<p>power by: Giphy.</p></h2>
        <AddCategory setCategoria={ setCategoria }/>
        <hr/>
        {
        /*( categorias ) && <GifGrid key={ categorias } categoria={ categorias } />*/
        }
        {
        categoria && (<GifGrid key={ categoria } categoria={ categoria } />)
        }
        </>
  )
}

export default GifExpertApp;
