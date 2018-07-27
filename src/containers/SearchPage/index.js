import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Layout, Row, Col, Input } from 'antd';
import { Redirect } from 'react-router-dom';

import { SEARCH_PATH } from 'utils/constants';
import { fetchPokemon } from 'utils/actions';
import PokeCard from 'containers/PokeCard';

class SearchPage extends React.Component {
  render() {
    const MOBILE = this.props.mobile;
    const fetchPokemon = this.props.fetchPokemon;
    const currentPath = this.props.currentPath;

    if (currentPath && currentPath !== SEARCH_PATH) {
      console.log(currentPath);
      return <Redirect to={currentPath} />
    }

    return (
      <Layout>
        <Row>
          <Col span={MOBILE ? 24 : 16}>
            <div style={styles.searchForm}>
              <h1>Pokedex</h1>
              <Input.Search
                enterButton={true}
                addonBefore='Pokemon'
                onSearch={fetchPokemon}
              />
            </div>
          </Col>
          <Col span={MOBILE ? 18 : 8}>
            <PokeCard>
            </PokeCard>
          </Col>
        </Row>
      </Layout>
    );
  }
}

const styles = {  
  searchForm: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
  },  
}

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (value) => {
    value = value.trim();
    if (value) {
      dispatch(fetchPokemon(value));
    }
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SearchPage);