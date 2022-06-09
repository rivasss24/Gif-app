import { useState } from "react";

//const [limit, setlimit] = useState(10);
/* Hook "useState" no se puede llamar en el nivel superior. Los React Hooks deben llamarse en un componente de función React o en una función React Hook personalizada react-hooks/rules-of-hooks*/


const getGif = async( categoria, setState, limite=10 ) =>{
    //console.log( categoria );

    const url = `https://api.giphy.com/v1/gifs/search?lang=es&limit=${ limite }&api_key=HBKQHZnPqnda3p4ov2ePlCXts8YRF474&q=${encodeURI(categoria)}`
    const resp = await fetch( url );
    const { data } = await resp.json();

    //console.log(data);

    const gifs = data.map( ({id, title, images }) =>{
        return {
            id,
            title,
            url: images.downsized_medium.url
        }
    });


    //setImgs
    
    setState({
        data: gifs,
        loading: false
    });
    //return gifs;
}

export default getGif