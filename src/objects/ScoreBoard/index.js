import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard (){
    return `
        <header class = "score-board"> 
            ${PlayerName("Player1")}
            ${VsPlayer()}
            ${PlayerName("Player2")}
        </header>
    `;
}
export default ScoreBoard;