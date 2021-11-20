
import BerriesContainer from "../Component/berries/BerriesContainer";

const Berries = ()=>{ 
    return (
        <>             

            <div className="grid grid-cols-4 p-2">
                <BerriesContainer/>
            </div>  
            <div className="grid grid-cols-8">
            
            </div>   
        </>
    ); 
}; 

export default Berries;