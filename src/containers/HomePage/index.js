import React from "react";
import { fetchPokemon } from "utils/actions";
import { connect } from "react-redux";
import { compose } from "redux"
import { Input } from "antd";

import PokeDetails from "containers/PokeDetails";

export class HomePage extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h1>Pokedex</h1>
        <Input.Search 
          enterButton={true}
          addonBefore="Pokemon"
          onSearch={this.props.fetchPokemon}
        />
        <PokeDetails />
      </div>
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