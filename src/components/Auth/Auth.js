import React from 'react';
import PropTypes from 'prop-types';

const Auth = ({ email, password, onEmailChange, onPasswordChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Your email"
        onChange={event => onEmailChange(event.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Your password"
        onChange={event => onPasswordChange(event.target.value)}
        value={password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

Auth.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Auth;
