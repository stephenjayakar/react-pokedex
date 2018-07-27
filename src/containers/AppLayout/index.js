import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

import { toFavorites, toSearch } from 'utils/actions';
import SearchPage from 'containers/SearchPage';
import FavoritesPage from 'containers/FavoritesPage';

const { Sider, Content } = Layout
const { Item } = Menu;
const HEADER_HEIGHT = 70;
// TODO: this should be changed to be app-level on resize, and probably part of redux-state
const MOBILE = window.innerWidth < 650;

class AppLayout extends React.Component {
  state = {
    collapsed: MOBILE,
  }

  toggleCollapsed = (collapsed) => {
    this.setState({
      collapsed: collapsed,
    });
  }

  render() {
    const toFavorites = this.props.toFavorites;
    const toSearch = this.props.toSearch;

    return (
      <Layout style={styles.page}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleCollapsed}
        >
          <div className='logo' style={styles.logo}>
            <img src={require('resources/pokeball.png')} style={styles.logoImg} alt='pokeball' />
            <span style={{
              fontSize: '16px',
              color: 'white',
              visibility: this.state.collapsed ? 'hidden' : 'visible',
            }}>
              React Pokédex
            </span>
          </div>
          <Menu
            defaultSelectedKeys={['search']}
            theme='dark'
            onClick={({ item, key, keyPath }) => {
              switch (key) {
                case 'search':
                  toSearch();
                  break;
                case 'favorites':
                  toFavorites();
                  break;
                default:
                  alert(`something went wrong with key ${key}`);
              }
            }}
          >
            <Item key='search'>
              <Icon type='search' />
              <span>Search</span>
            </Item>
            <Item key='favorites'>
              <Icon type='heart' />
              <span>Favorites</span>
            </Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={styles.content}>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={SearchPage} />
                <Route path='/favorites' component={FavoritesPage} />
              </Switch>
            </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const styles = {
  content: {
    maxWidth: 1200,
    width: 'calc(100% - 12px)',
    backgroundColor: '#efefef',
  },
  page: {
    minHeight: window.innerHeight,
  },
  logo: {
    backgroundColor: '#002140',
    height: HEADER_HEIGHT,
  },
  logoImg: {
    width: '65px',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 0,
    maxHeight: 200,
    height: HEADER_HEIGHT,
    width: '100%',
    boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
  },
  trigger: {
    fontSize: '1vw',
    display: 'block',
    margin: 'auto',
    height: HEADER_HEIGHT,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toFavorites: () => { dispatch(toFavorites()); },
  toSearch: () => { dispatch(toSearch()); },
});

const withConnect = connect(null, mapDispatchToProps);

export default withRouter(compose(withConnect)(AppLayout));