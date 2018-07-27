import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Table } from 'antd';

import { FAVORITES_PATH } from 'utils/constants';

class FavoritesPage extends React.Component {
  render() {
    const currentPath = this.props.currentPath;
    const favorites = this.props.favorites;

    const dataSource = Object.keys(favorites).map(
      (name) => ({
        name: name
      })      
    );

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }]

    if (currentPath && currentPath !== FAVORITES_PATH) {
      console.log(currentPath);
      return <Redirect to={currentPath} />
    }

    return (
      <div style={styles.page}>
        <Card
          title='Favorites'
          bordered
        >
          {Object.keys(favorites).length ? (
            <Table dataSource={dataSource} columns={columns} />
          ) : (

            <p>No favorites :(</p>
          )}
        </Card>
      </div>
    );
  }
}

const styles = {
  page: {
    padding: 16,
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
  favorites: state.favorites,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(FavoritesPage);