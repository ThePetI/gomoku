import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";

function PlayersSettings({ players, handlePlayers }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerEmblem, setNewPlayerEmblem] = useState("");
  const [newPlayerError, setNewPlayerError] = useState("");

  const handleChangePlayerName = (value) => {
    setNewPlayerName(value);
    setNewPlayerError("");
  };

  const handleChangePlayerEmblem = (value) => {
    if (!value || value[0].match("[a-zA-Z0-9]")) {
      setNewPlayerEmblem(value);
      setNewPlayerError("");
    }
  };

  const addPlayer = () => {
    const onlyWhitespaceName = newPlayerName.replaceAll(/\s/g, "");
    if (onlyWhitespaceName === "") {
      setNewPlayerError("Select a normal name please...");
      return;
    }
    if (newPlayerEmblem === "") {
      setNewPlayerError("Select a normal emblem please...");
      return;
    }
    const nameAlreadyUsed = players.find(
      (player) => player.name === newPlayerName
    );
    if (nameAlreadyUsed) {
      setNewPlayerError("The selected name is already in use!");
      return;
    }
    const emblemAlreadyUsed = players.find(
      (player) => player.emblem === newPlayerEmblem.toUpperCase()
    );
    if (emblemAlreadyUsed) {
      setNewPlayerError("The selected emblem is already in use!");
      return;
    }
    const copy = players.map((array) => ({ ...array }));
    copy.push({
      id: players.length,
      name: newPlayerName,
      emblem: newPlayerEmblem.toUpperCase(),
    });
    handlePlayers(copy);
    setNewPlayerName("");
    setNewPlayerEmblem("");
    setNewPlayerError("");
  };

  const removePlayer = (index) => {
    handlePlayers((players) => players.filter((player) => player.id !== index));
  };

  return (
    <div className="PlayersSettings">
      <Grid container direction={"column"} justifyContent={"center"}>
        <Grid item>
          <Grid container justifyContent={"center"} gap={15}>
            <Grid item>
              <Typography className="players">Player</Typography>
            </Grid>
            <Grid item>
              <Typography className="players">Emblem</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {players.map((player, index) => (
            <Grid
              key={player.id}
              container
              justifyContent={"center"}
              className="playerListContainer"
            >
              <Grid item sm={5} md={4} lg={3} xl={2.5}>
                <Typography className={"playerList"}>{player.name}</Typography>
              </Grid>
              <Grid item sm={1} md={0.8} lg={0.5} xl={0.5}>
                <Typography className={"playerList"}>
                  {player.emblem}
                </Typography>
              </Grid>
              <Grid item className="removeButton">
                <Button
                  variant="outlined"
                  onClick={() => removePlayer(player.id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Grid
            container
            className="addPlayercontainer"
            justifyContent={"center"}
          >
            <Grid item>
              <CustomLabelledTextField
                value={newPlayerName}
                inputText={"Name:"}
                inputwidth={"300px"}
                type={"text"}
                inputProps={{ maxLength: 15 }}
                onChange={(e) => handleChangePlayerName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <CustomLabelledTextField
                value={newPlayerEmblem}
                inputText={"Emblem:"}
                inputwidth={"60px"}
                type={"text"}
                inputProps={{ maxLength: 1 }}
                onChange={(e) => handleChangePlayerEmblem(e.target.value)}
              />
            </Grid>
            <Grid item className="addButton">
              <Button variant="outlined" onClick={() => addPlayer()}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="errorMsgPlayer">
          <Typography>{newPlayerError}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayersSettings;
