import React from 'react';
import Paper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    maxWidth: '300px',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.3))',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-16px',
      left: '50%',
      zIndex: 999,
      transform: 'translateX(-50%)',
      borderStyle: 'solid',
      borderWidth: '16px 16px 0 16px',
      borderColor: 'white transparent transparent transparent',
    },
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
});

const Popup = ({ classes, name, email }) => {
  return (
    <Paper className={classes.root} elevation={0}>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography variant="headline" component="h3">
        {name}
      </Typography>
      <Typography>{email}</Typography>
    </Paper>
  );
};

export default withStyles(styles)(Popup);
