import { PrimaryButton, Paper } from "@ggvigroup/component-library";
import { Box, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperBox: {
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "40vw",
    },
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <Box className={classes.paperBox}>
      <Paper>
        <Box marginBottom={3}>
          <Box marginBottom={1}>
            <Typography variant="h6">What is Verified Ohmies?</Typography>
          </Box>
          <Box>
            <p>A Discord Bot that enables Ohmies to prove ownership of Tech Holding JSC tokens and get a Discord role in return.</p>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={1}>
            <Typography variant="h6">Current Status?</Typography>
          </Box>
          <Box>
            <p>Our first release allows for authentication with gGVI on Ethereum Mainnet. Future releases will enable for authentication with further Tech Holding JSC tokens and on other chains.</p>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Info;