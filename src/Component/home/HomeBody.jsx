import Card from '../Card'; 

const HomeBody = ()=> {
    const menus = [
        {
            link: '/pokemon',
            title: 'Pokemons',
            image: 'https://w7.pngwing.com/pngs/219/953/png-transparent-pokemon-red-and-blue-pokemon-firered-and-leafgreen-misty-kanto-pokedex-jinbe-gadget-electronic-device-pokemon.png',

        },
        {
            link: '/battle',
            title: 'Trainer Vs Cpu',
            image: 'https://thumbs.dreamstime.com/b/vs-versus-logo-battle-fight-game-vector-flat-cartoon-black-white-symbol-design-rounded-emblem-logotype-isolated-clipart-188718702.jpg'
        },
        {
            link: '/berries',
            title: 'Berries',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d593771-5eab-464a-91a2-1e4af6b88b2f/ddrl3x8-f0050a0d-450f-4394-b71b-8bccef18504d.png/v1/fill/w_640,h_256,strp/pokemon_berries_1_10_128px_artworks_by_anarlaurendil_ddrl3x8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNWQ1OTM3NzEtNWVhYi00NjRhLTkxYTItMWU0YWY2Yjg4YjJmXC9kZHJsM3g4LWYwMDUwYTBkLTQ1MGYtNDM5NC1iNzFiLThiY2NlZjE4NTA0ZC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8luKHvaPYn40DvpnqJ186noQ7b5Y9JvW7zRQ1QO3-P0'
        }
    ]; 

    return (
        <div className="grid grid-cols-3">
            {menus.map((item, i) => <Card cardObject={item} key={i} /> )}
        </div>
    ); 
}

export default HomeBody;