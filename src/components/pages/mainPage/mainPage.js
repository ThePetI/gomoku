import { useState } from "react";
import LogInPage from "components/pages/LogInPage/LogInPage";
import GamePage from "components/pages/GamePage/GamePage";
import "./MainPage.scss";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="MainPage">
      {!isLoggedIn && <LogInPage handleLogin={setIsLoggedIn} />}
      {isLoggedIn && <GamePage />}
    </div>
  );
}

export default MainPage;
