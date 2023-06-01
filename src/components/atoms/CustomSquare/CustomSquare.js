import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CustomSquare({
  value,
  row,
  column,
  board,
  mapSizeParams,
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
        width: mapSizeParams.size,
        height: mapSizeParams.size,
      }}
      onClick={() => handleChange(row, column)}
    >
      <div
        className="customSquareDiv"
        style={{
          height: mapSizeParams.size,
          cursor: gameOver ? "not-allowed" : "pointer",
        }}
      >
        <Grid container className="emblem-container">
          <Grid item>
            <Typography
              style={{
                width: mapSizeParams.size,
                height: mapSizeParams.size,
                fontSize: mapSizeParams.fontSize,
                marginTop: mapSizeParams.marginTop,
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
