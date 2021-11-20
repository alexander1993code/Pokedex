const BatleCpu = ({ pokemon }) => {
    
    return (
        <div className="inline-block float-right mr-40 mt-10">
            <img src={pokemon.imageDetails} className=" w-44 h-44"/>
        </div>
    )
}

export default BatleCpu;