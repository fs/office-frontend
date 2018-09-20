import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';

const styles = {
  root: {
    cursor: 'pointer',
  },
};

const Table = ({ classes, x, y, transform, color, id, onClick }) => (
  <rect
    className={classes.root}
    width="34"
    height="20"
    rx="2"
    x={x}
    y={y}
    transform={transform}
    fill={color}
    onClick={event => onClick(event, id)}
  />
);

Table.defaultProps = {
  transform: null,
  color: null,
};

Table.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  transform: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Table);
