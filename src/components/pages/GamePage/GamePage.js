import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import CustomMap from "components/molecules/CustomMap/CustomMap";
import { checkWinRow, checkWinDiagonal } from "functions/checkWin/checkWin";
import { transpose } from "functions/checkWin/matrixOperations";
import "./GamePage.scss";

function GamePage({ mapSizeX, mapSizeY, handleSettings }) {
  const emblemX = "X";
  const emblemO = "O";
  const [board, setBoard] = useState(
    Array(mapSizeY).fill(Array(mapSizeX).fill("_"))
  );
  const [nextPlayer, setNextPlayer] = useState("1");
  const [nextEmblem, setNextEmblem] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  //console.log(board);

  const handleMove = (newBoard) => {
    setBoard(newBoard);
    const isWinner = checkWin(newBoard);
    if (isWinner > 0) {
      setNextPlayer("Winner: Player 1");
      setGameOver(true);
      return;
    }
    nextPlayer === "1"
      ? setNextPlayer("Next move: Player 2")
      : setNextPlayer("Next move: Player 1");
    nextEmblem === "X" ? setNextEmblem("O") : setNextEmblem("X");
  };

  const restart = () => {
    setBoard(Array(mapSizeY).fill(Array(mapSizeX).fill("_")));
    setGameOver(false);
    setNextPlayer("Next move: Player 1");
    setNextEmblem("X");
  };

  const checkWin = (newBoard) => {
    let isWinner = false;
    //Row
    isWinner += checkWinRow(newBoard, mapSizeY);
    //Column (mapSizeX is the mapSizeY here, because of the transpose)
    isWinner += checkWinRow(transpose(newBoard), mapSizeX);
    //Diagonal (its more effective to work with less row)
    return mapSizeX >= mapSizeY
      ? isWinner + checkWinDiagonal(newBoard, mapSizeY, mapSizeX)
      : isWinner + checkWinDiagonal(newBoard, mapSizeX, mapSizeY);
  };

  return (
    <div className="GamePage">
      <CustomTitle titleText={"Gomoku"} />
      <Grid container direction={"column"}>
        <Grid item>
          <Grid item>
            <Typography className="nextMove">{nextPlayer}</Typography>
          </Grid>
          <Grid container>
            <Grid item xs={6} className="gameButton settings">
              <Button
                variant="outlined"
                onClick={() => {
                  handleSettings(false);
                }}
              >
                Change settings
              </Button>
            </Grid>
            <Grid item xs={6} className="gameButton">
              <Button
                variant="outlined"
                onClick={() => {
                  restart();
                }}
              >
                Start New Game
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CustomMap
            mapSizeY={mapSizeY}
            mapSizeX={mapSizeX}
            board={board}
            nextEmblem={nextEmblem}
            handleMove={handleMove}
            gameOver={gameOver}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GamePage;
