import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import CustomMap from "components/molecules/CustomMap/CustomMap";
import WinnerModal from "components/organisms/WinnerModal/WinnerModal";
import { checkWinRow, checkWinDiagonal } from "functions/checkWin/checkWin";
import { transpose } from "functions/checkWin/matrixOperations";
import "./GamePage.scss";

function GamePage({ mapSizeX, mapSizeY, handleSettings, players }) {
  const [board, setBoard] = useState(
    Array(mapSizeY).fill(Array(mapSizeX).fill("_"))
  );
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(1);
  const [nextPlayer, setNextPlayer] = useState(`Next move: ${players[0].name}`);
  const [nextEmblem, setNextEmblem] = useState(players[0].emblem);
  const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleMove = (newBoard) => {
    setBoard(newBoard);
    const isWinner = checkWin(newBoard);
    if (isWinner > 0) {
      setNextPlayer(`Winner: ${players[currentPlayerIndex - 1].name}`);
      setGameOver(true);
      setOpenModal(true);
      return;
    }
    setCurrentPlayerIndex(currentPlayerIndex + 1);
    if (players[currentPlayerIndex] !== undefined) {
      setNextPlayer(`Next move: ${players[currentPlayerIndex].name}`);
      setNextEmblem(players[currentPlayerIndex].emblem);
    } else {
      setNextPlayer(`Next move: ${players[0].name}`);
      setNextEmblem(players[0].emblem);
      setCurrentPlayerIndex(1);
    }
  };

  const restart = () => {
    setBoard(Array(mapSizeY).fill(Array(mapSizeX).fill("_")));
    setGameOver(false);
    setOpenModal(false);
    setCurrentPlayerIndex(currentPlayerIndex + 1);
    if (players[currentPlayerIndex] !== undefined) {
      setNextPlayer(`Next move: ${players[currentPlayerIndex].name}`);
      setNextEmblem(players[currentPlayerIndex].emblem);
    } else {
      setNextPlayer(`Next move: ${players[0].name}`);
      setNextEmblem(players[0].emblem);
      setCurrentPlayerIndex(1);
    }
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
      <WinnerModal
        open={openModal}
        winnerName={players[currentPlayerIndex - 1].name}
        handleClose={setOpenModal}
        handleRestart={restart}
      />
    </div>
  );
}

export default GamePage;
