import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles/index';
import TableContainer from '../../containers/TableContainer/TableContainer';
import MapImage from '../MapImage/MapImage';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
  },
  progressWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Map = ({ loading, tableIds, classes }) => {
  const tablesRect = tableIds.map(tableId => <TableContainer key={tableId} tableId={tableId} />);

  if (loading) {
    return (
      <div className={classes.progressWrapper}>
        <CircularProgress size={96} />
      </div>
    );
  }

  return (
    <section className={classes.wrapper}>
      <MapImage tablesRect={tablesRect} />
    </section>
  );
};

Map.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    progressWrapper: PropTypes.string,
  }).isRequired,
  tableIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Map);
