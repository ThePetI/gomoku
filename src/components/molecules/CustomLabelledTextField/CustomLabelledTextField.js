import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "components/atoms/CustomTextField/CustomTextField";

function CustomLabelledTextField({ inputText, ...props }) {
  return (
    <div className="CustomLabelledTextField">
      <Grid container>
        <Grid item>
          <Typography>{inputText}</Typography>
        </Grid>
        <Grid item>
          <CustomTextField {...props} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomLabelledTextField;
