import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, Table, Button } from 'antd';

import TypeButton from 'components/TypeButton';
import { removeFavorite } from 'utils/actions';
import { getPokemonIconImgURL } from 'utils/PokemonAPI';
import { FAVORITES_PATH } from 'utils/constants';

class FavoritesPage extends React.Component {
  render() {
    const currentPath = this.props.currentPath;
    const favorites = this.props.favorites;
    const removeFavorite = this.props.removeFavorite;

    const dataSource = Object.keys(favorites).map(
      (name) => {
        const id = favorites[name].id;
        const types = favorites[name].types.map((typeObj) => (
          typeObj.type.name
        ));

        return ({
          key: id,
          name: name,
          id: id,
          types: types,
        });     
      }
    );

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',   
      render: (text, record, index) => (
        <div><img src={getPokemonIconImgURL(text)} alt="icon" />{text}</div>
      )
    },
    {
      title: "Types",
      dataIndex: 'types',
      key: 'types',
      render: (text, record, index) => (
        <div>
          {text.map((type) => (<TypeButton key={type} typeName={type} />))}
        </div>
      )
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record, index) => (
        <Button
          type='danger'
          onClick={() => {
            removeFavorite(record.name);
          }
          }
        >
          Delete
        </Button>  
      )      
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
    width: 600,
  }
}

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (name) => {
    dispatch(removeFavorite(name));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FavoritesPage);