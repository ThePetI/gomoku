import { useState } from "react";
import LogInPage from "components/pages/LogInPage/LogInPage";
import SettingsPage from "components/pages/SettingsPage/SettingsPage";
import GamePage from "components/pages/GamePage/GamePage";
import "./MainPage.scss";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSettingsDone, setIsSettingsDone] = useState(false);
  const [mapSizeX, setMapSizeX] = useState(10);
  const [mapSizeY, setMapSizeY] = useState(10);
  const [mapSizeParams, setMapSizeParams] = useState(undefined);
  const [players, setPlayers] = useState([]);

  return (
    <div className="MainPage">
      {!isLoggedIn && <LogInPage handleLogin={setIsLoggedIn} />}
      {isLoggedIn && !isSettingsDone && (
        <SettingsPage
          handleSettings={setIsSettingsDone}
          mapSizeX={mapSizeX}
          mapSizeY={mapSizeY}
          setMapSizeX={setMapSizeX}
          setMapSizeY={setMapSizeY}
          players={players}
          handlePlayers={setPlayers}
          handleMapSizeParams={setMapSizeParams}
        />
      )}
      {isLoggedIn && isSettingsDone && (
        <GamePage
          mapSizeX={mapSizeX}
          mapSizeY={mapSizeY}
          mapSizeParams={mapSizeParams}
          players={players}
          handleSettings={setIsSettingsDone}
        />
      )}
    </div>
  );
}

export default MainPage;
