import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";

class PokeDetails extends React.Component {
  render() {
    const loading = this.props.loading;
    const favorites = this.props.favorites;

    if (favorites) {      
      return (
        <div style={{margin: 20}}>
          <ul>
            {favorites.map((name) => 
              <li>{name}</li>
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
  favorites: [...state.favorites],
  loading: state.loading,
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(PokeDetails);