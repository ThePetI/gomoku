import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";
import CustomTitle from "components/atoms/CustomTitle/CustomTitle";
import logInWithUserAndPass from "functions/authentication/Login";
import "./LogInPage.scss";

function LogInPage({ handleLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const logIn = (userName, password) => {
    const result = logInWithUserAndPass(userName, password);
    if (!result) {
      setErrorText("The username or password is incorrect!");
      return;
    }
    handleLogin(result);
  };

  return (
    <div className="LogInPage">
      <CustomTitle titleText={"Gomoku"} />
      <Grid container direction={"column"} justifyItems={"center"}>
        <Grid item>
          <CustomLabelledTextField
            value={userName}
            inputText={"Username"}
            textWidthXS={5}
            inputWidthXS={7}
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CustomLabelledTextField
            value={password}
            inputText={"Password"}
            textWidthXS={5}
            inputWidthXS={7}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography className="errorText">{errorText}</Typography>
        </Grid>
        <Grid item className="loginButton">
          <Button
            variant="outlined"
            onClick={() => {
              logIn(userName, password);
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogInPage;
