import React, { useEffect, useState } from "react";
import MainHeader from "../Component/MainHeader";
import PokemonService from '../Services/PokemonService';



const Pokemon = ()=> {

    const [pokemon, setPokemon] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [intervalId,setIntervalID]=useState();
    const [base,setBase]= useState('se');

    const FetchData = async () =>{

        setLoading(true);
        setError(null);
        try{
            const pokemon = await PokemonService.all();

            setPokemon(pokemon);
            setLoading(false);
        }catch{
            setLoading(false);
            setError(error);
        }
       
        useEffect(setBase('hola'));
        console.log(base);
        const nueva = 'hola nuevo';
        setBase(nueva);
        console.log(base)
    }
    return(
        <>
        <h1>{base}</h1>
        <MainHeader/>
        
        </>
    );
}

export default Pokemon;