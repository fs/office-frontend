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
import { withStyles } from '@material-ui/core/styles';
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

const Home = props => {
  let auth = <CircularProgress color="secondary" />;

  if (!props.loading) {
    if (props.isAuthenticated) {
      auth = props.user.photoUrl ? (
        <ButtonBase className={props.classes.avatarButton}>
          <Avatar
            alt={props.user.name}
            src={props.user.photoUrl}
            className={props.classes.avatar}
            onClick={props.handleDrawerToggle}
          />
        </ButtonBase>
      ) : (
        <Button
          variant="fab"
          color="secondary"
          aria-label="Profile"
          onClick={props.handleDrawerToggle}
          mini
        >
          <PersonIcon />
        </Button>
      );
    } else {
      auth = (
        <Button color="inherit" aria-label="Open login" onClick={props.handleDrawerToggle}>
          Login
        </Button>
      );
    }
  }

  return (
    <div className={props.classes.root}>
      <div className={props.classes.appWrapper}>
        <AppBar
          className={classNames(props.classes.appBar, { [props.classes.appBarShift]: props.open })}
        >
          <Toolbar className={props.classes.toolBar}>
            <Typography variant="title" color="inherit" noWrap>
              FS Office
            </Typography>
            <SearchBox tables={props.tables} clicked={props.onTableShow} />
            {auth}
          </Toolbar>
        </AppBar>
        <main
          className={classNames(props.classes.content, {
            [props.classes.contentShift]: props.open,
          })}
        >
          <div className={props.classes.drawerHeader} />
          {/* <OfficeMapContainer
            onTableShow={onTableShow}
            popup={popup}
            handleClosePopupClick={handleClosePopupClick}
          /> */}
        </main>
        <Drawer
          variant="persistent"
          anchor={'right'}
          open={props.open}
          classes={{ paper: props.classes.drawerPaper }}
        >
          <div className={props.classes.drawerHeader}>
            <IconButton onClick={props.handleDrawerToggle}>
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
