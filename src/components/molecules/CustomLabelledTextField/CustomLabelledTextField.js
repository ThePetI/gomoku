import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "components/atoms/CustomTextField/CustomTextField";
import "./CustomLabelledTextField.scss";

function CustomLabelledTextField({ inputText, ...props }) {
  return (
    <div className="CustomLabelledTextField">
      <Grid container justifyContent={"center"}>
        <Grid item xs={5}>
          <Typography className="label">{inputText}</Typography>
        </Grid>
        <Grid item xs={7}>
          <CustomTextField className="textField" {...props} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomLabelledTextField;
