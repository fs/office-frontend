import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import * as actions from '../../store/actions/index';

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
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
