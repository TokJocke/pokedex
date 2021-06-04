import React, { CSSProperties } from 'react';





export default function SearchInput() {
    return (
        <input style = { pokeInput } placeholder = { "sök här...."} />
    );
}

export const pokeInput: CSSProperties = {
    backgroundColor: "#51AC5F",
    border: "2px solid black",
    width: "90%",
    height: "55%",
    fontSize: "1.5em"
}