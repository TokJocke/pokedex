import React, { CSSProperties } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { PokeContext } from "../../context/pokeContext";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

export default class SearchInput extends React.Component {
  result(searchValue: any) {
    const foundPokemon = (pokemon: any) => {
      return pokemon.name === searchValue;
    };
    createBrowserHistory({ forceRefresh: true }).push(
      `${this.context.currentRegion?.name}/detail/${
        this.context.allPokemons.find(foundPokemon).id
      }`
    );
    console.log(createBrowserHistory());
  }

  render() {
    return (
      <div style={{ width: 250 }}>
        <Autocomplete
          onChange={(_, value) => (value != null ? this.result(value) : "")}
          freeSolo
          options={this.context.allPokemons.map((pokemon: any) => pokemon.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Pokemon"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    );
  }
}

/* export const pokeInput: CSSProperties = {
    backgroundColor: "#51AC5F",
    border: "2px solid black",
    width: "90%",
    height: "55%",
    fontSize: "1.5em"
} */

SearchInput.contextType = PokeContext;
