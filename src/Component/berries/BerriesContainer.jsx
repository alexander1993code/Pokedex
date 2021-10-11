import React, { useState, useEffect } from "react";
import LoadingIcon from "../loadingIcon";
import BerriesService from "../../Services/BerriesService";
import '../../styles/berries.css'

///////////// LOADING COMPONENT /////////////
const LoadingView = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <LoadingIcon />
        </div>
    );
}

///////////// TITLE OF CONTAINER /////////////
const Title = <>
    <div className="bg-red-700 h-12 text-center font-black text-white">
        <span className="inline-block align-middle"> Berries </span>
    </div>
</>;



/////////////  CARD COLUMN COMPONENT /////////////
const CardColum = ({ berrie }) => {
    return <>
        <div className="grid grid-cols-5 border-2 p-1 rounded-md mt-1 pointer">
            <div>
                <img className="h-20" src={berrie.image} />
            </div>
            <div className="col-span-4">
                <span className="font-black">
                    {berrie.name}:
                </span>
                {berrie.effect}.
            </div>
        </div>
    </>
};


///////////// MAIN COMPONENT /////////////
const BerriesContainer = () => {
    const service = new BerriesService();

    let [berries, setBerries] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        const result = await service.all();
        if (!result.status) {

        } else {
            console.log(result.data)
            setBerries(result.data)
        }
        setIsLoading(false);

    }, []);

    return (
        <>
            <div className="border-2 rounded-md border-red-800 mt-8" >
                {Title}
                <div className="h-full p-2 berriesContainer" >
                    {isLoading && <LoadingView />}

                    {!isLoading && berries.map((berrie, ind) => {
                        return <CardColum berrie={berrie} key={ind} />;
                    })}
                </div>

            </div>
        </>
    );
}

export default BerriesContainer;