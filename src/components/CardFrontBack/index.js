import "./style.css";
import CardGame from "../CardGame";

window.cardFrontBack = {};
window.cardFrontBack.handClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(`.card-front-back`);
    
    if($cardFrontBack.classList.contains(`-active`)){
        $cardFrontBack.classList.remove(`-active`);
    }else{
        $cardFrontBack.classList.add(`-active`);
    }
}

function CardFrontBack(){
    return` 
        <article class = "card-front-back" onClick="cardFrontBack.handClick(event)"> 
            <div class = "card -front">
                ${CardGame()}
            </div>
            <div class = "card -back">
                ${CardGame("logo-javascript", "logo do JavaScript")}
            </div>
            
        </article>
    `
}

export default CardFrontBack;