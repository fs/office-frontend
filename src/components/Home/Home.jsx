import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import OfficeMapContainer from '../../containers/OfficeMapContainer/OfficeMapContainer';
import AuthContainer from '../../containers/Auth/AuthContainer';
import SearchBox from '../../components/SearchBox/SearchBox';

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
  toolBarRight: {
    maxWidth: '400px',
    width: '100%',
    display: 'flex',
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
});

const Home = ({
  handleDrawerToggle,
  open,
  isAuthenticated,
  classes,
  tables,
  onTableShow,
  popup,
  handleClosePopupClick,
}) => {
  let auth = (
    <Button color="inherit" aria-label="Open login" onClick={handleDrawerToggle}>
      Login
    </Button>
  );

  if (isAuthenticated) {
    auth = (
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
  }

  return (
    <div className={classes.root}>
      <div className={classes.appWrapper}>
        <AppBar className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="title" color="inherit" noWrap>
              FS Office
            </Typography>
            <div className={classes.toolBarRight}>
              <SearchBox tables={tables} clicked={onTableShow} />
              {auth}
            </div>
          </Toolbar>
        </AppBar>
        <main className={classNames(classes.content, { [classes.contentShift]: open })}>
          <div className={classes.drawerHeader} />
          {/* <OfficeMapContainer
            onTableShow={onTableShow}
            popup={popup}
            handleClosePopupClick={handleClosePopupClick}
          /> */}
        </main>
        <Drawer
          variant="persistent"
          anchor={'right'}
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Home);
