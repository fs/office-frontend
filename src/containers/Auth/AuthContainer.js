import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import * as actions from '../../store/actions/index';

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: !!state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: () => dispatch(actions.auth()),
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
