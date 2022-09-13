import React from 'react';
import { CgClose } from 'react-icons/cg';

const GifGridItemFull = ({fullImage, title, setshow, show}) => {
  return (
    <>
    <div className='Activo'>
    <span></span>
    <img src={fullImage}/>
    <CgClose className='close-icon' onClick={ ()=> setshow(!show) }/>
    <p className='title'>{title}</p>
    </div>
    </>
  )
}

export default GifGridItemFull