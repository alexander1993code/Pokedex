import react, { useState } from 'react';
import FlipCard from '../FlipCard';
import BerriesGameCoreClass from '../../Utils/BerriesGameCore';

let berries = [
    {
        id: 1,
        flipped: false,
        mached: false,
        image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
    },
    {
        id: 2,
        flipped: false,
        mached: false,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
];

berries = [...JSON.parse(JSON.stringify(berries)), ...berries];

const BerriesGameCore = new BerriesGameCoreClass(berries);

BerriesGameCore.flipHandler = BerriesGameCore.flipHandler.bind(BerriesGameCore);

const BerriesCardGame = (props) => {
    let [gameLife, setGameLife] = useState(BerriesGameCore.life);

    const cardClickHandler = (index, event) => {
        BerriesGameCore.flipHandler(index, event);
        setGameLife(BerriesGameCore.life);
    };

    const resetGame = () => {
        BerriesGameCore.resetGame();
        setGameLife(BerriesGameCore.life);
    };

    const ResetButtom = () => {
        return (<div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
                Reset
            </button>
        </div>);
    }
    return <>
        <div className="mt-8 center">
            <h1>{gameLife}</h1>
            <div className="flex flex-wrap">
                {
                    berries.map((berrie, i) => {
                        return <FlipCard key={i}
                            imageUrl={berrie.image}
                            clickHandler={(e) => cardClickHandler(i, e)}
                            id={'card_item_id_' + i}
                            className="ml-5 mt-5 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 flex self-auto" />
                    })
                }
            </div>

            { gameLife === 0 ? <ResetButtom/> : null }

        </div>
    </>
}

export default BerriesCardGame;
