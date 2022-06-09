
import React, { useEffect, useState } from 'react'

const useFetch = ( url ) => {

    const [ state, setState ] = useState({
    //data:[],
    data: [],
    loading: true,
    });

    useEffect(() => {

        /*setState({
            data: null,
            loading: false,
            error: null
        })*/
      
        fetch( url )
        .then( resp =>{
        //Es importante especificar cual es el return
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

        setState({
            data:[gifs],
            loading: false
        })

        } );
        
    }
    ,  [ url ]);

    return state
    
}

export default useFetch