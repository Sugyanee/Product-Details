import { makeStyles, Typography } from "@material-ui/core";
import {
  AccountCircle,
  Bookmark,
  Dashboard,
  Home,
  ExitToApp,
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.error.light,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7 ",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontFamily: "Oxygen, sans-serif",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const LeftBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>

      <div className={classes.item}>
        <AccountCircle className={classes.icon} />
        <Typography className={classes.text}>My Account</Typography>
      </div>

      <div className={classes.item}>
        <Dashboard className={classes.icon} />
        <Typography className={classes.text}>Shop by Categories</Typography>
      </div>

      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>My Collections</Typography>
      </div>

      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;
