import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import PopupContainer from '../../containers/PopupContainer/PopupContainer';

const styles = {
  root: {
    cursor: 'pointer',
  },
};

class Table extends Component {
  rectRef = React.createRef();

  render() {
    const { classes, x, y, transform, id, currentTableId, isOccupied, theme, onClick } = this.props;
    return (
      <Fragment>
        {currentTableId === id && <PopupContainer rectRef={this.rectRef} />}
        <rect
          className={classes.root}
          width="34"
          height="20"
          rx="2"
          x={x}
          y={y}
          transform={transform}
          fill={isOccupied ? theme.palette.primary.light : null}
          onClick={onClick}
          ref={this.rectRef}
          data-stop-propagation
        />
      </Fragment>
    );
  }
}

Table.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  transform: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  currentTableId: PropTypes.string,
  isOccupied: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
    direction: PropTypes.string,
    mixins: PropTypes.object,
    overrides: PropTypes.object,
    palette: PropTypes.object,
    props: PropTypes.object,
    shadows: PropTypes.arrayOf(PropTypes.string),
    typography: PropTypes.object,
    shape: PropTypes.object,
    spacing: PropTypes.object,
    transitions: PropTypes.object,
    zIndex: PropTypes.object,
  }).isRequired,
};

export default withStyles(styles, { withTheme: true })(Table);
