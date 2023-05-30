import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";

function MapSizeSettings({ mapSizeX, mapSizeY, setMapSizeX, setMapSizeY }) {
  const handleChangeX = (value) => {
    if (
      !value ||
      (value[value.length - 1].match("[0-9]") && value[0].match("[1-9]"))
    ) {
      setMapSizeX(parseInt(value));
    }
  };

  const handleChangeY = (value) => {
    if (
      !value ||
      (value[value.length - 1].match("[0-9]") && value[0].match("[1-9]"))
    ) {
      setMapSizeY(parseInt(value));
    }
  };

  return (
    <div className="MapSizeSettings">
      <Grid container justifyContent={"center"}>
        <Grid item>
          <CustomLabelledTextField
            value={mapSizeX}
            inputText={"Map Size"}
            inputwidth={"62px"}
            type={"text"}
            onChange={(e) => handleChangeX(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CustomLabelledTextField
            value={mapSizeY}
            inputText={"X"}
            inputwidth={"62px"}
            type={"text"}
            onChange={(e) => handleChangeY(e.target.value)}
          />
        </Grid>
      </Grid>
      <Typography className="mapSizeRules">Min: 5x5 & Max: 35x35</Typography>
    </div>
  );
}

export default MapSizeSettings;
