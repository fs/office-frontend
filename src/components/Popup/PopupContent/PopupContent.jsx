import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Profile from '../../Profile/Profile';

const styles = theme => ({
  progressWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing.unit,
  },
});

const PopupContent = ({
  loadingUser,
  classes,
  tableOwner,
  isOccupied,
  isMyTable,
  isAuthenticated,
  handleHoldClick,
  handleReleaseClick,
}) => {
  if (loadingUser) {
    return (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" size={48} />
      </div>
    );
  }

  if (isOccupied) {
    return (
      <Profile name={tableOwner.name} email={tableOwner.email} photoUrl={tableOwner.photoUrl}>
        {isMyTable ? (
          <Button
            color="secondary"
            aria-label="Release this place"
            fullWidth
            className={classes.button}
            onClick={handleReleaseClick}
          >
            Release this place
          </Button>
        ) : null}
      </Profile>
    );
  }

  if (isAuthenticated) {
    return (
      <Button
        variant="contained"
        color="secondary"
        aria-label="Hold this place"
        fullWidth
        onClick={handleHoldClick}
      >
        Hold this place
      </Button>
    );
  }

  return <Typography>Please, sign in to hold this place</Typography>;
};

PopupContent.propTypes = {
  loadingUser: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    progressWrapper: PropTypes.string,
    button: PropTypes.string,
  }).isRequired,
  tableOwner: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
  }),
  isMyTable: PropTypes.bool,
  isOccupied: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  handleHoldClick: PropTypes.func.isRequired,
  handleReleaseClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(PopupContent);
