import react from 'react';
import '../styles/FlipCard.css'

const DEFAULT_IMAGE_BACK = 'https://cdn2.bulbagarden.net/upload/thumb/1/17/Cardback.jpg/428px-Cardback.jpg'
const DEFAULT_IMAGE_FROM = "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"

const flipCard = ({ backUrl, imageUrl, className, clickHandler, id}) => {
    return <>
        <div className={className} onClick={clickHandler} id={id}>
            <div className="flip-card">
                <div className="flip-card-inner ">
                    <div className="flip-card-front">
                        <img src={backUrl || DEFAULT_IMAGE_BACK} alt="Avatar" style={{ height: '150px', width: '100px' }} />
                    </div>
                    <div className="flip-card-back">
                        <img src={imageUrl || DEFAULT_IMAGE_FROM} alt="Avatar" style={{ height: '150px', width: '100px' }} />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default flipCard;