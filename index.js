import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/App/AppViewContainer';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

class AppMovilHotel extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AppMovilHotel', () => AppMovilHotel);
