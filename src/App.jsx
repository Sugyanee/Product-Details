import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/navbar";
import LeftBar from "./components/leftbar";
import RightBar from "./components/rightbar";
import Feed from "./components/feed";
import GmailTabsStyle from "./components/tab";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
          <GmailTabsStyle />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
