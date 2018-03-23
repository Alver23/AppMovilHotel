// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  AppState,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import NavigationContainer from '../Navigation/Container';
import * as snapshotUtil from '../../utils/snapshot';
import * as SessionStateActions from '../session/SessionState';
import store from '../../redux/store';
import DeveloperMenu from '../../components/DeveloperMenu';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='#455a64' barStyle='light-content' />
        <NavigationContainer />
        {__DEV__ && (<Text>Current state is: {this.state.appState}</Text>)}
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default AppView;
