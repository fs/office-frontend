import { connect } from 'react-redux';
import Map from '../../components/Map/Map';
// import { databaseRef } from '../../firebase';
// import tables from '../../tables';
//   tables.map(item => {
//     databaseRef.ref('/tables').push(item);
//   });
// }

const mapStateToProps = state => ({
  loading: state.tables.loading,
  tableIds: Object.keys(state.tables.tables),
});

export default connect(mapStateToProps)(Map);
