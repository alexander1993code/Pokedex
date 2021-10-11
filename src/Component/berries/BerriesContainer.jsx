import React, { useState, useEffect } from "react";
import LoadingIcon from "../loadingIcon";
import BerriesService from "../../Services/BerriesService";
import PaginateModel from "../../Models/PaginateModel";

import '../../styles/berries.css'

///////////// COMPONENTS /////////////
const LoadingView = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <LoadingIcon />
        </div>
    );
}

const Title = ({ size }) => {
    return (
        <div className="bg-red-700 h-12 text-center font-black text-white">
            <span className="inline-block align-middle"> Berries ({size})</span>
        </div>
    );
}

const CardColum = ({ berrie, id }) => {
    return <>
        <div className="grid grid-cols-5 border-2 p-1 rounded-md mt-1 pointer" id={id}>
            <div>
                <img className="h-20" src={berrie.image} alt={berrie.name} />
            </div>
            <div className="col-span-4">
                <span className="font-black" >
                    {berrie.name}:
                </span>
                &nbsp; {berrie.effect}.
            </div>
        </div>
    </>
};



///////////// MAIN COMPONENT /////////////
const BerriesContainer = () => {
    const service = new BerriesService();

    let [paginatedBerries, setBerries] = useState(PaginateModel.empty());
    let [isLoading, setIsLoading] = useState(false);

    ///////////// HANDLERS  /////////////
    const initBerries = async (currentPaginate) => {
        setIsLoading(true);

        const paginate = await service.paginate(currentPaginate.next);

        if (paginate.results.length < 1) {

        } else {
            paginate.results = [...currentPaginate.results, ...paginate.results];

            setBerries(paginate)
            setTimeout(() => initObserver(paginate), 100);
        }

        setIsLoading(false);
    }

    const intersectionObserverHandler = async (entries, paginate) => {
        const entry = entries[0];

        if (entry.intersectionRatio >= 0.8 && paginate.next) {
            initBerries(paginate);
        }
    }

    const initObserver = (paginate) => {
        let size = paginate.results.length;

        document.querySelector("#berrieContainerChild")
            .scroll({ top: 0 })

        if (size > 0) {
            const observer = new IntersectionObserver((event) => intersectionObserverHandler(event, paginate), {
                root: document.querySelector('#berrieContainerChild'),
                threshold: 0.8,
            });

            const lastBerrieElement = document.querySelector(`#cardColumn_${size - 1}`);

            observer.observe(lastBerrieElement);
        }
    }

    useEffect(() => {
        (async () => {
            await initBerries(paginatedBerries);
        })();

    }, []);

    return (
        <>
            <div className="border-2 rounded-md border-red-800 mt-8" id="berrieContainerId">
                <Title size={paginatedBerries.results.length} />

                <div className="h-full p-2 berriesContainer" id="berrieContainerChild">
                    {isLoading && <LoadingView />}

                    {!isLoading && paginatedBerries.results.map((berrie, ind) => {

                        return <CardColum berrie={berrie} key={ind} id={`cardColumn_${ind}`} />;
                    })}
                </div>

            </div>
        </>
    );
}

export default BerriesContainer;