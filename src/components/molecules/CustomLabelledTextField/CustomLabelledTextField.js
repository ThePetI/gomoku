import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomTextField from "components/atoms/CustomTextField/CustomTextField";
import "./CustomLabelledTextField.scss";

function CustomLabelledTextField({
  textWidthXS,
  inputWidthXS,
  inputwidth,
  ...props
}) {
  return (
    <div className="CustomLabelledTextField">
      <Grid container justifyContent={"center"}>
        <Grid item xs={textWidthXS ?? undefined}>
          <Typography className="label">{props.label}</Typography>
        </Grid>
        <Grid item xs={inputWidthXS ?? undefined}>
          <CustomTextField
            className="textField"
            {...props}
            inputwidth={inputwidth}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomLabelledTextField;
