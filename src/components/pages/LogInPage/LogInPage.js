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
        <Grid item className={"username"}>
          <CustomLabelledTextField
            value={userName}
            label={"Username"}
            type={"text"}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CustomLabelledTextField
            value={password}
            label={"Password"}
            type={"password"}
            InputLabelProps={{ shrink: false }}
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
