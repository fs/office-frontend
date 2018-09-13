import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
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

const Profile = props => {
  const avatar = props.photoUrl ? (
    <Avatar className={props.classes.avatar} src={props.photoUrl} />
  ) : (
    <Avatar className={`${props.classes.avatar} ${props.classes.noPhoto}`}>
      <PersonIcon className={props.classes.icon} />
    </Avatar>
  );

  return (
    <div className={props.classes.root}>
      {avatar}
      <Typography variant="headline">{props.name}</Typography>
      <Typography variant="subheading">{props.email}</Typography>
      {props.children}
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
};

export default withStyles(styles)(Profile);
