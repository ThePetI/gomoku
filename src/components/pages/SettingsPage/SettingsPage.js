import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";
import MapSizeSettings from "components/organisms/MapSizeSettings/MapSizeSettings";
import "./SettingsPage.scss";

function SettingsPage({
  handleSettings,
  mapSizeX,
  mapSizeY,
  setMapSizeX,
  setMapSizeY,
}) {
  return (
    <div className="SettingsPage">
      <CustomTitle titleText={"Gomoku"} />
      <MapSizeSettings
        mapSizeX={mapSizeX}
        mapSizeY={mapSizeY}
        setMapSizeX={setMapSizeX}
        setMapSizeY={setMapSizeY}
      />
    </div>
  );
}

export default SettingsPage;
