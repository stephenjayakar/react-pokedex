import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card, Button } from "antd";

import TypeButton from "components/TypeButton";
import { getPokemonImgURL } from "utils/PokemonAPI.js";
import { addFavorite, removeFavorite } from "utils/actions";

const { Meta } = Card;

class PokeCard extends React.Component {
  toggleFavorite = () => {
    if (!this.favorite()) {
      this.props.addFavorite(this.props.pokeData);
    } else {
      this.props.removeFavorite(this.props.pokeData.name);
    }
  }

  favorite = () => {
    const pokeData = this.props.pokeData;
    const favorites = this.props.favorites;

    if (pokeData && favorites) {
      return pokeData.name in favorites;
    }
  }

  render() {
    const pokeData = this.props.pokeData;
    const loading = this.props.loading;
    const favorite = this.favorite();

    if (pokeData && !loading) {
      return (
      <Card
          hoverable
          cover={<img src={getPokemonImgURL(pokeData.id)} alt="pokemon"/>}
          style={styles.card}
      >
        <Meta
            title={pokeData.name}
            description={
              <span>
                {pokeData.types.map((typeObj) => (<TypeButton key={typeObj.type.name} typeName={typeObj.type.name} />))}
                <Button 
                  icon="heart" 
                  style={{
                    float: "right", 
                    color: favorite ? "red" : "#60606050"
                  }}
                  shape="circle"
                  onClick={this.toggleFavorite}
                />
              </span>
            }
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
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (pokeData) => {
    dispatch(addFavorite(pokeData));
  },
  removeFavorite: (name) => {
    dispatch(removeFavorite(name));
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PokeCard);



