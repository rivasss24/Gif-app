import React,{ useState } from 'react'
import PropTypes from 'prop-types';
import useForm from './hooks/useForm';

//Como tal se utiliza props.loQueSeResivio
//pero para evitarnos eso, desestructuramos setCategoria, y ya XD
const AddCategory = ({ setCategoria }) => {

  const { inputValue, handleInputChange, handleSubmit} = useForm( setCategoria );

  

  return (

    <form onSubmit={ handleSubmit } >
    <input
    type="text"
    value={ inputValue }
    onChange={ handleInputChange }
    placeholder="Comienza tu busqueda!"
    />
    {/*<p> {inputValue} </p>*/}
    </form>
    
  )

  //Buscar mejor para que sirve el form

}

AddCategory.protoTypes = {    setCategoria: PropTypes.func.isRequired
}

export default AddCategory