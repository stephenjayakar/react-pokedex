import React from "react";
import { fetchPokemon } from "utils/actions";
import { connect } from "react-redux";
import { compose } from "redux"
import {
  Input,
  Layout,
  Menu,
  Icon,
  Row,
  Col,
} from "antd";

import PokeDetails from "containers/PokeDetails";
import PokeCard from "containers/PokeCard";

const { Sider, Content } = Layout
const { Item } = Menu;
const HEADER_HEIGHT = 70;
const MOBILE = window.innerWidth < 650;

export class HomePage extends React.Component {
  state = {
    collapsed: MOBILE,
  }

  toggleCollapsed = (collapsed) => {
    this.setState({
      collapsed: collapsed,
    });
  }

  render() {
    return (      
      <Layout style={styles.page}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleCollapsed}
        >
          <div className="logo" style={styles.logo}>
            <img src={require("resources/pokeball.png")} style={styles.logoImg} alt="pokeball" />
            <span style={{
              fontSize: "16px",
              color: "white",
              visibility: this.state.collapsed ? "hidden" : "visible",
            }}>
              React Pokédex
            </span>
          </div>
          <Menu
            defaultSelectedKeys={["search"]}
            theme="dark"
          >
            <Item key="search">
              <Icon type="search" />
              <span>Search</span>
            </Item>
            <Item key="favorites">
              <Icon type="heart" />
              <span>Favorites</span>
            </Item>
          </Menu>
        </Sider>

        <Layout>

          <Content style={styles.content}>
            <Layout>
              <Row>
                <Col span={MOBILE ? 24 : 16}>
                  <div style={styles.searchForm}>
                    <h1>Pokedex</h1>
                    <Input.Search
                      enterButton={true}
                      addonBefore="Pokemon"
                      onSearch={this.props.fetchPokemon}
                    />
                    <PokeDetails />
                  </div>
                </Col>
                <Col span={MOBILE ? 18 : 8}>
                  <PokeCard>
                  </PokeCard>
                </Col>
              </Row>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const styles = {
  content: {
    maxWidth: 1200,
    width: "calc(100% - 12px)",
    backgroundColor: "#efefef",
  },
  page: {
    minHeight: window.innerHeight,
  },
  logo: {
    backgroundColor: "#002140",
    height: HEADER_HEIGHT,
  },
  logoImg: {
    width: "65px",
    margin: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    backgroundColor: "#ffffff",
    padding: 0,
    maxHeight: 200,
    height: HEADER_HEIGHT,
    width: "100%",
    boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
  },
  searchForm: {
    margin: 16,
    padding: 16,
    backgroundColor: "white",
  },
  trigger: {
    fontSize: "1vw",
    display: "block",
    margin: "auto",
    height: HEADER_HEIGHT,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (value) => {
    value = value.trim();
    if (value) {
      dispatch(fetchPokemon(value));
    }
  },
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);