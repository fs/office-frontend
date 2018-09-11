import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Profile from '../components/Profile/Profile';
import Popup from '../components/Popup/Popup';

storiesOf('Profile', module)
  .addDecorator(story => (
    <div style={{ width: '300px', padding: '24px', margin: '0 auto' }}>{story()}</div>
  ))
  .add('Standard', () => (
    <Profile
      name="Vladimir Gornyy"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
      email="vladimir.gornyy@flatstack.com"
    />
  ))
  .add('Without Photo', () => (
    <Profile name="Vladimir Gornyy" email="vladimir.gornyy@flatstack.com" />
  ))
  .add('With logout button', () => (
    <Profile
      name="Vladimir Gornyy"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
      email="vladimir.gornyy@flatstack.com"
      logout
      onLogoutClick={action('clicked')}
    />
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
