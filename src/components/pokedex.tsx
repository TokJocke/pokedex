import React, { CSSProperties } from "react";
import PokeDexSide from "./pokedexLayout/pokeDexSide";
import PokeDexTop from "./pokedexLayout/pokeDexTop";
import PokeDexCenter from "./pokedexLayout/pokeDexCenter";
import PokeDexBottom from "./pokedexLayout/pokeDexBottom";
import PokeDexMainDisplay from "./pokedexLayout/pokeDexMainDisplay";
import PokeDexSecondDisplay from "./pokedexLayout/pokeDexSecondDisplay";
import NavBtnWrap from "./pokedexLayout/navBtnWrap";
import SearchInput from "./pokedexLayout/searchInput";
import rightTopDetails from "../assets/topheader.svg";
import leftTopDetails from "../assets/rightheader.svg";
import PokemonProvider from "../context/pokeProvider";
import BtnLayout from "./pokedexLayout/btnLayout";
import GrayBoxes from "./pokedexLayout/grayBoxes";
import { BrowserRouter } from "react-router-dom";
import {
  PokeContext,
  PokemonIndex,
  PokemonFuncs,
  PokemonOptions,
} from "../context/pokeContext";
import ErrorBoundry from "./pokedexFunctions/errorBoundry";

type Device = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

interface Props {}

interface State {
  device: Device;
}
export default class Pokedex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { device: this.updateDevice() };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      const currentDevice = this.updateDevice();
      this.setState({
        device: currentDevice,
      });
    });
  }

  updateDevice = () => {
    const width = window.innerWidth;
    const currentDevice: Device = {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };

    if (width <= 480) {
      currentDevice.isMobile = true;
    } else if (width > 480 && width <= 768) {
      currentDevice.isTablet = true;
    } else {
      currentDevice.isDesktop = true;
    }

    return currentDevice;
  };

  render() {
    return (
      <BrowserRouter>
        <div
          style={{
            ...mainWrap,
            flexDirection: this.state.device.isMobile
              ? "column"
              : this.state.device.isTablet
              ? "row"
              : "row",
          }}
        >
          <PokeDexSide>
            <PokeDexTop bgImg={leftTopBgImg} />
            <PokeDexCenter>
              <PokeDexMainDisplay />
              <NavBtnWrap /> {/* knappar */}
            </PokeDexCenter>
            <PokeDexBottom>
              <ErrorBoundry>
                <SearchInput />
              </ErrorBoundry>
            </PokeDexBottom>
          </PokeDexSide>
          <PokeDexSide>
            <PokeDexTop bgImg={rightTopBgImg} />
            <PokeDexCenter>
              <PokeDexSecondDisplay />
              <BtnLayout /> {/* knappar */}
            </PokeDexCenter>
            <PokeDexBottom>
              <GrayBoxes />
            </PokeDexBottom>
          </PokeDexSide>
        </div>
      </BrowserRouter>
    );
  }
}

export const mainWrap: CSSProperties = {
  display: "flex",
  boxShadow: "0 0 40px 20px",
  justifyContent: "center",
};

export const leftTopBgImg: CSSProperties = {
  backgroundImage: `url(${rightTopDetails})`,
  backgroundSize: "cover",
};

export const rightTopBgImg: CSSProperties = {
  backgroundImage: `url(${leftTopDetails})`,
  backgroundSize: "cover",
};
