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
import { RESTART_ON_REMOUNT } from "utils/constants";
import saga from "./saga";
import reducer from "./reducers";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchPokemon } from "./actions";

export class HomePage extends React.PureComponent {
  render() {    
    console.log("WTF");
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <button
          onClick={this.props.fetchPokemon}
        >
          meow
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: evt => dispatch(fetchPokemon()),
});

const mapStateToProps = () => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: "home", saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);