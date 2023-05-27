import TextField from "@mui/material/TextField";

function CustomTextField(props) {
  return (
    <div className="CustomTextField">
      <TextField {...props} required={true} size={"small"} />
    </div>
  );
}

export default CustomTextField;
