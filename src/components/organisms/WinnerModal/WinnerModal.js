import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function WinnerModal({ open, handleClose, handleRestart, winnerName }) {
  const styleBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#262cbe",
    border: "2px solid #ffffff",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  const styleButton = {
    bgcolor: "#f64c72",
    border: "#f64c72",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "-15px",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "18px",
    "&:hover": {
      color: "#f64c72",
      bgcolor: "#ffffff",
    },
  };

  const styleTitle = {
    color: "#ffffff",
    fontFamily: "SupplyCenter",
    fontSize: "25px",
    textAlign: "center",
    paddingBottom: "10px",
    marginTop: "-10px",
  };

  const stylePlayer = {
    color: "#ffffff",
    fontFamily: "SupplyCenter",
    fontSize: winnerName.length > 9 ? "24px" : "40px",
    textAlign: "center",
  };

  return (
    <Modal open={open}>
      <Box sx={styleBox}>
        <Grid container direction={"column"} justifyContent={"center"}>
          <Grid item>
            <Typography sx={styleTitle}>Winner</Typography>
          </Grid>
          <Grid item>
            <Typography sx={stylePlayer}>{winnerName}</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} gap={25}>
          <Grid item>
            <Button
              sx={styleButton}
              variant="outlined"
              onClick={() => {
                handleClose(false);
              }}
            >
              Close
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={styleButton}
              variant="outlined"
              onClick={() => {
                handleRestart();
              }}
            >
              Start New Game
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default WinnerModal;
