import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CustomSquare({
  value,
  row,
  column,
  board,
  nextEmblem,
  handleMove,
  gameOver,
}) {
  const handleChange = (row, column) => {
    if (board[row][column] === "_" && !gameOver) {
      const copy = board.map((array) => [...array]);
      copy[row][column] = nextEmblem;
      handleMove(copy);
    }
  };

  return (
    <td
      className="customSquareTd"
      style={{
        width: "50px",
        height: "50px",
      }}
      onClick={() => handleChange(row, column)}
    >
      <div
        className="customSquareDiv"
        style={{
          height: "50px",
          cursor: gameOver ? "not-allowed" : "pointer",
        }}
      >
        <Grid container className="emblem-container">
          <Grid item>
            <Typography
              style={{
                width: "50px",
                height: "50px",
                fontSize: "58px",
                marginTop: "-18px",
              }}
            >
              {value !== "_" ? value : ""}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </td>
  );
}

export default CustomSquare;
