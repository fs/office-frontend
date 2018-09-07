import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const suggestions = [
  {
    userId: 1,
    name: 'Albert Gabdullin',
    email: 'albert.gabdullin@flatstack.com',
  },
  {
    userId: 2,
    name: 'Liya Ganeeva',
    email: 'liya.ganeeva@flatstack.com',
  },
  {
    userId: 3,
    name: 'Vladimir Gorniy',
    email: 'vladimir.gorniy@flatstack.com',
  },
].map(suggestion => ({
  value: suggestion.name,
  label: suggestion.name,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 300,
    width: '100%',
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  placeholder: {
    position: 'absolute',
    left: 12,
    fontSize: 16,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <TextField
        fullWidth
        InputProps={{
          inputComponent,
          className: props.selectProps.classes.input,
          inputProps: {
            className: props.selectProps.classes.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    </MuiThemeProvider>
  );
}

function NoOptionsMessage(props) {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    </MuiThemeProvider>
  );
}

function Option(props) {
  return (
    <MuiThemeProvider theme={lightTheme}>
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
    </MuiThemeProvider>
  );
}

function Placeholder(props) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    </MuiThemeProvider>
  );
}

const components = {
  Control,
  Option,
  Placeholder,
  NoOptionsMessage,
};

class SearchBox extends React.Component {
  render() {
    const { classes, theme, tables } = this.props;

    const items = Object.keys(tables).map(item => {
      const table = {
        id: item,
        ...tables[item],
      };
      return table;
    });

    const solutions = items.map(item => {
      return {
        id: item.id,
        value: item.name,
        label: item.name,
      };
    });

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={darkTheme}>
          <Select
            classes={classes}
            options={solutions}
            components={components}
            placeholder="Search user"
            onChange={e => {
              this.props.clicked(e.id);
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchBox);
