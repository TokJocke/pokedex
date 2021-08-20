import * as React from "react";
import {
  PokeContext,
  PokemonIndex,
  PokemonOptions,
  PokemonFuncs,
} from "../../context/pokeContext";
import { RouteComponentProps } from "react-router-dom";
import { ReactNode } from "react";
import PokemonProvider from "../../context/pokeProvider";
import { CSSProperties } from "react";

/* Skapa nytt state i context för displayad pokemon */

export default class DetailView extends React.Component<
  RouteComponentProps<{ pokeId: string }>
> {
  async componentDidMount() {
    // this.context.pokemonFuncs.setRegion() //for testing
    await this.context.pokemonFuncs.getPokemonDetails(
      parseInt(this.props.match.params.pokeId)
    );
  }

  shouldComponentUpdate(nextProps: any) {
    console.log(nextProps);
    console.log(this.props);
    if (this.props !== nextProps) {
      window.location.reload();
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.context.pokemonData) {
      return (
        <div style={wrapp}>
          <img
            style={sprite}
            src={this.context.pokemonData.sprites.front_default}
          />
          <div style={infoDiv}>
            <p style={textStyle}>
              Height: {this.context.pokemonData.height * 10}cm
            </p>{" "}
            {/* "The height of the Pokémon, in tenths of a meter (decimeters)" */}
            <p style={textStyle}>
              Weight: {this.context.pokemonData.weight / 10}kg
            </p>{" "}
            {/* "The weight of the Pokémon, in tenths of a kilogram (hectograms)" */}
          </div>
        </div>
      );
    }
    return <p>not working</p>;
  }
}

export const wrapp: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  alignItems:
    "flex-end" /* To get infoDiv att bottom img not effected cuz of width & height 100% */,
};

export const sprite: CSSProperties = {
  width: "100%",
  height: "100%",
};

export const infoDiv: CSSProperties = {
  position: "absolute",
  zIndex: 5,
  /*     display: "flex",
    justifyContent: "space-between",
    width: "100%", */
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  padding: "1px",
  borderRadius: "5px",
};

export const textStyle: CSSProperties = {
  margin: "0",
  //backgroundColor: "rgba(255, 255, 255, 0.4)",
  fontWeight: "bold",
  fontSize: "0.9em",
  //borderRadius: "5px",
};

DetailView.contextType = PokeContext;
