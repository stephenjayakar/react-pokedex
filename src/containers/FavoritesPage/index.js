import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FAVORITES_PATH } from 'utils/constants';
import PokeDetails from 'containers/PokeDetails';

class FavoritesPage extends React.Component {
  render() {
    const currentPath = this.props.currentPath;

    if (currentPath && currentPath !== FAVORITES_PATH) {
      console.log(currentPath);
      return <Redirect to={currentPath} />
    }

    return (
      <div>
        <h1>Favorites Page</h1>
        <PokeDetails />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(FavoritesPage);