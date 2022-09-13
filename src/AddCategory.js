import React,{ useState } from 'react'
import PropTypes from 'prop-types';
import useForm from './hooks/useForm';


const AddCategory = ({ setCategoria }) => {

  const { inputValue, handleInputChange, handleSubmit } = useForm( setCategoria );

  const cambiarCategoria = () => setCategoria(inputValue);

  return (

    <form onSubmit={ (e) => handleSubmit( e, cambiarCategoria ) } >
    <input
    type="text"
    value={ inputValue }
    onChange={ handleInputChange }
    placeholder="Comienza tu busqueda!"
    />
    {/*
    visualizar lo que estamos escribiendo
    <p> {inputValue} </p>
    */}
    </form>
  )

}

AddCategory.protoTypes = { setCategoria: PropTypes.func.isRequired }

export default AddCategory