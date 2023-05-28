function CustomSquare({ value, row, column, board, nextEmblem, handleMove }) {
  const handleChange = (row, column) => {
    let copy = board.map((object) => ({ ...object }));
    copy[row][column] = nextEmblem;
    handleMove(copy);
  };

  return (
    <td
      style={{
        overflow: "hidden",
        width: "50px",
        height: "50px",
        backgroundColor: "#f64c72",
        color: "red",
        boarderColor: "#f64c72",
        border: ".5px solid #f64c72",
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
        }}
      >
        <p>{value}</p>
      </div>
    </td>
  );
}

export default CustomSquare;
