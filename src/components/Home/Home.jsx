import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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

const drawerWidth = 340;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  appWrapper: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  toolBar: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    justifyContent: 'space-between',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  avatarButton: {
    borderRadius: '50%',
    boxShadow: theme.shadows[6],
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
  let auth = <CircularProgress color="secondary" />;

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
      <div className={classes.appWrapper}>
        <AppBar className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="title" color="inherit" noWrap>
              FS Office
            </Typography>
            <SearchContainer />
            {auth}
          </Toolbar>
        </AppBar>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <MapContainer />
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={!!error}
            autoHideDuration={6000}
            onClose={handleNotificationClose}
            message={error}
          />
        </main>
        <Drawer
          variant="persistent"
          anchor="right"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <AuthContainer />
        </Drawer>
      </div>
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
