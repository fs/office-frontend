/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Button from '@material-ui/core/Button';

import Profile from '../components/Profile/Profile';
import Popup from '../components/Popup/Popup';

storiesOf('Profile', module)
  .addDecorator(story => (
    <div style={{ width: '300px', padding: '24px', margin: '0 auto' }}>{story()}</div>
  ))
  .add('Standard', () => (
    <Profile
      name="Vladimir Gornyy"
      email="vladimir.gornyy@flatstack.com"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
    />
  ))
  .add('Without Photo', () => (
    <Profile name="Vladimir Gornyy" email="vladimir.gornyy@flatstack.com" />
  ))
  .add('With logout button', () => (
    <Profile
      name="Vladimir Gornyy"
      email="vladimir.gornyy@flatstack.com"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
    >
      <Button
        style={{ marginTop: '24px' }}
        variant="outlined"
        fullWidth
        color="secondary"
        onClick={action('Logout')}
      >
        Logout
      </Button>
    </Profile>
  ));

storiesOf('Popup', module)
  .addDecorator(story => <div style={{ position: 'relative' }}>{story()}</div>)
  .add('Standard', () => (
    <Popup
      x={300}
      y={300}
      name="Vladimir Gornyy"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
      email="vladimir.gornyy@flatstack.com"
      handleClosePopupClick={action('clicked')}
    />
  ))
  .add('Without Photo', () => (
    <Popup
      x={300}
      y={300}
      name="Vladimir Gornyy"
      email="vladimir.gornyy@flatstack.com"
      handleClosePopupClick={action('clicked')}
    />
  ));
