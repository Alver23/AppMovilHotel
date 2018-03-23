// Dependencies
import {connect} from 'react-redux';

// View
import View from './View';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
  })
)(View);
