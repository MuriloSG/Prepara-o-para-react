import "./style.css"
import CardGame from "../CardGame";

function CardFrontBack(){
    return` 
        <article class = "card-front-back"> 
            ${CardGame()}
            ${CardGame("logo-javascript", "logo do JavaScript")}
        </article>
    `
}

export default CardFrontBack;