import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import { auth, logout } from '../../store/auth/actions';

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading,
  currentUser: state.auth.user,
  isAuthenticated: !!state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onAuth: () => dispatch(auth()),
  onLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
