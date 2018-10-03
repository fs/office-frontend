import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles/index';
import TableContainer from '../../containers/TableContainer/TableContainer';
import MapImage from '../MapImage/MapImage';

const styles = {
  progress: {
    alignSelf: 'center',
  },
};

const Map = ({ loading, tableIds, classes }) => {
  const tablesRect = tableIds.map(tableId => <TableContainer key={tableId} tableId={tableId} />);

  if (loading) {
    return <CircularProgress size={96} className={classes.progress} />;
  }

  return <MapImage tablesRect={tablesRect} />;
};

Map.propTypes = {
  classes: PropTypes.shape({
    progressWrapper: PropTypes.string,
  }).isRequired,
  tableIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Map);
