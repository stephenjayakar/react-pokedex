import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";

class PokeDetails extends React.Component {
  render() {
    const pokeData = this.props.pokeData;
    const loading = this.props.loading;

    if (pokeData) {      
      return (
        <div style={{margin: 20}}>
          <p>{pokeData.name}</p>
          <ul>
            {pokeData.abilities.map((ability) => 
              <li>{ability.ability.name}</li>
            )}
          </ul>
        </div>
      );
    } else if (loading) {
      return (
        <div style={{margin: 20}}>
          <Spin />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokeData,
  loading: state.loading,
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(PokeDetails);