import React, {useState, useEffect} from 'react'

import { AiOutlineCaretRight,AiOutlineCaretLeft } from 'react-icons/ai';

import GifGridItem from './GifGridItem';
import useFetch from './hooks/useFetch';
import useCounter from './hooks/useCounter';


const GifGrid = ({ categoria }) => {

  useEffect(() => {
    
    return () => {
      console.log('Componente cerrado');
    }
  }, []);


const { state:limite , 
        incrementar, 
        decrementar, 
        offset, 
        incrementarOffset, 
        decrementarOffset} = useCounter(10);

  const url = `https://api.giphy.com/v1/gifs/search?lang=es&limit=${ 10 }&offset=${ offset }&api_key=HBKQHZnPqnda3p4ov2ePlCXts8YRF474&q=${encodeURI(categoria)}`

  const { data, loading } = useFetch(url);
  
  const [ images ] = data;

  console.log( 'Images', images);

  console.log( 'Loadin', loading );

  //const images = !!imagess && imagess[0];

  return (
    <div className='gifgrid-container'>
        <h3>{ categoria }</h3>
        {/*loading ? 'cargando' :  'data cargada'*/}
        {/*  */}
        {  
        loading
        ?
        ( <div></div> )
        :
        (<div className='card-counter'>
            {
              
                images.map( ( img ) =>{
                    return <GifGridItem 
                    img={ img } 
                    key={img.id}
                    {...img}
                    />
                } )

            }
        </div>)
        }
        <AiOutlineCaretLeft className='gifgrid-button' onClick={ () => {
          decrementar(10);
          decrementarOffset(10)
          
        }} />
        <AiOutlineCaretRight className='gifgrid-button' onClick={ () =>{
          incrementar(10);
          incrementarOffset(10);
        } }/>
    </div>
  )
}

export default GifGrid