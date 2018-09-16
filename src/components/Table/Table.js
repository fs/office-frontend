import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';

const styles = theme => ({
  root: {
    cursor: 'pointer',
  },
});

const Table = props => (
  <rect
    className={props.classes.root}
    width="34"
    height="20"
    rx="2"
    x={props.x}
    y={props.y}
    transform={props.transform}
    onClick={event => props.onClick(event, props.id)}
  />
);

Table.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  transform: PropTypes.string,
};

export default withStyles(styles)(Table);
