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
  Button,
} from "antd";

import PokeDetails from "containers/PokeDetails";

const { Header, Sider, Content } = Layout
const HEADER_HEIGHT = 70;

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };

    this.toggle = this.toggle.bind(this);
  }

  render() {
    const navText = {
      color: this.state.collapsed ? "#00000000" : "white",
    }
    return (
      <Layout style={styles.page}>
        <Sider
          trigger={null}
          collapsible="true"
          collapsed={this.state.collapsed}
        >
          <div className="logo" style={styles.logo}>
            <img src={require("resources/pokeball.png")} style={styles.logoImg} />
            <span style={{
              verticalAlign: "text-bottom",
              fontSize: "16px",
              display: "inline-block",
              color: "white",
              visibility: this.state.collapsed ? "hidden" : "visible",
            }}>
              React Pokédex
            </span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["search"]}>
            <Menu.Item key="search">
              <Icon type="search" />
              <span style={navText}>
                Search
              </span>
            </Menu.Item>
            <Menu.Item key="favorites">
              <Icon type="heart" />
              <span style={navText}>
                Favorites
              </span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>

          <Header style={styles.header}>
            <Row>
              <Col span={1}>
                <div style={styles.trigger}>
                  <Button
                    className="trigger"
                    icon={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}
                    size="large"
                    style={{ border: 0 }}
                  />
                </div>
              </Col>
            </Row>
          </Header>

          <Content style={styles.content}>
            <Layout>
              <Row>
                <Col span={12}>
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
              </Row>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }

  toggle() {
    this.setState({ collapsed: !this.state.collapsed })
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
    marginRight: "8px",
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
    dispatch(fetchPokemon(value));
  },
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);