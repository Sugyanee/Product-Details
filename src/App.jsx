import { Grid, makeStyles } from '@material-ui/core';
import Feed from './components/feed';
import Tabs from './components/tab';

import Relatedproducts from './components/Relatedproducts';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  page: {
    padding: '1rem .5rem 0 .5rem ',
    fontFamily: 'Helvetica',
    [breakpoints.up('md')]: {
      padding: '1rem 8rem 0 8rem ',
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Feed />
      <Tabs />
      <Relatedproducts />
    </div>
  );
};

export default App;
