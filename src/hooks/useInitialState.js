import { useState } from "react";
import initialState from "../initialState";

const useInitialState = ()=> {
    
    const [state, setState] = useState(initialState);

    const addToFavorites = payload => {
        setState({
            ...state,
            favorites: [payload]
        });
    }
    const removeFavorites = payload => {
        
        setState({
            ...state,
            favorites: state.favorites.filter(items => items.name != payload.name)
        });
    }

    return {
        addToFavorites,
        removeFavorites,
        state
    };
}

export default useInitialState;