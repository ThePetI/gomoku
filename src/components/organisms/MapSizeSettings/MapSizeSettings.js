import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";

function MapSizeSettings({ mapSizeX, mapSizeY, setMapSizeX, setMapSizeY }) {
  const handleChangeX = (value) => {
    if (
      !value ||
      (value[value.length - 1].match("[0-9]") && value[0].match("[1-9]"))
    ) {
      setMapSizeX(value);
    }
  };

  const handleChangeY = (value) => {
    if (
      !value ||
      (value[value.length - 1].match("[0-9]") && value[0].match("[1-9]"))
    ) {
      setMapSizeY(value);
    }
  };

  return (
    <div className="MapSizeSettings">
      <Grid container justifyContent={"center"}>
        <Grid item>
          <CustomLabelledTextField
            value={mapSizeX}
            label={"Map Size"}
            inputwidth={"62px"}
            type={"text"}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => handleChangeX(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CustomLabelledTextField
            value={mapSizeY}
            label={"X"}
            inputwidth={"62px"}
            type={"text"}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => handleChangeY(e.target.value)}
          />
        </Grid>
      </Grid>
      <Typography className="mapSizeRules">
        Recommended max: 50x25 (1080p)
      </Typography>
    </div>
  );
}

export default MapSizeSettings;
