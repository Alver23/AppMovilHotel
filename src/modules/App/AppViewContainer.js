// Dependencies
import {connect} from 'react-redux';

// View
import AppView from './AppView';

export default connect(
  state => ({
    isReady: state.getIn(['session', 'isReady'])
  })
)(AppView);
