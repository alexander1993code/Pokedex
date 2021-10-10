import React from "react";

const Card = ({cardObject}) => {

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 mt-2 ml-2">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        <p>{cardObject.title}</p>
                        <p className=" text-center ">

                        </p>
                    </div>
                    <img src={cardObject.image} className="" alt="" />
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div>
            </div>
        </>
    );
}

export default Card; 