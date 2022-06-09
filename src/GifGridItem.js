import React, {useState} from 'react'
import { AiOutlineEye } from 'react-icons/ai';

import { CgClose } from 'react-icons/cg';

const GifGridItem = ({title, url, id}) => {
    //console.log({ id, title, url });

    const [est, setest] = useState('displayNone');
    const [fullImage, setfullImage] = useState('')

    const selectedImage = () =>{
       setest('Activo');
       setfullImage(url);
    }

    const closeImage = () =>{
      setest('displayNone')
    }

  return (
    <>     
    <div className='gif-grid-item'>     
    <img src={url} alt={ id } />
    <span onClick={ selectedImage }><AiOutlineEye className='eye-icon'/></span>    
    </div>
    <div className={ est }>
    <span></span>
    <img src={fullImage}/>
    <CgClose className='close-icon' onClick={closeImage}/>
    <p className='title'>{title}</p>
    </div>
    
    </>
  )
}

export default GifGridItem