import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card } from "antd";

import { getPokemonImgURL } from "utils/PokemonAPI.js";

const { Meta } = Card;

class PokeCard extends React.Component {
  render() {
    console.log("Card Render");
    const pokeData = this.props.pokeData;
    if (pokeData) {
      return (
        <Card
          hoverable
          cover={<img alt="example" src={getPokemonImgURL(pokeData.id)} />}
        >
          <Meta
            title={pokeData.name}
            description={pokeData.types.map((type) => (type.type.name + " "))}
          />
        </Card>
      );
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokeData,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(PokeCard);



