// Dependencies
import {addNavigationHelpers} from 'react-navigation';

/**
 * Get current route name
 * @param navState Navigation State
 * @returns {*}
 */
export function getCurrentRouteName(navState) {
  if (!navState) {
    return null;
  }

  const navigationState = (navState && navState.toJS && navState.toJS()) || navState;

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }

  return route.routeName;
}

/**
 * Validation if scene is active
 * @param state
 * @param view
 * @returns {boolean}
 */
export function sceneIsActive(state, view) {
  return state.getIn(['navigationState', 'currentRoute']) === view;
}

export function navigationCacher() {
  let _helpers;
  const cachedFunctions = {
    goBack(...args) {
      return _helpers.goBack.apply(undefined, args);
    },

    navigate(...args) {
      return _helpers.navigate.apply(undefined, args);
    },

    setParams(...args) {
      return _helpers.setParams.apply(undefined, args);
    },
  };

  return (navigation) => {
    _helpers = addNavigationHelpers(navigation);

    return {
      ..._helpers,
      ...cachedFunctions,
    };
  };
}
