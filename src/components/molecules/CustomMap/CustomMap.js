import CustomSquare from "components/atoms/CustomSquare/CustomSquare";
import "./CustomMap.scss";

function CustomMap({
  mapSizeY,
  mapSizeX,
  mapSizeParams,
  board,
  nextEmblem,
  handleMove,
  gameOver,
}) {
  const keyY = [...Array(mapSizeY).keys()];
  const keyX = [...Array(mapSizeX).keys()];
  return (
    <table className="CustomMap">
      <tbody>
        {Array.apply(null, { length: mapSizeY }).map((e, i) => (
          <tr key={keyY[i]}>
            {Array.apply(null, { length: mapSizeX }).map((e, j) => (
              <CustomSquare
                key={keyX[j]}
                value={board[i][j]}
                row={i}
                column={j}
                board={board}
                mapSizeParams={mapSizeParams}
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
