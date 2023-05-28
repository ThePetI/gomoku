import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import CustomMap from "components/molecules/CustomMap/CustomMap";
import "./GamePage.scss";

function GamePage() {
  const mapSizeX = 10;
  const mapSizeY = 10;
  const emblemX = "X";
  const emblemO = "O";
  const [board, setBoard] = useState(Array(10).fill(Array(10).fill(null)));
  const [nextPlayer, setNextPlayer] = useState("1");
  const [nextEmblem, setNextEmblem] = useState("X");

  const handleMove = (newBoard) => {
    setBoard(newBoard);
    nextPlayer === "1" ? setNextPlayer("2") : setNextPlayer("1");
    nextEmblem === "X" ? setNextEmblem("O") : setNextEmblem("X");
  };

  const restart = () => {
    setBoard(Array(10).fill(Array(10).fill(null)));
    setNextPlayer("1");
    setNextEmblem("X");
  };

  console.log(board);
  //console.log(board[0][0]);

  return (
    <div className="GamePage">
      <CustomTitle titleText={"Gomoku"} />
      <Grid container direction={"column"}>
        <Grid item>
          <Grid container>
            <Grid xs={3.5} />
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
            <Grid xs={3.5} />
          </Grid>
        </Grid>
        <Grid item>
          <CustomMap
            mapSizeX={mapSizeX}
            mapSizeY={mapSizeY}
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
