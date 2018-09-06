import { connect } from 'react-redux';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import { addTableAsync } from '../../store/actions/actions';

export default connect(
  null,
  { addTable: addTableAsync }
)(OfficeMap);
