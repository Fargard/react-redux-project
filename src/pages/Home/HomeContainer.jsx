import React from 'react';
import { connect } from 'react-redux';
// Ducks
import { effects as testEffects, selectors as testSelectors } from 'src/redux/ducks/test.duck';
// Components
import Home from './Home';

function HomeContainer(props) {
  return <Home {...props} />;
}

const mapStateToProps = (state) => ({
  error: testSelectors.getError(state),
  message: testSelectors.getMessage(state),
});

const mapDispatchToProps = {
  ...testEffects,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
