import Typography from "@mui/material/Typography";
import "./CustomTitle.scss";

function CustomTitle({ titleText }) {
  return (
    <div className="CustomTitle">
      <Typography className="mainTitle">{titleText}</Typography>
    </div>
  );
}

export default CustomTitle;
