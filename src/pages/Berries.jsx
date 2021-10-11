import React, {useState} from "react";
import MainHeader from "../Component/MainHeader";
import BerriesContainer from "../Component/berries/BerriesContainer";

const Berries = ()=>{ 
    return (
        <>        
            <MainHeader/>

            <div className="grid grid-cols-4 p-2">
                <BerriesContainer/>
            </div>  
            <div className="grid grid-cols-8">
            
            </div>   
        </>
    ); 
}; 

export default Berries;