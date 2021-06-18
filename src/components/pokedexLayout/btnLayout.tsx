import React, { CSSProperties } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from '@material-ui/core';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';
import FilterHdrSharpIcon from '@material-ui/icons/FilterHdrSharp';
import BeachAccessSharpIcon from '@material-ui/icons/BeachAccessSharp';
import { PokeContext } from '../../context/pokeContext';

interface Props {
}


export default class BtnLayout extends React.Component {
    constructor(props: Props) {
        super(props)
    }
    /* Fortsätt här och skapa ett sätt att byta region på onclick för knapparna nedanför */
    setJohto = () => {
        if(this.context.PokemonFuncs) {
            this.context.PokemonFuncs.setRegion("johto")
        }
        else {
            console.log("else")
        }
    }


    render() {
        return (
        <div style = {btnFlexbox}>

            <div style = { btnBlue }>
            <ButtonGroup>
                <Button 
                    onClick={ () => this.context.pokemonFuncs.setRegion("kanto")}
                    startIcon={<HomeSharpIcon/>} style={blueButton} 
                    />
                <Button 
                    onClick={ this.setJohto }
                    startIcon={<FilterHdrSharpIcon/>} style={blueButton} 
                />
                <Button 
                    startIcon={<BeachAccessSharpIcon/>} style={blueButton} 
                />
                <Button 
                    startIcon={<AccountBalanceSharpIcon/>} style={blueButton} 
                />
                <Button 
                    target="_blank" 
                    href="https://github.com/TokJocke/pokedex" 
                    startIcon={<GitHubIcon/>} 
                    style={blueButton} 
                />
            </ButtonGroup>
            </div>


            <div style = { btnWhite }>
            <ButtonGroup>
            <Button
                startIcon={<ArrowDownwardIcon/>} style={whiteButton}
            />
            <Button 
                startIcon={<ArrowUpwardIcon/>} style={whiteButton}
            />
            </ButtonGroup>
            </div>
        </div>
    )  
    }
}
      
BtnLayout.contextType = PokeContext

const blueButton: CSSProperties = {
    backgroundColor: "#28ABFD",
    width: "50px",
    height: "40px",
    paddingRight: "4px",
    margin: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black"
}

const whiteButton: CSSProperties = {
    backgroundColor: "white",
    width: "45px",
    height: "35px",
    paddingRight: "4px",
    margin: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black"
}

const btnBlue: CSSProperties = {
    padding: "0em",
    
}

const btnWhite: CSSProperties = {
    paddingTop: "2em",
}

const btnFlexbox: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    width: "100%",
    margin: "0"
}