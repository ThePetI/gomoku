import { useState } from "react";
import Typography from "@mui/material/Typography";
import LogInPage from "components/pages/LogInPage/LogInPage";
import GamePage from "components/pages/GamePage/GamePage";
import "./MainPage.scss";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="MainPage">
      <Typography className="mainTitle">Gomoku</Typography>
      {!isLoggedIn && <LogInPage handleLogin={setIsLoggedIn} />}
      {isLoggedIn && <GamePage />}
    </div>
  );
}

export default MainPage;
