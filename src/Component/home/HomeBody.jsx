import { setState } from "react";
import Card from '../Card'; 

const HomeBody = ()=> {
    const menus = [
        {
            title: 'Pokimons',
            image: 'https://w7.pngwing.com/pngs/219/953/png-transparent-pokemon-red-and-blue-pokemon-firered-and-leafgreen-misty-kanto-pokedex-jinbe-gadget-electronic-device-pokemon.png'
        },
        {
            title: 'Trainer Vs Cpu',
            image: 'https://thumbs.dreamstime.com/b/vs-versus-logo-battle-fight-game-vector-flat-cartoon-black-white-symbol-design-rounded-emblem-logotype-isolated-clipart-188718702.jpg'
        },
    ]; 

    return (<>
    <div className="h-12 w-screen">
        {menus.map((item, i) => <Card cardObject={item} key={i} /> )}
    </div>
    </>); 
}

export default HomeBody;