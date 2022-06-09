import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
 
export const GifExpertApp = ({}) => {

    const [ categorias, setCategoria ] = useState('');
    
    //esto de abajo es por tendremos varios 
    //const [ categorias, setCategoria ] = useState([]);


    /*const handleAdd = () =>{
        //Esto de abajo no se puede hacer 
        //nose puede mutar a categoria
        //setCategoria( categorias.push('Serie4') );
        //setCategoria( [...categorias,'Serie4'] );
        setCategoria( ( category ) =>{
            return [ ...category, 'Serie4' ]
        } )

    }*/

  return(
        <>
        <h2 className='gif-expert-app'>Gif Expert App <p>power by: Giphy.</p></h2>
        <AddCategory setCategoria={ setCategoria }/>
        <hr/>

        <div className="gifgrid-container" >
            {
        //['Serie1','Serie2','Serie3']

        
            /*    categorias.map( categoria => {
                //return <li key={ categoria }> { categoria } </li>
                return <GifGrid key={ categoria } categoria={ categoria } />
            })*/

            <GifGrid key={ categorias } categoria={ categorias } />


            }
        </div>
        </>
  )
}

export default GifExpertApp;
