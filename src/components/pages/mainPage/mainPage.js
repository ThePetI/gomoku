import { useState } from "react";
import LogInPage from "components/pages/logInPage/logInPage";
import "./mainPage.scss";

const isLoggedIn = false;

function MainPage() {
  return (
    <div className="MainPage">
      {!isLoggedIn && <LogInPage />}
      <p className="asd">Edit and save to reload.</p>
    </div>
  );
}

export default MainPage;
