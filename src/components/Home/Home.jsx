import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonIcon from '@material-ui/icons/Person';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import AuthContainer from '../../containers/Auth/AuthContainer';
import MapContainer from '../../containers/MapContainer/MapContainer';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  toolBar: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    justifyContent: 'space-between',
  },
  content: {
    height: `calc(100% - ${theme.spacing.unit * 7}px)`,
    marginTop: theme.spacing.unit * 7,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
      height: `calc(100% - ${theme.spacing.unit * 8}px)`,
    },
  },
  margin: {
    ...theme.mixins.toolbar,
  },
  avatarButton: {
    borderRadius: '50%',
    boxShadow: theme.shadows[6],
  },
  progressWrapper: {
    width: '40px',
    height: '40px',
  },
});

const Home = ({
  error,
  loading,
  isAuthenticated,
  currentUser,
  classes,
  handleDrawerToggle,
  handleNotificationClose,
  open,
}) => {
  let auth = (
    <div className={classes.progressWrapper}>
      <CircularProgress color="secondary" />
    </div>
  );

  if (!loading) {
    if (isAuthenticated) {
      auth = currentUser.photoUrl ? (
        <ButtonBase className={classes.avatarButton}>
          <Avatar
            alt={currentUser.name}
            src={currentUser.photoUrl}
            className={classes.avatar}
            onClick={handleDrawerToggle}
          />
        </ButtonBase>
      ) : (
        <Button
          variant="fab"
          color="secondary"
          aria-label="Profile"
          onClick={handleDrawerToggle}
          mini
        >
          <PersonIcon />
        </Button>
      );
    } else {
      auth = (
        <Button color="inherit" aria-label="Open login" onClick={handleDrawerToggle}>
          Login
        </Button>
      );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar className={classes.toolBar}>
          <Typography variant="title" color="inherit" noWrap className={classes.logo}>
            FS Office
          </Typography>
          <SearchContainer />
          {auth}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <MapContainer />
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={!!error}
          autoHideDuration={6000}
          onClose={handleNotificationClose}
          message={error}
        />
      </main>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        disableSwipeToOpen={false}
      >
        <AuthContainer />
      </SwipeableDrawer>
    </div>
  );
};

Home.defaultProps = {
  currentUser: null,
  error: null,
};

Home.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    photoUrl: PropTypes.string,
    userId: PropTypes.string,
  }),
  classes: PropTypes.shape({
    root: PropTypes.string,
    appWrapper: PropTypes.string,
    appBar: PropTypes.string,
    appBarShift: PropTypes.string,
    toolBar: PropTypes.string,
    drawerPaper: PropTypes.string,
    drawerHeader: PropTypes.string,
    content: PropTypes.string,
    contentShift: PropTypes.string,
    avatarButton: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleNotificationClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Home);
