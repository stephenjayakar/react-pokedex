import React from "react";
import { fetchPokemon } from "utils/actions";
import { connect } from "react-redux";
import { compose } from "redux"
import {
  Input,
  Layout,
  Menu,
  Icon,
} from "antd";

import PokeDetails from "containers/PokeDetails";

export class HomePage extends React.Component {
  render() {
    return (
      <Layout style={styles.page}>
        <Layout.Sider>
          <div className="logo">
            <img src={require("resources/pokeball.png")} style={styles.logoImg} />
            <span style={styles.logoTitle}>
              React Pokédex
            </span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["search"]}>
            <Menu.Item key="search">
              <Icon type="search" />
              Search
            </Menu.Item>
            <Menu.Item key="favorites">
              <Icon type="heart" />
              Favorites
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content>
          <div>
            <h1>Pokedex</h1>
            <Input.Search
              enterButton={true}
              addonBefore="Pokemon"
              onSearch={this.props.fetchPokemon}
            />
            <PokeDetails />
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

const styles = {
  old: {
    padding: 50,
    maxWidth: 600,
    width: "calc(100% - 12px)",
    float: "none",
    margin: "0 auto",
    backgroundColor: "#efefef",
  },
  page: {
    minHeight: window.innerHeight,
  },
  logoImg: {
    width: "80px",
    marginRight: "8px",
  },
  logoTitle: {
    verticalAlign: "text-bottom",
    fontSize: "16px",
    display: "inline-block",
    color: "white",    
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (value) => {
    dispatch(fetchPokemon(value));
  },
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);