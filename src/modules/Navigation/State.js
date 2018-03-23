// Dependencies
import includes from 'lodash/includes';
import {fromJS} from 'immutable';
import {NavigationActions} from 'react-navigation';

// Components
import AppNavigation from '../../components/Navigation';

// Utils
import {getCurrentRouteName} from '../../utils/navigation';

// Initial State
const initialState = fromJS(AppNavigation.router.getStateForAction(
  AppNavigation.router.getActionForPathAndParams('Home'),
));

export default function NavigationReducer(state = initialState, action) {
  const nextState = AppNavigation.router.getStateForAction(action, state.toJS());

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    // lets find currentScreen before this action based on state
    const currentScreen = getCurrentRouteName(state);
    // determine what the new screen will be after this action was performed
    const nextScreen = getCurrentRouteName(nextState);

    if (nextScreen !== currentScreen) {
      nextState.currentRoute = nextScreen;
      console.log(`screen changed, punk: ${currentScreen} -> ${nextScreen}`);
    }

    return fromJS(nextState);
  }

  return state;
}
