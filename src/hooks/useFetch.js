
import { useEffect, useState, useRef } from 'react'

const useFetch = ( url ) => {

    const isMounted = useRef(true);
    console.log('El useFetch esta montado',isMounted);

    const [ state, setState ] = useState({
    data: [],
    loading: true,
    });

    useEffect(() => {
      
        fetch( url )
        .then( resp =>{
            return resp.json()
        })
        .then( ({ data }) =>{

        const gifs = data.map( ({id, title, images }) =>{
            return {
                id,
                title,
                url: images.downsized_medium.url
            }
        });


        if(isMounted){

        setState({
            data:[gifs],
            loading: false
        })}

        console.log("Termino la busqueda");

        } );
        
    }
    ,  [ url ]);

    return state
    
}

export default useFetch