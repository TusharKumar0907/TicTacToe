import { useState } from "react";
import Card from "../Components/Card/Card";
import "./Grid.css"

function Grid() {
  
  const[turn, setTurn] = useState(true);
  const[board, setBoard] = useState(Array(9).fill(""));
  const[xwin, setXwin] = useState(false);
  const[owin, setOwin] = useState(false);

  function isWinner() {
    if((board[0] == "X" && board[1] == "X" && board[2] == "X") || (board[0] == "X" && board[3] == "X" && board[6] == "X") || (board[1] == "X" && board[4] == "X" && board[7] == "X") || (board[2] == "X" && board[5] == "X" && board[8] == "X") || (board[0] == "X" && board[4] == "X" && board[8] == "X") || (board[2] == "X" && board[4] == "X" && board[6] == "X")) {
      setXwin(true);
    } 
    if((board[0] == "0" && board[1] == "0" && board[2] == "0") || (board[0] == "0" && board[3] == "0" && board[6] == "0") || (board[1] == "0" && board[4] == "0" && board[7] == "0") || (board[2] == "0" && board[5] == "0" && board[8] == "0") || (board[0] == "0" && board[4] == "0" && board[8] == "0") || (board[2] == "0" && board[4] == "0" && board[6] == "0")) {
      setOwin(true);
    } 
  }

  function play(index) {
   
    console.log("move played" , index);
    if(turn) {
      board[index] = "X"
    } else {
      board[index] = "0"
    }
    isWinner();
    setBoard([...board]);
    setTurn(!turn);

  }

    return (
      <div>

      <div className="beforegrid">
      
      {xwin && <h1>X player Win</h1>}
      {owin && <h1>o player win</h1>}
      {!xwin && !owin && <h1>Turn : {turn ? "X" : "O"}</h1>}

      </div>
      
      <div className="grid">
        {
            board.map((value, idx) => {
                return <Card key={idx} onPlay={play} index={idx} player={value} />
            })
        }
      </div>
      </div>
    );

}


export default Grid;
  