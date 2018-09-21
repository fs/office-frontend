import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles/index';
import Table from '../Table/Table';
import Popup from '../Popup/Popup';
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

const Map = ({
  loading,
  tables,
  onTableClick,
  usersConnections,
  theme,
  classes,
  popup,
  users,
  userId,
  currentUser,
  isAuthenticated,
  handleHoldClick,
  handlePopupClose,
  loadingUser,
}) => {
  const tablesRect = tables.map(table => (
    <Table
      x={table.x}
      y={table.y}
      transform={table.transform}
      id={table.id}
      key={table.id}
      onClick={onTableClick}
      color={usersConnections[table.id] ? theme.palette.primary.light : null}
    />
  ));

  return loading ? (
    <div className={classes.progressWrapper}>
      <CircularProgress size={96} />
    </div>
  ) : (
    <section className={classes.wrapper}>
      {popup.open && (
        <Popup
          x={popup.x}
          y={popup.y}
          centerHorizontal={popup.centerHorizontal}
          centerVertical={popup.centerVertical}
          tableId={popup.tableId}
          user={users[userId]}
          isCurrentUser={currentUser.userId === userId}
          isAuthenticated={isAuthenticated}
          handleHoldClick={handleHoldClick}
          handlePopupClose={handlePopupClose}
          loading={loadingUser}
        />
      )}
      <MapImage tablesRect={tablesRect} />
    </section>
  );
};

Map.defaultProps = {
  users: null,
  userId: null,
  currentUser: null,
};

Map.propTypes = {
  tables: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTableClick: PropTypes.func.isRequired,
  usersConnections: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
    direction: PropTypes.string,
    mixins: PropTypes.object,
    overrides: PropTypes.object,
    palette: PropTypes.object,
    props: PropTypes.object,
    shadows: PropTypes.array,
    typography: PropTypes.object,
    shape: PropTypes.object,
    spacing: PropTypes.object,
    transitions: PropTypes.object,
    zIndex: PropTypes.object,
  }).isRequired,
  classes: PropTypes.shape({
    progressWrapper: PropTypes.string,
    wrapper: PropTypes.string,
  }).isRequired,
  popup: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    centerHorizontal: PropTypes.number,
    centerVertical: PropTypes.number,
    tableId: PropTypes.string,
    open: PropTypes.bool,
  }).isRequired,
  users: PropTypes.objectOf(PropTypes.object),
  userId: PropTypes.string,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    photoUrl: PropTypes.string,
    userId: PropTypes.string,
  }),
  isAuthenticated: PropTypes.bool.isRequired,
  handleHoldClick: PropTypes.func.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  loadingUser: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(Map);
