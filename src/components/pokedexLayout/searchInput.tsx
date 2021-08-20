import React, { CSSProperties } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { PokeContext } from "../../context/pokeContext";
import { Redirect, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

interface State {
  result?: string;
  shouldRedirect: boolean;
}

export default class SearchInput extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: undefined,
      shouldRedirect: false,
    };
  }

  result: (searchValue: any) => void = (searchValue: any) => {
    const foundPokemon = (pokemon: any) => {
      return pokemon.name === searchValue;
    };
    this.setState({
      result: `/${this.context.currentRegion?.name}/detail/${
        this.context.allPokemons.find(foundPokemon).id
      }`,
      shouldRedirect: true,
    });
  };

  render() {
    if (this.state.shouldRedirect === true && this.state.result) {
      this.setState(
        {
          shouldRedirect: false,
        },
        () => {
          console.log(this.state);
        }
      );
      return <Redirect to={this.state.result} />;
    } else {
      return (
        <div style={{ width: 250 }}>
          <Autocomplete
            onChange={(_, value) => (value != null ? this.result(value) : "")}
            freeSolo
            options={this.context.allPokemons.map(
              (pokemon: any) => pokemon.name
            )}
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
}
/*     createBrowserHistory({ forceRefresh: true }).push(
      `${this.context.currentRegion?.name}/detail/${
        this.context.allPokemons.find(foundPokemon).id
      }`
    );
    console.log(createBrowserHistory()); */

/* export const pokeInput: CSSProperties = {
    backgroundColor: "#51AC5F",
    border: "2px solid black",
    width: "90%",
    height: "55%",
    fontSize: "1.5em"
} */

SearchInput.contextType = PokeContext;
