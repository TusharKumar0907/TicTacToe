import Icon from "../../Icon/Icon";
import "./Card.css";

function Card({ onPlay, index, player }) {
  
  let icon = "";
  if(player == "X"){
    icon = "cross";
  } else if(player == "0") {
    icon = "circle";
  }
 
  return (
      <div className="card" onClick={() => onPlay(index)}>
        <Icon name={icon}/>
      </div>
  );

}
  
export default Card;
  