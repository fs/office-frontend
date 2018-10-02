/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { showTableInfo } from '../../store/tables/actions';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const defaultTheme = createMuiTheme();

const styles = theme => ({
  root: {
    // minWidth: '320px',
    width: '100%',
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      maxWidth: '320px',
      marginRight: 0,
    },
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
});

const NoOptionsMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

const Control = props => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps,
      },
    }}
    {...props.selectProps.textFieldProps}
  />
);

const Option = props => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component="div"
    style={{
      fontWeight: props.isSelected ? 500 : 400,
    }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);

const Placeholder = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const SingleValue = props => (
  <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
    {props.children}
  </Typography>
);

const ValueContainer = props => (
  <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
);

const Menu = props => (
  <MuiThemeProvider theme={defaultTheme}>
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  </MuiThemeProvider>
);

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class SearchContainer extends React.Component {
  handleChange = ({ value }) => {
    const tableId = this.props.users[value].tableId;
    if (tableId) {
      this.props.showTableInfo(tableId);
    } else {
      alert('This user did not have a table');
    }
  };

  render() {
    const { classes, users, currentTableUserId } = this.props;

    const options = Object.keys(users)
      .map(id => users[id])
      .map(user => ({
        value: user.id,
        label: user.name,
      }));

    const selectStyles = {
      input: base => ({
        ...base,
        color: '#fff',
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <MuiThemeProvider theme={darkTheme}>
            <Select
              classes={classes}
              styles={selectStyles}
              options={options}
              components={components}
              value={options.find(({ value }) => currentTableUserId === value) || null}
              onChange={this.handleChange}
              placeholder="Search a user..."
            />
          </MuiThemeProvider>
        </NoSsr>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
  currentTableUserId: state.tables.usersConnections[state.tables.currentTableId],
});

const mapDispatchToProps = {
  showTableInfo,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
);
