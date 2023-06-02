import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import MapSizeSettings from "components/organisms/MapSizeSettings/MapSizeSettings";
import setMapParams from "functions/setMapParams/setMapParams";
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
  handleMapSizeParams,
}) {
  const [errorMsg, setErrorMsg] = useState("");

  const startGame = () => {
    if (players.length < 2) {
      setErrorMsg("At least 2 players are required!");
      return;
    }
    if (mapSizeX === "" || mapSizeY === "") {
      setErrorMsg("Please add a valid board size!");
      return;
    }
    if (parseInt(mapSizeX) < 5 || parseInt(mapSizeY) < 5) {
      setErrorMsg("The board size must be at least 5x5!");
      return;
    }
    handleMapSizeParams(setMapParams(parseInt(mapSizeX), parseInt(mapSizeY)));
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
