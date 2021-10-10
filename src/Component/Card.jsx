import React from "react";
import { Link } from "react-router-dom";

function cardHtmlBody(cardObject) {
    return <div className="px-6 pt-4 pb-2">
        {cardObject.body}
    </div>;
}

const cardLink = (cardObject, body) => {
    return (<Link to={cardObject.link}> 
       {body(cardObject)}
    </Link>)
}

const cardMain = (cardObject)=>{
    const cardBody = !cardObject.body ? '' : cardHtmlBody(cardObject);

    return (<div className=" mt-4">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 mt-2 ml-2">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                <p className="text-center">{cardObject.title}</p>
            </div>
            <img src={cardObject.image} className=" h-48 mx-auto p-2 m-4" alt="" />
        </div>
        {cardBody}
    </div>
    </div>);
}

const Card = ({ cardObject }) => {
    return (
        <>
            {!cardObject.link ? cardMain(cardObject) : cardLink(cardObject, cardMain)}
        </>
    );
}

export default Card;