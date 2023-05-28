import CustomSquare from "components/atoms/CustomSquare/CustomSquare";
import "./CustomMap.scss";

function CustomMap({ mapSizeX, mapSizeY, board, nextEmblem, handleMove }) {
  return (
    <table className="CustomMap">
      <tbody>
        {Array.apply(null, { length: mapSizeX }).map((e, i) => (
          <tr key={i}>
            {Array.apply(null, { length: mapSizeY }).map((e, j) => (
              <CustomSquare
                key={j}
                value={board[i][j]}
                row={i}
                column={j}
                board={board}
                nextEmblem={nextEmblem}
                handleMove={handleMove}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomMap;
