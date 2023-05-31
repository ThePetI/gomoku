import CustomSquare from "components/atoms/CustomSquare/CustomSquare";
import "./CustomMap.scss";

function CustomMap({
  mapSizeY,
  mapSizeX,
  board,
  nextEmblem,
  handleMove,
  gameOver,
}) {
  return (
    <table className="CustomMap">
      <tbody>
        {Array.apply(null, { length: mapSizeY }).map((e, i) => (
          <tr key={i}>
            {Array.apply(null, { length: mapSizeX }).map((e, j) => (
              <CustomSquare
                key={j}
                value={board[i][j]}
                row={i}
                column={j}
                board={board}
                nextEmblem={nextEmblem}
                handleMove={handleMove}
                gameOver={gameOver}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomMap;
