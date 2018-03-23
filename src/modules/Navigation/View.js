// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navigation from '../../components/Navigation';

// Utils
import {navigationCacher} from '../../utils/navigation';

class View extends React.Component {
  static displayName = 'View';

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigationState: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        routeName: PropTypes.string.isRequired,
      })),
    }).isRequired,
    handleNavigationBarAction: PropTypes.func,
    editModeEnable: PropTypes.bool,
    countOptionSelected: PropTypes.number,
  };

  render() {
    const addCachedNavigationHelpers = navigationCacher();
    return (
      <Navigation
        navigation={
          addCachedNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigationState,
          })
        }
      />
    );
  }
}

export default View;
