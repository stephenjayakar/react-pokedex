import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FAVORITES_PATH } from 'utils/constants';

class FavoritesPage extends React.Component {
  render() {
    const currentPath = this.props.currentPath;
    const favorites = this.props.favorites;

    if (currentPath && currentPath !== FAVORITES_PATH) {
      console.log(currentPath);
      return <Redirect to={currentPath} />
    }

    return (
      <div>
        <h1>Favorites Page</h1>
        <ul>
          {favorites.map((name) => (<li>{name}</li>))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
  favorites: [...state.favorites],
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(FavoritesPage);