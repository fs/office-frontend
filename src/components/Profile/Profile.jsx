import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing.unit,
    width: 100,
    height: 100,
  },
  noPhoto: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    fontSize: '60px',
  },
});

const Profile = ({ photoUrl, name, email, children, classes, loading }) => {
  const avatar = photoUrl ? (
    <Avatar alt={name} className={classes.avatar} src={photoUrl} />
  ) : (
    <Avatar alt="No user photo" className={`${classes.avatar} ${classes.noPhoto}`}>
      <PersonIcon className={classes.icon} />
    </Avatar>
  );

  let profile = <CircularProgress color="secondary" />;
  if (!loading) {
    profile = (
      <Fragment>
        {avatar}
        <Typography variant="headline">{name}</Typography>
        <Typography variant="subheading">{email}</Typography>
        {children}
      </Fragment>
    );
  }

  return <div className={classes.root}>{profile}</div>;
};

Profile.defaultProps = {
  name: null,
  email: null,
  photoUrl: null,
  children: null,
};

Profile.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  email: PropTypes.string,
  photoUrl: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    avatar: PropTypes.string,
    noPhoto: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(Profile);
