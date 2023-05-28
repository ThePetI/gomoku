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

  console.log(board);
  //console.log(board[0][0]);

  return (
    <div className="GamePage">
      <CustomTitle titleText={"Gomoku"} />
      <Grid container direction={"column"} justifyItems={"center"}>
        <Grid item>
          <Typography className="nextMove">
            Next move: Player {nextPlayer}
          </Typography>
        </Grid>
        <Grid item>
          <CustomMap
            mapSizeX={mapSizeX}
            mapSizeY={mapSizeY}
            board={board}
            nextEmblem={nextEmblem}
            handleMove={setBoard}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GamePage;
