/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import injectSaga from "utils/injectSaga";
import saga from "./saga";
import injectReducer from "utils/injectReducer";
import reducer from "./reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchPokemon, changePokemon } from "./actions";
import PokeDetails from "../PokeDetails";

export class HomePage extends React.PureComponent {
  render() {    
    console.log("WTF");
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form>
          Pokemon
          <input 
            type="text" 
            id="pokemon" 
            value={this.props.pokemon}
            style={{margin: 8, borderRadius: 2}} 
            placeholder="pikachu"
            onChange={this.props.onChangePokemon}
          >
          </input>
          <button
            type="button"
            onClick={this.props.fetchPokemon}
          >
            fetch
          </button>
        </form>
        <PokeDetails />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (evt) => {
    dispatch(fetchPokemon());
  },
  onChangePokemon: (evt) => {
    console.log(evt.target.value);
    dispatch(changePokemon(evt.target.value));
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: "home", saga });
const withReducer = injectReducer({ key: "home", reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);