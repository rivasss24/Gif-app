import React, {useState} from 'react'

const useForm = (setCategoria) => {

    const [ inputValue, setinputValue ] = useState('');
    //on change - en el cambio
    const handleInputChange = ( e ) => {
    //e.target.value , aqui recivimos el valor de la caja de texto
         setinputValue( e.target.value );
     }
      //Submit - enviar
     const handleSubmit = ( e ) =>{
      //lo de abajo es para que no se refresque la pagina
         e.preventDefault();
      //console.log(inputValue);
      //Validacion de no puede estar los campos vacios
      //trim elimina espacios vacios adelante y atras del string
      if(inputValue.trim().length > 2){
      //como no tengo el acceso a las categorias como tal utilizamos esta manera
      setCategoria( ( category ) =>{
        //esto de abajo es por si queremos tendremos varios
        //return [ ...category, inputValue ]
          return category = inputValue;
      })
      setinputValue('');
      }
  
     }

    return{
        inputValue,
        handleInputChange,
        handleSubmit
    }
}

export default useForm