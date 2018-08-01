import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Layout, Row, Col, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { PURGE } from 'redux-persist';

import { SEARCH_PATH } from 'utils/constants';
import { fetchPokemon } from 'utils/actions';
import PokeCard from 'containers/PokeCard';
import SearchForm from 'containers/SearchForm';

class SearchPage extends React.Component {
  render() {
    const MOBILE = this.props.mobile;
    const currentPath = this.props.currentPath;
    const purge = this.props.purge;

    if (currentPath && currentPath !== SEARCH_PATH) {
      console.log(currentPath);
      return <Redirect to={currentPath} />
    }

    return (
      <Layout>
        <Row>
          <Col span={MOBILE ? 24 : 16}>
            <Row>
              <SearchForm />
              <Button 
                type='danger'
                style={{'marginTop': 8}}
                onClick={purge}
                icon='api'
                size='large'
                shape='circle'
              />             
            </Row>
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

const mapStateToProps = (state) => ({
  currentPath: state.currentPath,
});

const mapDispatchToProps = (dispatch) => ({
  purge: () => {
    dispatch({type: PURGE, result: ()=>(console.log('purged'))});
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SearchPage);