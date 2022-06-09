import { useState,useEffect } from "react"
import getGif from '../helpers/getGifs'



//Este custom hook es para indicarme cuando estoy cargando y cuando termina la carga
//Los customs hooks son para extraer logica de un componente que quiero reutilizar...
const useFetchGifs = ({categoria}) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });


    useEffect(() => {
        //tenia abligatoriamente que enviar el gif de esta manera
        getGif(categoria, setState);

        /*getGif(categoria).then( gif =>{
            setState({
                data:gif,
                loading: false
            })
            
        })*/
        
    }, []);

    return state; //{dat, loading}
}

export default useFetchGifs