import { useState } from "react"


const useCounter = ( initialState = 0 ) => {

    const [state, setstate] = useState( initialState );

    const incrementar = ( factor ) =>{
        setstate( state + factor );
    }

    const decrementar = ( factor ) =>{
        setstate( state - factor );
    }

    const reset = () =>{
        setstate( initialState );
    }

//Este custom hook esta extrallendo la logica de mi contador

    return {
        state,
        incrementar,
        decrementar,
        reset
    };
}

export default useCounter