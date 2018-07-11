import React from "react";
import { changePokemon, fetchPokemon } from "utils/actions";
import { connect } from "react-redux";
import { compose } from "redux"

import PokeDetails from "containers/PokeDetails";

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <input
          type="text"
          id="pokemon"
          style={{margin: 8, borderRadius: 2}}
          placeholder="pikachu"
          onChange={this.props.onChangePokemon}
        >
        </input>
        <button
          onClick={this.props.fetchPokemon}
        >
          Search
        </button>
        <PokeDetails />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangePokemon: (evt) => {
    dispatch(changePokemon(evt.target.value));
  },
  fetchPokemon: () => {
    dispatch(fetchPokemon());
  }
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);