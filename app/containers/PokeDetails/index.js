import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

class PokeDetails extends React.Component {
  render() {
    if (this.props.pokemonData) {
      return (
        <div style={{padding: 16}}>
          <p>Pokemon loaded!</p>
          <p>{this.props.pokemonData.name} #{this.props.pokemonData.id}</p>      
          <p>Abilities:</p>
          <ul>
            {this.props.pokemonData.abilities.map((value) => (
              <li>{value.ability.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>Pokemon not loaded</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  pokemonData: state.get("home").pokemonData,
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect,
)(PokeDetails);
