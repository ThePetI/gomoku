import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "components/atoms/CustomTextField/CustomTextField";
import "./CustomLabelledTextField.scss";

function CustomLabelledTextField({ inputText, ...props }) {
  return (
    <div className="CustomLabelledTextField">
      <Grid container justifyContent={"center"}>
        <Grid item xs={1}>
          <Typography className="label">{inputText}</Typography>
        </Grid>
        <Grid item>
          <CustomTextField className="textField" {...props} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomLabelledTextField;
