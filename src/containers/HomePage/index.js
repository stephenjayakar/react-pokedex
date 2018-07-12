import React from "react";
import { fetchPokemon } from "utils/actions";
import { connect } from "react-redux";
import { compose } from "redux"
import { 
  Input, 
  Menu, 
  Layout,   
} from "antd";

import PokeDetails from "containers/PokeDetails";

export class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>Meow</Layout.Header>
        <Layout>
          <Layout.Sider>
            <h1>Test</h1>
          </Layout.Sider>
          <Layout.Content>
            <div style={styles}>
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
      </Layout>
    );
  }
}

const styles = {
  padding: 50,
  maxWidth: 600,
  width: "calc(100% - 12px)",
  float: "none",
  margin: "0 auto",
  backgroundColor: "#efefef",
}

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (value) => {
    dispatch(fetchPokemon(value));
  },
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);