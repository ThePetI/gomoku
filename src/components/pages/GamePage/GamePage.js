import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import CustomMap from "components/molecules/CustomMap/CustomMap";
import { checkWinRow, checkWinDiagonal } from "functions/checkWin/checkWin";
import { transpose } from "functions/checkWin/matrixOperations";
import "./GamePage.scss";

function GamePage({ mapSizeX, mapSizeY }) {
  const emblemX = "X";
  const emblemO = "O";
  const [board, setBoard] = useState(
    Array(mapSizeY).fill(Array(mapSizeX).fill("_"))
  );
  const [nextPlayer, setNextPlayer] = useState("1");
  const [nextEmblem, setNextEmblem] = useState("X");

  //console.log(board);

  const handleMove = (newBoard) => {
    setBoard(newBoard);
    nextPlayer === "1" ? setNextPlayer("2") : setNextPlayer("1");
    nextEmblem === "X" ? setNextEmblem("O") : setNextEmblem("X");
    checkWin(newBoard);
  };

  const restart = () => {
    setBoard(Array(mapSizeY).fill(Array(mapSizeX).fill("_")));
    setNextPlayer("1");
    setNextEmblem("X");
  };

  const checkWin = (newBoard) => {
    //Row
    checkWinRow(newBoard, mapSizeY);
    //Column (mapSizeX is the mapSizeY here, because of the transpose)
    checkWinRow(transpose(newBoard), mapSizeX);
    //Diagonal (its more effective to work with less row)
    if (mapSizeX >= mapSizeY) {
      checkWinDiagonal(newBoard, mapSizeY, mapSizeX);
    } else {
      checkWinDiagonal(newBoard, mapSizeX, mapSizeY);
    }
  };

  return (
    <div className="GamePage">
      <CustomTitle titleText={"Gomoku"} />
      <Grid container direction={"column"}>
        <Grid item>
          <Grid container>
            <Grid item xs={3.5} />
            <Grid item xs={2.5}>
              <Typography className="nextMove">
                Next move:
                <br />
                Player {nextPlayer}
              </Typography>
            </Grid>
            <Grid item xs={2.5} className="restartButton">
              <Button
                variant="outlined"
                onClick={() => {
                  restart();
                }}
              >
                New Game
              </Button>
            </Grid>
            <Grid item xs={3.5} />
          </Grid>
        </Grid>
        <Grid item>
          <CustomMap
            mapSizeY={mapSizeY}
            mapSizeX={mapSizeX}
            board={board}
            nextEmblem={nextEmblem}
            handleMove={handleMove}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GamePage;
