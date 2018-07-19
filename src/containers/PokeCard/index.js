import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card, Spin } from "antd";

import TypeButton from "components/TypeButton";
import { getPokemonImgURL } from "utils/PokemonAPI.js";

const { Meta } = Card;

class PokeCard extends React.Component {
  render() {
    const pokeData = this.props.pokeData;
    const loading = this.props.loading;

    if (pokeData) {
      return (
      <Card
          hoverable
          cover={<img src={getPokemonImgURL(pokeData.id)} />}
          style={styles.card}
      >
          <Meta
            title={pokeData.name}
            description={pokeData.types.map((type) => (<TypeButton typeName={type.type.name} />))}
          />
      </Card>
      );
    } else if (loading) {
      return (
        <Card
          loading={loading}
          hoverable
          style={styles.card}
        ></Card>
      );
    } else {
      return <div></div>
    }
  }
}

const styles = {
  card: {
    marginTop: 16,
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokeData,
  loading: state.loading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(PokeCard);



