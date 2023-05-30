import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CustomSquare({ value, row, column, board, nextEmblem, handleMove }) {
  const handleChange = (row, column) => {
    if (board[row][column] === "_") {
      const copy = board.map((array) => [...array]);
      copy[row][column] = nextEmblem;
      handleMove(copy);
    }
  };

  return (
    <td
      style={{
        overflow: "hidden",
        width: "50px",
        height: "50px",
        backgroundColor: "#f64c72",
        color: "#f64c72",
        border: ".5px solid #f64c72",
        //padding: "0px",
      }}
      onClick={() => handleChange(row, column)}
    >
      <div
        style={{
          color: "black",
          border: "1px solid",
          backgroundColor: "#ffffff",
          borderColor: "#ffffff",
          height: 50,
          textAlign: "center",
        }}
      >
        <Grid container className="emblem-container">
          <Grid item>
            <Typography className="emblem">{value}</Typography>{" "}
          </Grid>
        </Grid>
      </div>
    </td>
  );
}

export default CustomSquare;
