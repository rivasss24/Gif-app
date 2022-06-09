import React, {useState} from 'react'
import GifGridItem from './GifGridItem';
import useFetch from './hooks/useFetch';



//Metodo reemplazado 
/*import useFetchGifs from './hooks/useFetchGifs'*/

import { AiFillPlusCircle } from 'react-icons/ai';
import useCounter from './hooks/useCounter';


const GifGrid = ({ categoria }) => {

//const [count, setcount] = useState(0);

//console.log( categoria );

/*const [ images, setImages ] = useState([]);*/

/*const { data:images, loading } = useFetchGifs({ categoria });*/

const { state:limite ,incrementar} = useCounter(10);

const url = `https://api.giphy.com/v1/gifs/search?lang=es&limit=${ 10 }&api_key=HBKQHZnPqnda3p4ov2ePlCXts8YRF474&q=${encodeURI(categoria)}`

const { data:images, loading } = useFetch(url);

//const images = !!imagess && imagess[0];


//Estamos usando el use effect para que no se ejecute mas de una vez
//creo que como es un useEffect no podemos usar el await
//No-ta: tenemos que cabiar la dependencia, por si la categoria cambia, y asi el...
//useEfect vuelva a ejecutar la funcion getGifs.

/*useEffect(() => {
        getGif( categoria, setImages );
    }, [ categoria ]);
*/

//   OBTIONAL
    /*getGif( categoria).then( gif =>{ 
        setImages( gif );
    })
    */


    //Aqui iba  getGif();

    /*const externderLimit = () =>{
        console.log('More Gifs clicked');
    }*/

    //Aqui extenderemos el limite
    
  return (
    <>
        <h3>{ categoria }</h3>

        {/*loading ? 'cargando' :  'data cargada'*/}
        {/* loading && <p>loading</p> */}

        
        
        <div className='card-counter'>
            {
                images.map( ( img ) =>{
                    return <GifGridItem 
                    img={ img } 
                    key={img.id}
                    {...img}
                    />
                } )
            }
        </div>
        
        
        <AiFillPlusCircle className='gifgrid-button' onClick={ () => { incrementar(10) } }/>
    </>
  )
}

export default GifGrid