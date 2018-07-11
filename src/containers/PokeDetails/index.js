import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

class PokeDetails extends React.Component {
  render() {
    const pokeData = this.props.pokeData;
    if (pokeData) {
      return (
        <div>
          <p>{pokeData.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Pokemon not fetched</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokeData
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(PokeDetails);