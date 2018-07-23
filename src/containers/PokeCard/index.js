import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Card, Button } from "antd";

import TypeButton from "components/TypeButton";
import { getPokemonImgURL } from "utils/PokemonAPI.js";

const { Meta } = Card;

class PokeCard extends React.Component {
  state = {
    favorite: false,
  }

  toggleFavorite = () => {
    this.setState({
      favorite: !this.state.favorite,
    });
  }

  render() {
    const pokeData = this.props.pokeData;
    const loading = this.props.loading;
    const favorite = this.state.favorite;

    if (pokeData) {
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
                {pokeData.types.map((type) => (<TypeButton typeName={type.type.name} />))}
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
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(PokeCard);



