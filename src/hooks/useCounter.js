import { useState } from "react"


const useCounter = ( initialState = 0 ) => {

    const [state, setstate] = useState( initialState );
    const [offset, setOffset ] = useState( initialState );

    const incrementar = ( factor ) =>{
        setstate( state + factor );
    }

    const decrementar = ( factor ) =>{
        if ( state === 0 ) return;
        setstate( state - factor );
    }

    const reset = () =>{
        setstate( initialState );
    }

    const incrementarOffset = ( factor ) =>{
        setOffset( offset + factor );
    }

    const decrementarOffset = ( factor ) => {
        if ( offset === 0 ) return;
        setOffset( offset - factor );
    }

//Este custom hook esta extrallendo la logica de mi contador

    return {
        state,
        incrementar,
        decrementar,
        reset,
        offset,
        incrementarOffset,
        decrementarOffset
    };
}

export default useCounter