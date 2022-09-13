import React, { useRef, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';

import GifGridItemFull from './GifGridItemFull';

const GifGridItem = ({title, url, id}) => {

    /*const [est, setest] = useState('displayNone');
    const [fullImage, setfullImage] = useState('')

    const selectedImage = () =>{
       setest('Activo');
       setfullImage(url);
    }*/

    const [show, setshow] = useState(false);

    const showImage = () =>{
      setshow(!show);
    }

  return (
    <>
         
    <div className='gif-grid-item'>     
    <img src={url} alt={ id } />
    <span onClick={ showImage }><AiOutlineEye className='eye-icon'/></span>    
    </div>

    {show&&<GifGridItemFull fullImage={url} title={title} setshow={setshow} show={show}/>}

    </>

  )
}

export default GifGridItem