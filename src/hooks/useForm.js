import React, {useState} from 'react'

const useForm = ( setCategoria ) => {

    const [ inputValue, setinputValue ] = useState('');

    const handleInputChange = ( e ) => {

         setinputValue( e.target.value );
     }
      //Submit - enviar
     const handleSubmit = ( e, dispatch ) =>{
      //Prevent Default - No refrescar la pagina
     e.preventDefault();

    // if(inputValue.trim().length < 2) return    
    if(inputValue.trim().length > 2){
    
    dispatch();

    /*setCategoria( ( category ) =>{

    return category = inputValue;
          
    })*/

    //setinputValue('');
    }
  
    }

    return{
        inputValue,
        handleInputChange,
        handleSubmit
    }
}

export default useForm