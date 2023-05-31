import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import MapSizeSettings from "components/organisms/MapSizeSettings/MapSizeSettings";
import PlayersSettings from "components/organisms/PlayersSettings/PlayersSettings";
import "./SettingsPage.scss";

function SettingsPage({
  handleSettings,
  mapSizeX,
  mapSizeY,
  setMapSizeX,
  setMapSizeY,
  players,
  handlePlayers,
}) {
  const [errorMsg, setErrorMsg] = useState("");

  const startGame = () => {
    if (players.length < 2) {
      setErrorMsg("At least 2 players are required!");
      return;
    }
    if (mapSizeX < 5 || mapSizeY < 5) {
      setErrorMsg("The board size must be at least 5x5!");
      return;
    }
    /*if (mapSizeX > 57 || mapSizeY > 25) {
      setErrorMsg("The maximum board size is 57x25!");
      return;
    }*/
    handleSettings(true);
  };

  return (
    <div className="SettingsPage">
      <CustomTitle titleText={"Gomoku"} />
      <MapSizeSettings
        mapSizeX={mapSizeX}
        mapSizeY={mapSizeY}
        setMapSizeX={setMapSizeX}
        setMapSizeY={setMapSizeY}
      />
      <PlayersSettings players={players} handlePlayers={handlePlayers} />
      <Grid container direction={"column"} justifyContent={"center"}>
        <Grid item className="startButton">
          <Button variant="outlined" onClick={() => startGame()}>
            Start Game
          </Button>
        </Grid>
        <Grid item className="errorMsg">
          <Typography>{errorMsg}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingsPage;
