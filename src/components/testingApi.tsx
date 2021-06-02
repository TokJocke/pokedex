import React from 'react';


interface Props {

}


export default class TestApi extends React.Component {
    constructor(props: Props) {
        super(props)
    
    }

    testApi: () => void = () => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=60')
        .then(response => response.json())
        .then(data => console.log(data));
        
    }


    testpoke: () => void = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/3/')
        .then(response => response.json())
        .then(data => console.log(data));
    }



    render() {
        return (
            <h1> 
                api component working
                {this.testpoke()}
                {/* {this.testApi()} */}
            </h1>
           
        )
    }

}