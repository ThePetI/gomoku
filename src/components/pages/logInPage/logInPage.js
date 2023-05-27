import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomLabelledTextField from "components/molecules/CustomLabelledTextField/CustomLabelledTextField";
import logInWithUserAndPass from "functions/authentication/Login";

function LogInPage({ handleLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const logIn = (userName, password) => {
    const result = logInWithUserAndPass(userName, password);
    if (!result) {
      setErrorText("The username or password is incorrect");
      return;
    }
    handleLogin(result);
  };

  return (
    <div className="LogInPage">
      <Grid container direction={"column"}>
        <Grid item>
          <CustomLabelledTextField
            value={userName}
            inputText={"Username"}
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <CustomLabelledTextField
            value={password}
            inputText={"Password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography>{errorText}</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
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
