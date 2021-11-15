import MainHeader from "../Component/MainHeader";
import BerriesCardGame from "../Component/berries/BerriesCardGame";

const Berries = ()=>{ 
    return (
        <>        
            <MainHeader/>

            <div className="flex flex-wrap p-2">
                <div className="w-full md:w-2/4 lg:w-1/4">
                    {/* <BerriesContainer/> */}
                </div>
                <div className="w-full md:w-2/4 lg:w-3/4">
                    <BerriesCardGame/>
                 </div>   
            </div>  
        </>
    ); 
}; 

export default Berries;